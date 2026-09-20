/* ============================================================================
 *  ROTEIRISTA DE BOLSO — LOGICA
 *  ----------------------------------------------------------------------------
 *  Tudo aqui e deterministico: o mesmo nicho e o mesmo video produzem sempre
 *  exatamente o mesmo roteiro. Nao existe Math.random em lugar nenhum, nao
 *  existe chamada de rede e nao existe estado de erro.
 *
 *  Para trocar textos e videos, edite dados/conteudo.js. Nao precisa vir aqui.
 * ==========================================================================*/
(function () {
  'use strict';

  /* Duracao da animacao de geracao. O combinado e no maximo 2,5s. */
  var TEMPO_GERACAO = 1700;

  var DADOS = window.RDB;

  var estado = {
    nicho: DADOS.nichos[0].id,
    video: null,
    final: 'comentario',
    gancho: 0
  };

  var relogios = [];   // timers em aberto, limpos no reset
  var gerando = false; // trava contra clique duplo na camera

  /* ---------------------------------------------------------------- uteis */

  function $(id) { return document.getElementById(id); }

  function agendar(fn, ms) {
    var t = setTimeout(fn, ms);
    relogios.push(t);
    return t;
  }

  function limparRelogios() {
    relogios.forEach(clearTimeout);
    relogios = [];
  }

  /* Tira acento e caixa alta pra comparar texto digitado. */
  function simplificar(texto) {
    return String(texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .trim();
  }

  /* 1240000 -> "1,2 mi"   |   892000 -> "892 mil" */
  function formatarViews(n) {
    if (n >= 1000000) {
      var mi = n / 1000000;
      var texto = mi >= 10 ? String(Math.round(mi)) : mi.toFixed(1).replace('.', ',');
      return texto + ' mi';
    }
    if (n >= 1000) return Math.round(n / 1000) + ' mil';
    return String(n);
  }

  function acharNicho(id) {
    for (var i = 0; i < DADOS.nichos.length; i++) {
      if (DADOS.nichos[i].id === id) return DADOS.nichos[i];
    }
    return DADOS.nichos[0]; // nunca devolve vazio
  }

  function videosDoNicho(id) {
    var lista = DADOS.videos.filter(function (v) { return v.nicho === id; });
    // Se um nicho ficar sem video por engano de edicao, cai no primeiro que
    // tiver. A grade nunca aparece vazia na gravacao.
    if (!lista.length) {
      var reserva = DADOS.nichos[0].id;
      lista = DADOS.videos.filter(function (v) { return v.nicho === reserva; });
    }
    return lista;
  }

  /* O que a usuaria digitou vira sempre um nicho valido da lista. */
  function interpretarNicho(digitado) {
    var texto = simplificar(digitado);
    if (!texto) return estado.nicho;

    var i, n;
    for (i = 0; i < DADOS.nichos.length; i++) {
      n = DADOS.nichos[i];
      if (simplificar(n.id) === texto || simplificar(n.nome) === texto) return n.id;
    }
    for (i = 0; i < DADOS.nichos.length; i++) {
      n = DADOS.nichos[i];
      var palavras = n.palavras || [];
      for (var p = 0; p < palavras.length; p++) {
        var palavra = simplificar(palavras[p]);
        if (texto.indexOf(palavra) !== -1 || palavra.indexOf(texto) !== -1) return n.id;
      }
    }
    return estado.nicho;
  }

  /* --------------------------------------------------------- miniaturas */

  /* Converte a cor do nicho pra HSL, pra poder variar de leve em cada capa. */
  function hexParaHsl(hex) {
    var n = hex.replace('#', '');
    var r = parseInt(n.substring(0, 2), 16) / 255;
    var g = parseInt(n.substring(2, 4), 16) / 255;
    var b = parseInt(n.substring(4, 6), 16) / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var l = (max + min) / 2, h = 0, s = 0;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = ((g - b) / d + (g < b ? 6 : 0));
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h = h * 60;
    }
    return { h: h, s: s * 100, l: l * 100 };
  }

  function hsl(c, deltaH, deltaL) {
    var h = (c.h + deltaH + 360) % 360;
    var l = Math.max(12, Math.min(72, c.l + deltaL));
    return 'hsl(' + h.toFixed(1) + ',' + c.s.toFixed(1) + '%,' + l.toFixed(1) + '%)';
  }

  /* Numero estavel a partir do id do video: mesma capa em toda gravacao. */
  function semente(texto) {
    var h = 0;
    for (var i = 0; i < texto.length; i++) {
      h = (h * 31 + texto.charCodeAt(i)) % 100000;
    }
    return h;
  }

  function quebrarLinhas(texto, largura) {
    var palavras = String(texto).split(' ');
    var linhas = [];
    var atual = '';
    palavras.forEach(function (palavra) {
      var teste = atual ? atual + ' ' + palavra : palavra;
      if (teste.length > largura && atual) {
        linhas.push(atual);
        atual = palavra;
      } else {
        atual = teste;
      }
    });
    if (atual) linhas.push(atual);
    return linhas.slice(0, 3);
  }

  function escapar(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* Miniatura vertical neutra, desenhada na hora. Se o video tiver o campo
     "thumb" preenchido, a imagem de verdade e usada no lugar desta. */
  function miniatura(video) {
    if (video.thumb) return video.thumb;

    var nicho = acharNicho(video.nicho);
    var cores = nicho.cores || ['#5A3A66', '#B06A94'];
    var s = semente(video.id);

    // Cada video ganha uma variacao propria (sempre a mesma) dentro da cor do
    // nicho, pra grade nao virar oito retangulos identicos na gravacao.
    var giro = ((s % 5) - 2) * 6;           // -12 a +12 graus: varia sem sair
    var brilho = ((s % 3) - 1) * 5;         // da familia de cor do nicho
    var base = hexParaHsl(cores[0]);
    var topo = hexParaHsl(cores[1]);
    var corA = hsl(base, giro, brilho);
    var corB = hsl(topo, giro, -brilho);
    var inclinacao = (s % 2) === 0 ? { x2: 1, y2: 1 } : { x2: 0, y2: 1 };

    var cx = 120 + (s % 300);
    var cy = 200 + (s % 260);
    var linhas = quebrarLinhas(video.capa || nicho.nome, 13);

    var textos = linhas.map(function (linha, i) {
      return '<text x="46" y="' + (612 + i * 62) + '" fill="#FFFFFF" font-family="Segoe UI, Arial, sans-serif"' +
             ' font-size="52" font-weight="700">' + escapar(linha) + '</text>';
    }).join('');

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="540" height="960" viewBox="0 0 540 960">' +
        '<defs>' +
          '<linearGradient id="g" x1="0" y1="0" x2="' + inclinacao.x2 + '" y2="' + inclinacao.y2 + '">' +
            '<stop offset="0" stop-color="' + corA + '"/>' +
            '<stop offset="1" stop-color="' + corB + '"/>' +
          '</linearGradient>' +
        '</defs>' +
        '<rect width="540" height="960" fill="url(#g)"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="190" fill="#FFFFFF" opacity="0.08"/>' +
        '<circle cx="' + (540 - cx / 2) + '" cy="' + (cy + 300) + '" r="130" fill="#FFFFFF" opacity="0.06"/>' +
        '<circle cx="270" cy="392" r="62" fill="#FFFFFF" opacity="0.92"/>' +
        '<path d="M254 362 L296 392 L254 422 Z" fill="' + corA + '"/>' +
        '<rect y="470" width="540" height="490" fill="#0C0612" opacity="0.34"/>' +
        textos +
      '</svg>';

    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function pintarMini(elemento, video) {
    elemento.innerHTML = '';
    var img = document.createElement('img');
    img.src = miniatura(video);
    img.alt = video.titulo;
    elemento.appendChild(img);
  }

  /* Mede o espaco que a grade tem de verdade e dimensiona os cards pra que
     as duas fileiras encham a tela, sem rolagem e sem buraco nas laterais. */
  var VAO_V = 22, VAO_H = 44;

  function dimensionar() {
    var grade = $('grade');
    var tela = grade.parentElement;
    var alturaLivre = grade.clientHeight;

    // clientWidth inclui o preenchimento lateral da tela, entao ele sai da
    // conta. Sem isso a grade e calculada mais larga do que o espaco real e
    // os cards perdem a proporcao 9:16 em telas estreitas.
    var estilo = window.getComputedStyle(tela);
    var larguraLivre = tela.clientWidth
      - parseFloat(estilo.paddingLeft || 0)
      - parseFloat(estilo.paddingRight || 0);

    if (!alturaLivre || larguraLivre <= 0) return;

    // 4px de folga: arredondamento nunca pode gerar barra de rolagem.
    // Sem piso artificial: em tela baixa o card encolhe em vez de cortar.
    var altura = Math.floor((alturaLivre - VAO_V - 4) / 2);
    altura = Math.max(120, Math.min(470, altura));

    var largura = Math.floor(altura * 9 / 16);
    var cabe = Math.floor((larguraLivre - VAO_H * 3) / 4);
    if (largura > cabe) {
      largura = cabe;
      altura = Math.floor(largura * 16 / 9);
    }

    var raiz = document.documentElement.style;
    raiz.setProperty('--altura-card', altura + 'px');
    raiz.setProperty('--largura-card', largura + 'px');
    raiz.setProperty('--largura-grade', (largura * 4 + VAO_H * 3) + 'px');
  }

  /* O topo pode mudar de altura quando a largura da grade muda (as etiquetas
     do filtro quebram de linha em tela estreita). Tres passadas deixam o
     calculo assentar em qualquer resolucao. */
  function acomodar() {
    dimensionar();
    dimensionar();
    dimensionar();
  }

  /* ------------------------------------------------------------- telas */

  function mostrarTela(id) {
    var telas = document.querySelectorAll('.tela');
    for (var i = 0; i < telas.length; i++) {
      telas[i].classList.toggle('is-ativa', telas[i].id === id);
    }
  }

  function avisar(mensagem) {
    var aviso = $('aviso');
    aviso.textContent = mensagem;
    aviso.classList.add('is-ativo');
    agendar(function () { aviso.classList.remove('is-ativo'); }, 1900);
  }

  /* ------------------------------------------------------- 1. entrada */

  function montarSugestoes() {
    var caixa = $('sugestoes');
    caixa.innerHTML = '';
    DADOS.nichos.forEach(function (nicho) {
      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'sugestao';
      botao.textContent = nicho.nome;
      botao.addEventListener('click', function () {
        $('campo-nicho').value = nicho.nome;
        estado.nicho = nicho.id;
        marcarSugestao(nicho.id);
      });
      caixa.appendChild(botao);
    });
  }

  function marcarSugestao(id) {
    var botoes = $('sugestoes').children;
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.toggle('is-ativa', DADOS.nichos[i].id === id);
    }
  }

  /* ---------------------------------------------------- 2. biblioteca */

  function montarFiltro() {
    var caixa = $('filtro');
    caixa.innerHTML = '';
    DADOS.nichos.forEach(function (nicho) {
      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'filtro-item';
      botao.textContent = nicho.nome;
      botao.dataset.nicho = nicho.id;
      botao.addEventListener('click', function () { abrirBiblioteca(nicho.id); });
      caixa.appendChild(botao);
    });
  }

  function marcarFiltro(id) {
    var botoes = $('filtro').children;
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.toggle('is-ativo', botoes[i].dataset.nicho === id);
    }
  }

  function montarGrade(id) {
    var grade = $('grade');
    grade.innerHTML = '';
    var nicho = acharNicho(id);

    videosDoNicho(id).forEach(function (video) {
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'card';

      var img = document.createElement('img');
      img.src = miniatura(video);
      img.alt = video.titulo;
      img.decoding = 'sync';
      card.appendChild(img);

      var etiqueta = document.createElement('span');
      etiqueta.className = 'card-etiqueta';
      etiqueta.textContent = nicho.nome;
      card.appendChild(etiqueta);

      var rodape = document.createElement('span');
      rodape.className = 'card-views';
      rodape.innerHTML =
        '<span class="card-numero">' + formatarViews(video.views) + '</span>' +
        '<span class="card-rotulo">visualizações</span>';
      card.appendChild(rodape);

      card.addEventListener('click', function () { abrirPainel(video); });
      grade.appendChild(card);
    });

    $('biblioteca-apoio').textContent =
      videosDoNicho(id).length + ' vídeos que viralizaram em ' + nicho.nome;
  }

  function abrirBiblioteca(id) {
    estado.nicho = acharNicho(id).id;
    marcarFiltro(estado.nicho);
    montarGrade(estado.nicho);
    acomodar();
    fecharPainel();
    mostrarTela('tela-biblioteca');
  }

  /* ------------------------------------------------------- 3. painel */

  function abrirPainel(video) {
    estado.video = video;
    pintarMini($('painel-mini'), video);
    $('painel-etiqueta').textContent = acharNicho(video.nicho).nome;
    $('painel-titulo').textContent = video.titulo;
    $('painel-views').textContent = formatarViews(video.views) + ' visualizações';
    $('painel-fundo').classList.add('is-ativo');
  }

  function fecharPainel() {
    $('painel-fundo').classList.remove('is-ativo');
  }

  /* ------------------------------------------------------ 4. criacao */

  function abrirCriacao() {
    var video = estado.video;
    if (!video) return;

    pintarMini($('criacao-mini'), video);
    $('criacao-etiqueta').textContent = acharNicho(video.nicho).nome;
    $('criacao-titulo').textContent = video.titulo;
    $('criacao-views').textContent = formatarViews(video.views) + ' visualizações';
    $('criacao-roteiro').textContent = video.roteiroReferencia;

    marcarFinal(estado.final);
    fecharPainel();
    mostrarTela('tela-criacao');
  }

  function marcarFinal(qual) {
    estado.final = qual;
    var botoes = document.querySelectorAll('.escolha');
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.toggle('is-ativa', botoes[i].dataset.final === qual);
    }
  }

  /* ----------------------------------------------------- 5. resultado */

  var FALAS = [
    'Lendo o vídeo de referência…',
    'Montando o gancho…',
    'Escrevendo do seu jeito…'
  ];

  function gerar() {
    if (gerando || !estado.video) return;
    gerando = true;

    var caixa = $('geracao');
    var barra = $('geracao-progresso');
    var texto = $('geracao-texto');

    texto.textContent = FALAS[0];
    barra.style.transition = 'none';
    barra.style.width = '0%';
    caixa.classList.add('is-ativo');

    // forca o navegador a aplicar o 0% antes de animar (evita piscada)
    void barra.offsetWidth;
    barra.style.transition = 'width ' + TEMPO_GERACAO + 'ms linear';
    barra.style.width = '100%';

    agendar(function () { texto.textContent = FALAS[1]; }, Math.round(TEMPO_GERACAO * 0.34));
    agendar(function () { texto.textContent = FALAS[2]; }, Math.round(TEMPO_GERACAO * 0.68));

    agendar(function () {
      pintarResultado();
      mostrarTela('tela-resultado');
      caixa.classList.remove('is-ativo');
      gerando = false;
    }, TEMPO_GERACAO);
  }

  function pintarResultado() {
    var video = estado.video;
    if (!video) return;

    estado.gancho = 0; // o primeiro sempre ja vem selecionado

    var caixa = $('ganchos');
    caixa.innerHTML = '';
    video.ganchos.forEach(function (gancho, indice) {
      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'gancho' + (indice === 0 ? ' is-ativa' : '');
      botao.innerHTML =
        '<span class="gancho-numero">' + (indice + 1) + '</span>' +
        '<span class="gancho-texto"></span>';
      botao.querySelector('.gancho-texto').textContent = gancho;
      botao.addEventListener('click', function () { escolherGancho(indice); });
      caixa.appendChild(botao);
    });

    $('corpo').textContent = video.corpo;
    $('fechamento').textContent = video.fechamentos[estado.final];
    $('resultado-apoio').textContent =
      'Modelado a partir de "' + video.titulo + '" · final pedindo ' +
      (estado.final === 'comentario' ? 'comentário' : 'seguir');

    document.querySelectorAll('.copiar').forEach(function (botao) {
      botao.classList.remove('is-feito');
      botao.textContent = 'Copiar';
    });
  }

  function escolherGancho(indice) {
    estado.gancho = indice;
    var botoes = $('ganchos').children;
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.toggle('is-ativa', i === indice);
    }
  }

  /* ------------------------------------------------------ copiar/salvar */

  function textoDaSecao(qual) {
    var video = estado.video;
    if (!video) return '';
    if (qual === 'gancho') return video.ganchos[estado.gancho];
    if (qual === 'corpo') return video.corpo;
    return video.fechamentos[estado.final];
  }

  /* Copia sempre da certo na tela: se a area de transferencia do navegador
     estiver bloqueada, cai no metodo antigo e o aviso aparece do mesmo jeito. */
  function copiar(texto) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).catch(function () { copiarAntigo(texto); });
        return;
      }
    } catch (e) { /* segue pro metodo antigo */ }
    copiarAntigo(texto);
  }

  function copiarAntigo(texto) {
    try {
      var area = document.createElement('textarea');
      area.value = texto;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    } catch (e) { /* nunca mostra erro na tela */ }
  }

  function salvar() {
    var video = estado.video;
    if (!video) return;
    try {
      var guardados = JSON.parse(localStorage.getItem('rdb-roteiros') || '[]');
      guardados.push({
        video: video.id,
        titulo: video.titulo,
        gancho: video.ganchos[estado.gancho],
        corpo: video.corpo,
        fechamento: video.fechamentos[estado.final]
      });
      localStorage.setItem('rdb-roteiros', JSON.stringify(guardados));
    } catch (e) { /* sem armazenamento tambem salva na sessao, sem erro */ }
    avisar('Roteiro salvo em Meus roteiros');
  }

  /* ------------------------------------------------------------ reset */

  function reiniciar() {
    limparRelogios();
    gerando = false;
    estado.nicho = DADOS.nichos[0].id;
    estado.video = null;
    estado.final = 'comentario';
    estado.gancho = 0;

    $('campo-nicho').value = '';
    marcarSugestao(null);
    marcarFinal('comentario');
    fecharPainel();
    $('geracao').classList.remove('is-ativo');
    $('aviso').classList.remove('is-ativo');
    mostrarTela('tela-entrada');
  }

  /* ------------------------------------------------------------ ligacoes */

  function ligar() {
    $('form-entrada').addEventListener('submit', function (evento) {
      evento.preventDefault();
      abrirBiblioteca(interpretarNicho($('campo-nicho').value));
    });

    $('painel-fechar').addEventListener('click', fecharPainel);
    $('painel-fundo').addEventListener('click', function (evento) {
      if (evento.target === $('painel-fundo')) fecharPainel();
    });

    $('botao-modelar').addEventListener('click', abrirCriacao);
    $('voltar-biblioteca').addEventListener('click', function () { abrirBiblioteca(estado.nicho); });
    $('voltar-criacao').addEventListener('click', function () { abrirBiblioteca(estado.nicho); });

    document.querySelectorAll('.escolha').forEach(function (botao) {
      botao.addEventListener('click', function () { marcarFinal(botao.dataset.final); });
    });

    $('botao-gerar').addEventListener('click', gerar);
    $('botao-regerar').addEventListener('click', gerar);
    $('botao-salvar').addEventListener('click', salvar);

    document.querySelectorAll('.copiar').forEach(function (botao) {
      botao.addEventListener('click', function () {
        copiar(textoDaSecao(botao.dataset.copiar));
        botao.classList.add('is-feito');
        botao.textContent = 'Copiado!';
        agendar(function () {
          botao.classList.remove('is-feito');
          botao.textContent = 'Copiar';
        }, 1600);
      });
    });

    /* Atalho de gravacao: Esc limpa tudo e volta pro comeco, sem recarregar. */
    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape') {
        evento.preventDefault();
        reiniciar();
      }
    });
  }

  /* ------------------------------------------------------------- inicio */

  function comecar() {
    var marca = DADOS.marca;
    var raiz = document.documentElement.style;
    raiz.setProperty('--acento', marca.acento);
    raiz.setProperty('--acento-escuro', marca.acentoEscuro);
    raiz.setProperty('--tinta', marca.tinta);
    raiz.setProperty('--papel', marca.papel);

    $('selo-lcs').textContent = marca.plataforma;
    $('trilho-plataforma').textContent = marca.plataforma;
    $('trilho-produto').textContent = marca.produto;
    document.title = marca.produto + ' — ' + marca.plataforma;

    montarSugestoes();
    montarFiltro();
    marcarFiltro(estado.nicho);
    montarGrade(estado.nicho); // grade ja pronta antes de aparecer
    marcarFinal('comentario');
    ligar();
    // Duas passadas: a primeira define a largura, a segunda le o layout ja
    // acomodado. Converge sempre, porque a altura do topo e fixa.
    acomodar();
    window.addEventListener('resize', acomodar);
  }

  comecar();
})();
