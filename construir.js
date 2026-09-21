/*
 * Gera as versoes publicaveis da ferramenta, com estilo, conteudo e logica
 * embutidos num arquivo so.
 *
 *   npm run publicar
 *
 * Saidas:
 *   publico/index.html     pagina completa, para qualquer hospedagem
 *                          (GitHub Pages, Netlify, Vercel, duplo clique)
 *   publico/artefato.html  mesma pagina sem a casca do documento, para
 *                          publicar como artefato do Claude, que ja fornece
 *                          a casca e os metas por conta propria
 *
 * Rode de novo depois de editar dados/conteudo.js, senao o link publicado
 * continua com os textos antigos.
 */
const fs = require('fs');
const path = require('path');

const RAIZ = __dirname;
const ler = (arquivo) => fs.readFileSync(path.join(RAIZ, arquivo), 'utf8');

// Impede que um "</script>" dentro do codigo feche a tag antes da hora.
const seguro = (codigo) => codigo.replace(/<\/script>/gi, '<\\/script>');

let html = ler('index.html');

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

// Conferencia: nao pode sobrar referencia a arquivo externo, senao o link
// publicado abriria quebrado sem avisar ninguem.
const pendentes = html.match(/(?:src|href)="(?!data:|https?:)[^"]+"/g) || [];
if (pendentes.length) {
  console.error('Sobraram arquivos externos, o link publico ficaria quebrado:');
  pendentes.forEach((p) => console.error('  ' + p));
  process.exit(1);
}

// --- versao 1: pagina completa, para hospedagem comum --------------------
const completa = html;

// --- versao 2: sem a casca, para o artefato do Claude --------------------
const artefato = html
  .replace(/<!DOCTYPE html>\s*/i, '')
  .replace(/<html[^>]*>\s*/i, '')
  .replace(/<\/html>\s*/i, '')
  .replace(/<head>\s*/i, '')
  .replace(/<\/head>\s*/i, '')
  .replace(/<body>\s*/i, '')
  .replace(/<\/body>\s*/i, '')
  .replace(/<meta charset="utf-8">\s*/i, '')
  .replace(/<meta name="viewport"[^>]*>\s*/i, '');

// A pagina completa precisa da meta de viewport, senao abre em largura de
// desktop no celular. A do artefato nao, porque o ambiente ja fornece a dela.
if (!/<meta name="viewport"/i.test(completa)) {
  console.error('A pagina completa ficou sem a meta de viewport.');
  process.exit(1);
}

fs.mkdirSync(path.join(RAIZ, 'publico'), { recursive: true });
fs.writeFileSync(path.join(RAIZ, 'publico/index.html'), completa.trim() + '\n');
fs.writeFileSync(path.join(RAIZ, 'publico/artefato.html'), artefato.trim() + '\n');

const kb = (t) => Math.round(Buffer.byteLength(t, 'utf8') / 1024) + ' KB';
console.log('');
console.log('  publico/index.html     ' + kb(completa) + '  (pagina completa)');
console.log('  publico/artefato.html  ' + kb(artefato) + '  (para o artefato)');
console.log('  Videos embutidos: ' + (html.match(/id: '[a-z]+-\d+'/g) || []).length);
console.log('');
