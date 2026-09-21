/*
 * Gera a versao publicavel: um unico arquivo HTML com o estilo, o conteudo e
 * a logica ja embutidos dentro dele.
 *
 *   npm run publicar
 *
 * Saida: publico/index.html
 *
 * Use isso quando quiser hospedar a ferramenta num link publico. Depois de
 * editar dados/conteudo.js, rode de novo para o link refletir os textos novos.
 * Para rodar na sua maquina, nada disso e necessario: use npm start.
 */
const fs = require('fs');
const path = require('path');

const RAIZ = __dirname;
const ler = (arquivo) => fs.readFileSync(path.join(RAIZ, arquivo), 'utf8');

// Impede que um "</script>" dentro do codigo feche a tag antes da hora.
const seguro = (codigo) => codigo.replace(/<\/script>/gi, '<\\/script>');

let html = ler('index.html');

// O ambiente de publicacao ja fornece a casca do documento (doctype, head e
// body) e os metas de charset e viewport, entao eles saem daqui.
html = html
  .replace(/<!DOCTYPE html>\s*/i, '')
  .replace(/<html[^>]*>\s*/i, '')
  .replace(/<\/html>\s*/i, '')
  .replace(/<head>\s*/i, '')
  .replace(/<\/head>\s*/i, '')
  .replace(/<body>\s*/i, '')
  .replace(/<\/body>\s*/i, '')
  .replace(/<meta charset="utf-8">\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '');

// Estilo e scripts deixam de ser arquivos separados e entram no proprio HTML.
html = html.replace(
  /<link rel="stylesheet" href="estilo\.css">/,
  '<style>\n' + ler('estilo.css') + '\n</style>'
);

html = html.replace(
  /<script src="dados\/conteudo\.js"><\/script>/,
  '<script>\n' + seguro(ler('dados/conteudo.js')) + '\n</script>'
);

html = html.replace(
  /<script src="app\.js"><\/script>/,
  '<script>\n' + seguro(ler('app.js')) + '\n</script>'
);

// Conferencia: nao pode sobrar referencia a arquivo externo.
const pendentes = html.match(/(?:src|href)="(?!data:|https?:)[^"]+"/g) || [];
if (pendentes.length) {
  console.error('Sobraram arquivos externos, o link publico ficaria quebrado:');
  pendentes.forEach((p) => console.error('  ' + p));
  process.exit(1);
}

fs.mkdirSync(path.join(RAIZ, 'publico'), { recursive: true });
fs.writeFileSync(path.join(RAIZ, 'publico/index.html'), html.trim() + '\n');

const kb = Math.round(Buffer.byteLength(html, 'utf8') / 1024);
console.log('');
console.log('  publico/index.html gerado (' + kb + ' KB, arquivo unico).');
console.log('  Videos no arquivo: ' + (html.match(/id: '[a-z]+-\d+'/g) || []).length);
console.log('');
