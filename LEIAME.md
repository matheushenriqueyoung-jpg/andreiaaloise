# Roteirista de Bolso

Ferramenta do LCS, feita para ser **gravada em tela**. Não tem servidor, não tem
banco de dados, não tem login e não chama nenhuma inteligência artificial: todo
o conteúdo já está escrito dentro do projeto. O mesmo nicho e o mesmo vídeo
produzem sempre exatamente o mesmo roteiro, em toda gravação.

---

## 1. Como rodar

Precisa do Node instalado. Na pasta do projeto:

```
npm start
```

Abra **http://localhost:4321** no navegador e coloque em tela cheia (F11).

> Também funciona sem servidor nenhum: dá um duplo clique no `index.html` que
> ele abre direto no navegador. O `npm start` é o jeito recomendado porque a
> tela fica idêntica em qualquer máquina.

**Antes de gravar:** tela cheia (F11) e zoom do navegador em 100% (Ctrl+0).

---

## 2. O atalho da gravação

**`Esc` limpa tudo e volta para a tela inicial.** Sem recarregar a página, sem
piscar. É o atalho para refazer o take quantas vezes quiser.

---

## 3. O fluxo, na ordem

1. **Entrada** — a usuária escolhe o nicho (clicando numa sugestão ou digitando).
2. **Biblioteca** — 8 vídeos que viralizaram naquele nicho, com o filtro visível
   no topo para trocar de nicho a qualquer momento.
3. **Painel** — clica num card, vê a miniatura maior e o botão `MODELAR ROTEIRO`.
4. **Criação** — o roteiro do vídeo original aparece carregado, e ela escolhe
   como terminar: pedindo **comentário** ou pedindo **seguir**.
5. **Resultado** — animação de 1,7 segundo e o roteiro aparece em três blocos:
   `GANCHO TRAILER` (3 opções, a primeira já marcada), `CORPO CLÍMAX` e
   `FECHAMENTO FANTASMA`. Cada bloco tem botão de copiar; no rodapé, salvar e
   gerar novamente.

---

## 4. Onde editar os textos dos roteiros

**Tudo fica em um arquivo só: `dados/conteudo.js`.**

Não precisa abrir mais nada. Edite, salve, atualize a página (F5).

Cada vídeo da biblioteca é um bloco assim:

```js
{
  id: 'moda-01',                    // identificador único, não repita
  nicho: 'moda',                    // tem que ser o id de um nicho da lista
  titulo: 'Três peças, a semana inteira de trabalho',
  capa: 'A semana toda com 3 peças', // a frase desenhada na miniatura
  views: 1240000,                   // número puro; vira "1,2 mi" sozinho
  thumb: '',                        // '' usa a miniatura gerada pelo app
  roteiroReferencia: 'O que a usuária lê como roteiro do vídeo original.',
  ganchos: [
    'Opção 1 do GANCHO TRAILER',    // exatamente 3, a primeira já vem marcada
    'Opção 2',
    'Opção 3'
  ],
  corpo: 'Texto corrido do CORPO CLÍMAX.',
  fechamentos: {
    comentario: 'FECHAMENTO FANTASMA quando ela escolhe pedir comentário.',
    seguir:     'FECHAMENTO FANTASMA quando ela escolhe pedir seguir.'
  }
}
```

Os vídeos estão separados por nicho, com um cabeçalho comentado antes de cada
grupo (`/* MODA */`, `/* BELEZA */`, e assim por diante). É só descer até o
grupo e editar.

---

## 5. Como adicionar um vídeo novo na biblioteca

Copie um bloco inteiro de vídeo, cole logo abaixo dentro do mesmo
`window.RDB.videos.push( ... )`, separando com vírgula, e troque o `id`, o
`titulo`, a `capa`, as `views` e os textos.

**Regra prática:** deixe pelo menos 8 vídeos por nicho, porque a grade da
gravação foi desenhada para duas fileiras de quatro. Com menos de 8 a tela fica
com buraco; com mais de 8, os extras ficam abaixo e a grade passa a rolar.

### Colocando miniatura de verdade

1. Crie uma pasta `midia/` na raiz do projeto.
2. Ponha lá as imagens **verticais, no formato do Reels (9:16)** — por exemplo
   `midia/bolsa-croche.jpg`.
3. No vídeo correspondente, preencha o campo `thumb`:

```js
thumb: 'midia/bolsa-croche.jpg',
```

Enquanto o `thumb` estiver vazio (`''`), o app desenha sozinho uma miniatura
neutra na cor do nicho, com a frase da `capa` escrita nela. Cada vídeo ganha uma
variação de cor própria e sempre a mesma — nunca muda entre gravações.

---

## 6. Como trocar a identidade visual

No começo do `dados/conteudo.js`, no bloco `marca`:

```js
marca: {
  plataforma: 'LCS',                 // aparece no menu lateral
  produto: 'Roteirista de Bolso',
  acento: '#D6246E',                 // A cor de destaque. Troque aqui e a
  acentoEscuro: '#A8154F',           // aplicação inteira acompanha.
  tinta: '#1A1024',                  // texto e menu lateral
  papel: '#FFFBF7'                   // fundo
}
```

A cor de cada nicho (usada só nas miniaturas geradas) fica na lista `nichos`,
no campo `cores`.

> A identidade atual é um ponto de partida: direção feminina, moderna e limpa,
> com uma cor de destaque só. Quando vier a marca oficial do LCS (paleta, fonte
> e logo), é só trocar esses valores. A fonte usada é a do próprio sistema, para
> não depender de internet durante a gravação.

---

## 7. Como mexer nos nichos

Na lista `nichos`, no mesmo arquivo:

```js
{
  id: 'moda',                  // usado no campo "nicho" de cada vídeo
  nome: 'Moda',                // o que aparece na tela
  cores: ['#7A2E5C', '#C94E7E'],
  palavras: ['moda', 'roupa', 'look', 'estilo', 'brecho']
}
```

`palavras` são os termos que fazem o app entender o nicho quando a usuária
digita livre. Quem digita "bolo" cai em Culinária; quem digita "unha" cai em
Beleza. **Se ela digitar qualquer outra coisa, ou não digitar nada, a aplicação
abre a biblioteca do primeiro nicho da lista** — nunca aparece erro nem tela
vazia na frente da câmera.

---

## 8. Ajustando o tempo da animação

No começo do `app.js`:

```js
var TEMPO_GERACAO = 1700;   // milissegundos
```

Está em 1,7 segundo. O combinado é **nunca passar de 2500**.

---

## 9. Arquivos do projeto

```
index.html          estrutura das telas
estilo.css          aparência (as cores vêm do arquivo de conteúdo)
app.js              lógica: navegação, geração, copiar, salvar, atalho Esc
dados/conteudo.js   ► TODO O CONTEÚDO EDITÁVEL ESTÁ AQUI
servidor.js         servidor estático, sem nenhuma dependência externa
package.json        o comando npm start
```

---

## 10. O que foi verificado

**Grave em 1920x1080.** É a resolução para a qual a tela foi desenhada e onde
tudo foi conferido por completo, num navegador de verdade:

- as 48 referências (8 por nicho), nos dois tipos de fechamento — 96 combinações
  — abrem sem texto cortado e sem bloco vazio;
- a grade mostra as duas fileiras inteiras, sem barra de rolagem;
- do clique em "Gerar meu roteiro" até o roteiro na tela: 1,7 segundo;
- gerar novamente produz exatamente o mesmo roteiro;
- `Esc` volta para o início com o campo limpo, de qualquer tela;
- nenhum erro de console em nenhum momento do fluxo.

Em telas mais baixas (1600x900, 1440x900, 1366x768, 1280x720) a grade também
mostra as duas fileiras inteiras, sem rolagem e mantendo o formato 9:16. Na tela
de resultado, o tamanho do texto acompanha a altura da janela: em 1080 ele fica
no tamanho cheio, e em telas mais baixas encolhe o necessário para o roteiro
caber inteiro sem rolagem.
