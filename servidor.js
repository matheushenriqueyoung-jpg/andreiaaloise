/*
 * Servidor estatico minimo, sem nenhuma dependencia externa.
 * Usa apenas modulos nativos do Node. Nao precisa de internet.
 *
 *   npm start
 *
 * Abra http://localhost:4321
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORTA = process.env.PORT || 4321;
const RAIZ = __dirname;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon'
};

http
  .createServer((req, res) => {
    let caminho = decodeURIComponent(req.url.split('?')[0]);
    if (caminho === '/') caminho = '/index.html';

    const arquivo = path.join(RAIZ, path.normalize(caminho).replace(/^(\.\.[/\\])+/, ''));

    // Nunca serve nada fora da pasta do projeto.
    if (!arquivo.startsWith(RAIZ)) {
      res.writeHead(403).end('Acesso negado');
      return;
    }

    fs.readFile(arquivo, (erro, conteudo) => {
      if (erro) {
        // Qualquer rota desconhecida cai no app. A tela nunca quebra.
        fs.readFile(path.join(RAIZ, 'index.html'), (e2, home) => {
          if (e2) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Nao encontrado');
            return;
          }
          res.writeHead(200, { 'Content-Type': TIPOS['.html'] }).end(home);
        });
        return;
      }
      res.writeHead(200, {
        'Content-Type': TIPOS[path.extname(arquivo).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-cache'
      }).end(conteudo);
    });
  })
  .listen(PORTA, () => {
    console.log('');
    console.log('  Roteirista de Bolso rodando.');
    console.log('  Abra:  http://localhost:' + PORTA);
    console.log('');
    console.log('  Atalho de reset durante a gravacao: Esc');
    console.log('');
  });
