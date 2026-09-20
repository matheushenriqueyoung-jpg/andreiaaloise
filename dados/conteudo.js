/* ============================================================================
 *  ROTEIRISTA DE BOLSO — ARQUIVO DE CONTEUDO
 *  ----------------------------------------------------------------------------
 *  Este e o UNICO arquivo que voce precisa mexer para trocar textos,
 *  trocar videos da biblioteca ou ajustar a identidade visual.
 *  Nao ha codigo de logica aqui. So dados.
 *
 *  Depois de editar: salve o arquivo e atualize a pagina (F5). So isso.
 *
 *  Estrutura de cada video:
 *    id       -> identificador unico. Nao repita.
 *    nicho    -> tem que bater com um "id" da lista NICHOS abaixo.
 *    titulo   -> aparece no painel e na aba de criacao.
 *    capa     -> a frase curta desenhada na miniatura (use 2 a 5 palavras).
 *    views    -> numero puro. O app formata sozinho (1200000 vira "1,2 mi").
 *    thumb    -> caminho de uma imagem vertical 9:16 (ex: 'midia/video1.jpg').
 *                Deixe '' para usar a miniatura neutra gerada pelo app.
 *    roteiroReferencia -> o que a usuaria ve como "roteiro do video original".
 *    ganchos  -> exatamente 3 opcoes. A primeira ja vem selecionada.
 *    corpo    -> texto corrido do CORPO CLIMAX.
 *    fechamentos.comentario -> FECHAMENTO FANTASMA quando ela pede comentario.
 *    fechamentos.seguir     -> FECHAMENTO FANTASMA quando ela pede seguir.
 * ==========================================================================*/

window.RDB = {

  /* --- IDENTIDADE VISUAL --------------------------------------------------
   * Direcao feminina, moderna e limpa, com UMA cor de destaque.
   * Troque pelos valores do LCS quando tiver a marca oficial.
   * ---------------------------------------------------------------------- */
  marca: {
    plataforma: 'LCS',
    produto: 'Roteirista de Bolso',
    assinatura: 'Ferramenta LCS',
    // Uma cor de destaque so. Mude aqui e a aplicacao inteira acompanha.
    acento: '#D6246E',
    acentoEscuro: '#A8154F',
    tinta: '#1A1024',
    papel: '#FFFBF7'
  },

  /* --- NICHOS -------------------------------------------------------------
   * As sugestoes clicaveis da tela de entrada, nesta ordem.
   * ---------------------------------------------------------------------- */
  nichos: [
    {
      id: 'moda',
      nome: 'Moda',
      // As duas cores da miniatura neutra gerada pelo app.
      cores: ['#7A2E5C', '#C94E7E'],
      // Palavras que fazem o app entender o nicho quando a usuaria digita livre.
      palavras: ['moda', 'roupa', 'roupas', 'look', 'looks', 'estilo', 'brecho', 'costura', 'moda feminina']
    },
    {
      id: 'croche',
      nome: 'Crochê e artesanato',
      cores: ['#8A4A22', '#D08A4E'],
      palavras: ['croche', 'artesanato', 'artesa', 'trico', 'macrame', 'bordado', 'feito a mao', 'amigurumi', 'fio', 'linha']
    },
    {
      id: 'beleza',
      nome: 'Beleza',
      cores: ['#6A2A4E', '#D26A8C'],
      palavras: ['beleza', 'maquiagem', 'make', 'cabelo', 'pele', 'skincare', 'unha', 'sobrancelha', 'estetica', 'salao']
    },
    {
      id: 'maternidade',
      nome: 'Maternidade',
      cores: ['#3C4A86', '#7E8FD4'],
      palavras: ['maternidade', 'mae', 'maes', 'filho', 'filhos', 'bebe', 'crianca', 'criancas', 'gravidez', 'materno']
    },
    {
      id: 'culinaria',
      nome: 'Culinária',
      cores: ['#8A3A1E', '#DD8244'],
      palavras: ['culinaria', 'cozinha', 'comida', 'receita', 'receitas', 'doce', 'doces', 'bolo', 'confeitaria', 'marmita', 'salgado']
    },
    {
      id: 'servicos',
      nome: 'Serviços locais',
      cores: ['#1F5B63', '#4E9FA8'],
      palavras: ['servico', 'servicos', 'autonoma', 'autonomo', 'manicure', 'cilios', 'massagem', 'limpeza', 'diarista', 'loja', 'negocio', 'empreendedora']
    }
  ],

  videos: []
};

/* ==========================================================================
 *  MODA
 * ========================================================================*/
window.RDB.videos.push(
  {
    id: 'moda-01',
    nicho: 'moda',
    titulo: 'Três peças, a semana inteira de trabalho',
    capa: 'A semana toda com 3 peças',
    views: 1240000,
    thumb: '',
    roteiroReferencia: 'Ela abre o armário, puxa três peças e diz que sai dali a roupa da semana inteira. Vai montando look por look na frente da câmera, sem falar quase nada, só trocando. No fim ela veste o último e só olha pra câmera.',
    ganchos: [
      'Eu uso as mesmas três peças a semana inteira e ninguém no meu trabalho nunca percebeu.',
      'Se você abre o armário cheio e sente que não tem nada pra vestir, o problema não é o armário.',
      'Três peças. Cinco dias de trabalho. Nenhuma repetição que alguém consiga notar.'
    ],
    corpo: 'Uma calça de alfaiataria preta, uma camisa branca e um blazer. Segunda é a camisa por dentro da calça, simples. Terça eu deixo a camisa por fora e uso ela aberta com uma regata embaixo. Quarta é só o blazer fechado com a calça, sem camisa nenhuma. Quinta a camisa volta, mas com a manga dobrada e o blazer nos ombros. Sexta eu troco só o sapato e o brinco, e vira outra roupa. É a mesma coisa cinco vezes. Muda o jeito de vestir, não a peça.',
    fechamentos: {
      comentario: 'Agora me conta: qual é a peça que você tem e não usa porque acha que já usou demais? Escreve aqui embaixo que eu te mostro como vestir ela de um jeito que ninguém vai reconhecer.',
      seguir: 'Eu faço isso aqui toda semana, com o que já está no armário, sem gastar nada. Se você quer parar de achar que precisa comprar roupa nova pra parecer arrumada, fica comigo por aqui.'
    }
  },
  {
    id: 'moda-02',
    nicho: 'moda',
    titulo: 'O truque da calça que veste todo mundo',
    capa: 'A calça que veste todo mundo',
    views: 892000,
    thumb: '',
    roteiroReferencia: 'Ela está de frente pro espelho com duas calças iguais na mão. Veste uma, mostra. Veste a outra, mostra. A diferença é uma coisa só e ela demora pra contar qual é.',
    ganchos: [
      'Eu comprei a mesma calça em dois tamanhos e a maior me deixou mais magra. Vou te mostrar.',
      'Ninguém te contou isso: a calça que te veste bem não é a que fecha, é a que cai.',
      'Se toda calça que você compra fica estranha atrás, não é o seu corpo. É a altura do cós.'
    ],
    corpo: 'A gente aprendeu a comprar calça pela cintura, e é por isso que dá errado. Você aperta na cintura e ela fica puxando no quadril o dia inteiro. O certo é o contrário: compra no tamanho que passa no quadril tranquilo e ajusta a cintura depois, com um cinto ou com a costureira, que custa dez reais. E olha o cós: quanto mais alto, mais a perna parece longa. Cós baixo corta você no meio, e aí você acha que engordou quando só comprou errado.',
    fechamentos: {
      comentario: 'Me fala uma coisa, sinceramente: quantas calças você tem guardadas esperando caber? Escreve o número aqui embaixo, eu quero ver se sou só eu.',
      seguir: 'Eu passei anos achando que meu corpo era o problema. Era a numeração. Vem comigo que eu vou te mostrando essas coisas que ninguém explica.'
    }
  },
  {
    id: 'moda-03',
    nicho: 'moda',
    titulo: 'Look inteiro de brechó',
    capa: 'Tudo isso saiu do brechó',
    views: 2100000,
    thumb: '',
    roteiroReferencia: 'Ela aparece montada, bonita, e fala o preço de cada peça uma por uma, do sapato pro brinco. O valor total no fim é tão baixo que ela mesma dá risada.',
    ganchos: [
      'Esse look inteiro custou menos que um lanche. E eu vou te falar peça por peça.',
      'Todo mundo me pergunta onde eu comprei essa roupa e eu sempre sinto vergonha de responder. Hoje eu vou responder.',
      'Eu tenho uma regra no brechó e é por isso que eu nunca saio de lá com roupa que fica no armário.'
    ],
    corpo: 'A saia foi doze reais, a camisa dezoito, o sapato quarenta e cinco e o brinco eu já tinha. A regra é uma só: eu não olho o tamanho na etiqueta e não olho a arara inteira. Eu escolho uma cor antes de entrar e só puxo o que é daquela cor. Parece bobagem, mas é isso que impede a gente de sair com uma sacola de coisa que nunca combina com nada. E tecido bom você reconhece no toque, não na marca. Pega, amassa na mão e solta. Se voltar liso, leva.',
    fechamentos: {
      comentario: 'Chuta aí embaixo quanto você acha que custou o look todo. Eu respondo uma por uma e a que chegar mais perto eu falo o valor exato.',
      seguir: 'Eu monto um look de brechó por semana aqui. Se você tá apertada de dinheiro mas não quer se sentir malvestida, esse é o seu lugar.'
    }
  },
  {
    id: 'moda-04',
    nicho: 'moda',
    titulo: 'O erro que encurta as suas pernas',
    capa: 'Isso encurta suas pernas',
    views: 1680000,
    thumb: '',
    roteiroReferencia: 'Ela mostra o mesmo look duas vezes, lado a lado na tela. Num deles as pernas parecem visivelmente mais longas. Ela deixa a imagem congelada um tempo antes de explicar.',
    ganchos: [
      'Você não é baixinha. Você está se cortando no lugar errado, e eu vou te mostrar onde.',
      'Mesma roupa, mesma pessoa, mesmo dia. Numa foto eu tenho dez centímetros a mais de perna.',
      'Se você tem menos de um e sessenta, para de fazer isso agora que eu vou te explicar o porquê.'
    ],
    corpo: 'O olho de quem olha procura onde a cor muda. Onde muda a cor, ele entende que ali termina uma parte do corpo. Então quando você usa blusa clara com calça escura e para a blusa no meio do quadril, você está dizendo pra todo mundo que sua perna começa ali embaixo. Sobe esse ponto. Deixa a blusa por dentro, ou amarra ela na cintura. E se conseguir usar sapato da cor da sua pele ou da cor da calça, a perna não termina no tornozelo, ela continua. É só isso, e muda tudo.',
    fechamentos: {
      comentario: 'Vai lá ver a última foto sua de corpo inteiro e volta aqui pra me contar se você tava fazendo isso. Eu tava. Por anos.',
      seguir: 'Tem mais uns cinco truques assim que ninguém conta, e eu vou soltando um por vez aqui. Fica de olho pra não perder.'
    }
  },
  {
    id: 'moda-05',
    nicho: 'moda',
    titulo: 'Transformei a camisa dele',
    capa: 'Peguei a camisa dele',
    views: 743000,
    thumb: '',
    roteiroReferencia: 'Ela pega uma camisa masculina grande, larga, e vai amarrando, dobrando e prendendo na frente da câmera até virar outra coisa. Nenhum corte, nenhuma costura.',
    ganchos: [
      'Peguei a camisa mais feia do guarda-roupa do meu marido e fiz três roupas com ela.',
      'Não corta, não costura, não gasta nada. E ele nem vai perceber que sumiu.',
      'Aquela camisa enorme que você ganhou e nunca usou: não doa ainda, olha isso primeiro.'
    ],
    corpo: 'Primeiro jeito: veste normal, amarra na cintura com um nó lateral e deixa a barra por cima da calça. Segundo: desabotoa tudo, veste por cima de uma regata e usa como se fosse um casaquinho leve. Terceiro, que é o meu favorito: veste ao contrário, com os botões nas costas, e amarra na frente. Vira blusa. Ninguém adivinha o que é. E o truque que faz tudo funcionar é dobrar a manga duas vezes até o cotovelo, porque manga comprida solta é o que entrega que a roupa é grande demais pra você.',
    fechamentos: {
      comentario: 'Me conta aqui embaixo qual dos três você faria. Se for o terceiro, você é corajosa igual eu.',
      seguir: 'Eu transformo peça parada em roupa nova toda semana por aqui, sem máquina de costura e sem gastar. Vem junto.'
    }
  },
  {
    id: 'moda-06',
    nicho: 'moda',
    titulo: 'Look de oitenta reais que parece caro',
    capa: 'Parece caro, mas não é',
    views: 1050000,
    thumb: '',
    roteiroReferencia: 'Ela aparece com um look que parece de loja cara e passa o vídeo inteiro apontando os três detalhes que fazem a roupa barata parecer cara. O preço só aparece no final.',
    ganchos: [
      'Roupa cara e roupa barata têm três diferenças, e duas delas você conserta em casa de graça.',
      'Esse look custou oitenta reais e já me perguntaram se era de grife. Três vezes.',
      'Não é o preço da roupa que faz ela parecer cara. É isso aqui, e ninguém te ensinou.'
    ],
    corpo: 'Um: caimento. Roupa cara não fica sobrando no ombro nem puxando na axila. Ajustar ombro de blazer sai vinte reais na costureira e transforma a peça. Dois: a etiqueta e o fio. Roupa barata quase sempre vem com fio solto e etiqueta dura no pescoço. Corta os dois antes de vestir, leva trinta segundos. Três: cor única. Quando você usa tudo no mesmo tom, mesmo que sejam peças de lugares diferentes e baratas, o olho lê aquilo como um conjunto. Conjunto parece caro. Mistura parece bagunça.',
    fechamentos: {
      comentario: 'Adivinha quanto foi o blazer. Escreve aqui embaixo, porque quando eu falar você não vai acreditar.',
      seguir: 'Eu não tenho dinheiro pra roupa cara, eu tenho é truque. E eu solto um aqui toda semana. Me segue pra não perder.'
    }
  },
  {
    id: 'moda-07',
    nicho: 'moda',
    titulo: 'A cor que te deixa com cara de cansada',
    capa: 'Essa cor te apaga',
    views: 967000,
    thumb: '',
    roteiroReferencia: 'Ela segura dois tecidos de cores diferentes perto do rosto, sem maquiagem nenhuma. A diferença na cara dela aparece na hora e ela não precisa explicar nada.',
    ganchos: [
      'Tem uma cor no seu armário que está te deixando com cara de quem não dormiu.',
      'Eu sem maquiagem com duas cores diferentes. Olha o que acontece com a minha cara.',
      'Se todo mundo te pergunta se você está cansada, pode ser a cor da sua blusa. Sério.'
    ],
    corpo: 'Faz esse teste na frente do espelho, com luz de janela e sem maquiagem. Pega uma peça bege ou amarelo-mostarda e encosta perto do rosto. Depois pega uma azul ou uma vinho e faz igual. Numa delas sua olheira vai sumir e seu rosto vai ficar acordado. Na outra você vai parecer que está doente. Não é sobre a cor ser bonita, é sobre ela brigar ou não com o tom da sua pele. Aí você não precisa jogar nada fora: só passa as cores que te apagam pra baixo, pra calça e pra saia, e deixa perto do rosto só as que te acendem.',
    fechamentos: {
      comentario: 'Faz o teste agora e volta aqui pra me contar qual foi a cor que te apagou. Eu juro que vou ler todas.',
      seguir: 'Essa é a coisa mais barata que existe pra você parecer mais bonita e é de graça. Tem mais aqui no perfil, fica comigo.'
    }
  },
  {
    id: 'moda-08',
    nicho: 'moda',
    titulo: 'Arrumei o armário e parei de sofrer',
    capa: 'Arrumei o armário assim',
    views: 1490000,
    thumb: '',
    roteiroReferencia: 'Antes e depois do armário, mas ela não fala de organização. Ela fala de por que a gente sente que não tem roupa mesmo com o armário cheio.',
    ganchos: [
      'Eu tirei metade das roupas do armário e pela primeira vez na vida eu sinto que tenho roupa.',
      'Você não tem roupa demais. Você tem roupa demais que você não usa, e é diferente.',
      'Fiz uma pergunta pra cada peça do meu armário e sobrou menos da metade. Melhor coisa que eu fiz.'
    ],
    corpo: 'A pergunta não é "eu gosto disso". É: eu vestiria isso hoje, pra sair daqui a uma hora, do jeito que eu tô me sentindo hoje. Se a resposta tiver um "depois que eu emagrecer" ou um "quando eu tiver uma ocasião", sai do armário. Não precisa jogar fora, põe numa caixa e guarda. O que sobra você pendura por cor, e não por tipo. Quando tá tudo por cor, você abre e enxerga combinação pronta, em vez de enxergar um monte de pano. Eu levei uma tarde e nunca mais passei aperto de manhã.',
    fechamentos: {
      comentario: 'Qual é a peça que você não consegue tirar do armário mesmo sabendo que não usa mais? Conta aqui embaixo, eu vou primeiro: meu vestido de formatura.',
      seguir: 'Se essa parte de olhar pro armário e sentir aperto no peito é sua também, você vai gostar do resto que eu posto aqui. Me segue.'
    }
  }
);

/* ==========================================================================
 *  CROCHE E ARTESANATO
 * ========================================================================*/
window.RDB.videos.push(
  {
    id: 'croche-01',
    nicho: 'croche',
    titulo: 'Quanto eu ganhei com uma bolsa de crochê',
    capa: 'Quanto rendeu essa bolsa',
    views: 1830000,
    thumb: '',
    roteiroReferencia: 'Ela está com a bolsa pronta na mão e vai falando os números: quanto gastou de fio, quantas horas levou, por quanto vendeu. Fala devagar, sem pressa, e deixa o lucro pro final.',
    ganchos: [
      'Essa bolsa levou onze horas e eu vou te falar exatamente quanto sobrou no meu bolso.',
      'Se você faz crochê e ainda cobra por "quanto acha que vale", esse vídeo é pra você.',
      'Eu descobri que estava trabalhando de graça quando eu finalmente fiz essa conta aqui.'
    ],
    corpo: 'Foram quatro novelos, dezoito reais cada, setenta e dois no total. Onze horas de trabalho. Eu vendi por duzentos e vinte. Parece bom, né? Mas se você divide o que sobrou pelas onze horas, dá treze reais e meio por hora. Aí eu mudei a conta: em vez de pensar no preço da bolsa, eu decidi quanto eu quero ganhar por hora e multipliquei. Vinte e cinco a hora, mais o fio, dá trezentos e quarenta e sete. E eu vendi. A mesma bolsa, pra mesma clientela. A única coisa que mudou foi eu ter parado de me desconsiderar na conta.',
    fechamentos: {
      comentario: 'Faz essa conta com a última peça que você vendeu e me diz aqui embaixo quanto deu por hora. Eu quero muito saber, e eu respondo todas.',
      seguir: 'Eu vivo disso e eu demorei anos pra aprender a cobrar. Se você quer o caminho mais curto que o meu, fica por aqui comigo.'
    }
  },
  {
    id: 'croche-02',
    nicho: 'croche',
    titulo: 'O ponto que todo mundo erra no começo',
    capa: 'Você está errando aqui',
    views: 1120000,
    thumb: '',
    roteiroReferencia: 'Close nas mãos dela fazendo o ponto. Ela faz errado primeiro, mostra o resultado torto, depois faz certo. Sem corte, tudo numa tomada só.',
    ganchos: [
      'Se o seu crochê vai afinando e você não sabe por quê, é uma coisa só. Olha aqui.',
      'Eu fiz esse erro por dois anos e ninguém nunca me corrigiu.',
      'A sua peça não está ficando torta porque você faz mal feito. É porque você está pegando o fio errado.'
    ],
    corpo: 'Olha a corrente: cada ponto tem duas alças em cima, uma na frente e uma atrás. A maioria das pessoas que aprende sozinha pega só a de trás, e aí o trabalho vai fechando e fica com a borda ondulada. Você tem que enfiar a agulha embaixo das duas alças, sempre, e conferir o número de pontos no fim de cada carreira. Anota num papel se precisar. E o último ponto da carreira é o que mais some: ele fica escondido na virada. Conta a carreira inteira uma vez só e o resto do trabalho sai reto.',
    fechamentos: {
      comentario: 'Vai lá ver a peça que você está fazendo agora e me conta aqui embaixo: era isso? Aposto que era.',
      seguir: 'Eu ensino devagar, com a mão na câmera, do jeito que eu queria que tivessem me ensinado. Me segue que eu posto um ponto por semana.'
    }
  },
  {
    id: 'croche-03',
    nicho: 'croche',
    titulo: 'Fiz cem reais numa tarde de domingo',
    capa: 'Cem reais numa tarde',
    views: 2340000,
    thumb: '',
    roteiroReferencia: 'Ela faz quatro peças pequenas seguidas, em time-lapse, e no final põe as quatro na mesa com o preço de cada uma numa etiqueta.',
    ganchos: [
      'Quatro peças pequenas, uma tarde de domingo, cem reais. Te mostro o que eu fiz.',
      'Ninguém quer comprar a manta gigante que você levou um mês pra fazer. Quer comprar isso aqui.',
      'Eu parei de fazer peça grande e foi aí que eu comecei a vender de verdade.'
    ],
    corpo: 'Porta-copos, chaveirinho, prendedor de cortina e suporte de vaso. Nenhum leva mais de quarenta minutos e todos usam sobra de fio, aquele resto que fica na sacola. Peça pequena vende porque é presente, porque cabe no bolso de quem tá comprando e porque a pessoa não precisa pensar muito pra decidir. Peça grande é linda, dá orgulho, e fica meses encalhada. Faz o pequeno pra girar dinheiro toda semana e o grande só sob encomenda, com metade paga adiantada.',
    fechamentos: {
      comentario: 'Me fala aqui embaixo qual dos quatro você quer que eu ensine primeiro. O mais pedido eu gravo o passo a passo.',
      seguir: 'Eu sustento a minha casa com o que sai dessas mãos aqui. Se você quer aprender a fazer o mesmo, fica comigo por aqui.'
    }
  },
  {
    id: 'croche-04',
    nicho: 'croche',
    titulo: 'Onde eu compro fio barato',
    capa: 'Fio bom e barato',
    views: 1560000,
    thumb: '',
    roteiroReferencia: 'Ela mostra a sacola de fio que comprou, fala o valor, e compara com o preço da mesma quantidade na loja de artesanato do shopping.',
    ganchos: [
      'Eu paguei sessenta reais no que custaria duzentos e quarenta, e não é promoção.',
      'Se você compra fio na loja de artesanato, você está pagando o triplo. Deixa eu te explicar.',
      'O meu maior gasto era fio, até eu descobrir onde as pessoas que vendem de verdade compram.'
    ],
    corpo: 'Ninguém que vive de crochê compra fio em unidade. Compra em fardo, que é a caixa fechada, direto de distribuidora. Procura no seu estado por "distribuidora de fios atacado" e liga perguntando o mínimo pra comprar. Quase sempre é um fardo só, e sai pela metade do preço. Se for muito pra você, chama duas ou três mulheres que também fazem crochê e dividam a caixa. Eu faço isso com duas vizinhas há um ano. E não compra cor da moda em fardo, compra cru, preto e bege, que são os que sempre vendem.',
    fechamentos: {
      comentario: 'Escreve aqui embaixo de que cidade você é. Eu vou juntando as respostas e indico distribuidora pra quem eu conhecer da região.',
      seguir: 'Eu compartilho tudo que eu descubro sobre baratear e vender melhor. Nada guardado. Me segue que tem muito aqui.'
    }
  },
  {
    id: 'croche-05',
    nicho: 'croche',
    titulo: 'Como eu fotografo pra vender',
    capa: 'Foto que vende peça',
    views: 878000,
    thumb: '',
    roteiroReferencia: 'Ela mostra uma foto ruim da peça e depois a foto boa, da mesma peça, feita no mesmo celular. Explica os dois ajustes que fez.',
    ganchos: [
      'Mesma peça, mesmo celular, cinco minutos de diferença. Uma vendeu e a outra não.',
      'A sua peça não está encalhada. A sua foto é que está matando ela.',
      'Não precisa de celular bom nem de luz de estúdio. Precisa de uma janela e de uma toalha branca.'
    ],
    corpo: 'Põe a peça perto da janela, mas nunca com o sol batendo direto, senão estoura a cor e some a textura do ponto. Embaixo, uma toalha branca ou um lençol liso, porque fundo de mesa de madeira com coisa em volta faz a peça sumir. Depois tira três fotos: uma de cima mostrando a peça inteira, uma bem de perto no ponto, e uma com a peça sendo usada, na mão ou no corpo. Essa terceira é a que vende, porque a pessoa precisa se imaginar com aquilo. E não usa filtro. Filtro muda a cor do fio e aí chega diferente e a cliente reclama.',
    fechamentos: {
      comentario: 'Manda aqui embaixo qual das três fotos você nunca tira. Eu já sei que vai ser a terceira, mas quero que você confesse.',
      seguir: 'Eu ensino a parte que ninguém ensina: a de vender o que você faz. Fica por aqui que tem bastante.'
    }
  },
  {
    id: 'croche-06',
    nicho: 'croche',
    titulo: 'A cliente que pediu desconto',
    capa: 'Ela pediu desconto',
    views: 1970000,
    thumb: '',
    roteiroReferencia: 'Ela lê a conversa do celular em voz alta, a mensagem da cliente pedindo desconto, e depois lê a resposta que ela mandou. Não tem raiva nenhuma na voz dela.',
    ganchos: [
      'Uma cliente me pediu desconto ontem e eu respondi isso aqui. Sem grosseria nenhuma.',
      'Eu sei exatamente como você se sente quando alguém fala "tá caro" na sua peça. Deixa eu te ensinar o que responder.',
      'Parei de dar desconto e comecei a vender mais. Vou te explicar por que isso faz sentido.'
    ],
    corpo: 'Eu respondi assim: "Entendo! Eu não consigo baixar o valor porque ele já é o meu custo mais o meu trabalho. Mas eu tenho uma versão menor dessa mesma peça por cento e vinte, e eu posso parcelar em duas vezes. Qual fica melhor pra você?" Repara que eu não defendi o preço nem pedi desculpa. Eu ofereci duas saídas. Ela ficou com a versão menor e voltou dois meses depois pra comprar a grande. Desconto ensina a cliente que seu preço é inventado. Opção ensina que ele é real.',
    fechamentos: {
      comentario: 'Conta aqui embaixo a pior frase que já te falaram sobre o preço do seu trabalho. A minha foi "mas é só um barbante".',
      seguir: 'Se você faz com as mãos e sente vergonha de cobrar, você não tá sozinha. Vem pra cá que a gente resolve isso junto.'
    }
  },
  {
    id: 'croche-07',
    nicho: 'croche',
    titulo: 'Peça que eu mais vendo o ano inteiro',
    capa: 'A que mais vende',
    views: 1310000,
    thumb: '',
    roteiroReferencia: 'Ela mostra a peça campeã de vendas, conta quantas já vendeu e por que essa e não as outras. A peça é bem mais simples do que a gente espera.',
    ganchos: [
      'Eu já vendi essa mesma peça quatrocentas vezes e ela é a mais simples que eu faço.',
      'A peça mais difícil do meu catálogo nunca vendeu. Essa aqui, que leva quarenta minutos, paga as minhas contas.',
      'Se você só pudesse aprender uma peça pra vender, aprende essa.'
    ],
    corpo: 'É a bolsa pequena de alça de corrente. Quarenta minutos, dois novelos, e eu vendo por cento e dez. E não é sorte: ela vende porque serve de presente pra qualquer idade, porque cabe num embrulho pequeno e porque a mulher olha e sabe na hora onde vai usar. Peça que vende é peça que a pessoa consegue se imaginar usando em menos de três segundos. Se ela precisa pensar, não compra. Então antes de aprender uma peça nova, faz essa pergunta: em que dia da vida dela essa pessoa vai usar isso?',
    fechamentos: {
      comentario: 'Qual é a peça que mais sai aí na sua casa? Escreve aqui embaixo que eu quero montar uma lista com o que vocês mais vendem.',
      seguir: 'Eu mostro o que realmente vende, não o que é bonito no vídeo. Se isso te interessa, me segue aqui.'
    }
  },
  {
    id: 'croche-08',
    nicho: 'croche',
    titulo: 'Comecei com um novelo e uma agulha',
    capa: 'Comecei com um novelo',
    views: 2680000,
    thumb: '',
    roteiroReferencia: 'Ela conta a própria história em cima de imagens antigas das primeiras peças, que são bem tortas. Fala baixo, sem música alta, e o vídeo é mais longo que os outros.',
    ganchos: [
      'Essa foi a primeira peça que eu fiz. Tá torta, tá feia, e eu guardo ela até hoje.',
      'Há três anos eu tinha um novelo e nenhuma ideia do que fazer. Ontem eu paguei o aluguel com crochê.',
      'Se você acha que começou tarde demais, eu comecei aos quarenta e dois.'
    ],
    corpo: 'Eu aprendi por vídeo, sozinha, na mesa da cozinha, depois que as crianças dormiam. As primeiras dez peças foram todas tortas e eu não vendi nenhuma, dei de presente. A décima primeira uma vizinha quis comprar e eu quase não cobrei de vergonha. Levei um ano pra conseguir falar um preço sem gaguejar. Não foi talento, foi repetição: eu fiz a mesma peça umas trinta vezes até ela sair bonita sem eu pensar. É isso que ninguém mostra, a parte chata do meio. Todo mundo mostra a primeira e a de agora, e pula as trinta do meio.',
    fechamentos: {
      comentario: 'Me conta aqui embaixo há quanto tempo você faz crochê. Se você começou esse mês, escreve também, eu quero te ver aqui daqui a um ano.',
      seguir: 'Eu não sou nada de especial, eu só não parei. Se você quer companhia nessa parte do meio, fica comigo aqui.'
    }
  }
);

/* ==========================================================================
 *  BELEZA
 * ========================================================================*/
window.RDB.videos.push(
  {
    id: 'beleza-01',
    nicho: 'beleza',
    titulo: 'Maquiagem de cinco minutos pro trabalho',
    capa: 'Cinco minutos e pronto',
    views: 1740000,
    thumb: '',
    roteiroReferencia: 'Cronômetro rodando no canto da tela o vídeo inteiro. Ela faz a maquiagem em tempo real, sem corte, conversando. Termina antes dos cinco minutos.',
    ganchos: [
      'Cinco minutos, quatro produtos, e eu não vou cortar o vídeo em nenhum momento.',
      'Se você acorda e não tem tempo pra se arrumar, o problema não é o tempo. São os produtos que você escolheu.',
      'Essa é a maquiagem que eu faço no dia que eu acordei atrasada e ainda assim preciso parecer inteira.'
    ],
    corpo: 'Base só onde precisa: embaixo do olho, no canto do nariz e no queixo. O resto da cara não precisa, e é aí que a gente perde tempo. Depois um blush cremoso, que vai na bochecha e sobra pra passar na boca e na pálpebra, então são três lugares com um produto só. Rímel só em cima, nunca embaixo, porque embaixo borra e você vai ter que refazer. E sobrancelha penteada com sabonete no dedo, sem gastar nada. Pronto. Quem olha acha que você fez muito mais.',
    fechamentos: {
      comentario: 'Quanto tempo você tem de verdade de manhã? Escreve aqui embaixo, e eu faço um vídeo com o tempo que mais aparecer.',
      seguir: 'Eu faço maquiagem pra mulher de vida real, com pressa e com pouco produto. Se é a sua vida, fica comigo.'
    }
  },
  {
    id: 'beleza-02',
    nicho: 'beleza',
    titulo: 'Base que oxida e fica alaranjada',
    capa: 'Sua base está oxidando',
    views: 1290000,
    thumb: '',
    roteiroReferencia: 'Ela mostra a foto da cara dela de manhã e a foto do fim do dia, com a base já alaranjada. Depois faz o teste do tom no lugar certo do rosto.',
    ganchos: [
      'De manhã a base tá perfeita e às três da tarde sua cara tá laranja. Eu descobri por quê.',
      'Você não comprou o tom errado. A sua pele está fazendo a base mudar de cor, e tem conserto.',
      'Para de testar base na mão. Eu vou te mostrar onde testa de verdade.'
    ],
    corpo: 'A base escurece quando ela reage com a oleosidade da sua pele. Então a solução não é comprar um tom mais claro, é fazer duas coisas. Primeira: passa um primer ou até um hidratante bem leve e espera secar antes da base. Isso cria uma camada entre a oleosidade e o produto. Segunda: testa o tom na linha do queixo, com luz de janela, nunca na mão e nunca na luz de loja, porque a luz amarela da loja engana todo mundo. E espera dez minutos antes de decidir. Se depois de dez minutos ainda sumiu na pele, é o seu tom.',
    fechamentos: {
      comentario: 'Quantas bases do tom errado você tem em casa agora? Fala aqui embaixo, eu começo: quatro.',
      seguir: 'Eu testo tudo antes pra você não gastar errado. Me segue que eu economizo o seu dinheiro.'
    }
  },
  {
    id: 'beleza-03',
    nicho: 'beleza',
    titulo: 'O que eu faço no cabelo antes de dormir',
    capa: 'Faço isso antes de dormir',
    views: 2050000,
    thumb: '',
    roteiroReferencia: 'Vídeo curto, luz baixa, de pijama. Ela faz o processo no cabelo em silêncio, com legenda explicando. Termina com o cabelo do dia seguinte.',
    ganchos: [
      'Eu faço isso todo dia antes de dormir e acordo sem precisar mexer no cabelo.',
      'O seu cabelo não está quebrando por causa do shampoo. Está quebrando enquanto você dorme.',
      'Dois minutos à noite que economizam vinte minutos de manhã.'
    ],
    corpo: 'Eu solto o cabelo, passo a escova de baixo pra cima pra desembaraçar sem arrebentar, e faço uma trança frouxa de lado, bem folgada. Frouxa mesmo, porque apertada marca e quebra. Se for cacheado, em vez de trança eu prendo bem no alto da cabeça, sem elástico grosso, só uma scrunchie de pano. E a fronha faz mais diferença que metade dos produtos que a gente compra: fronha de cetim ou até de seda barata do mercado. Algodão puxa o fio e tira a água do cabelo a noite inteira. Isso aqui é de graça e é o que mais mudou o meu cabelo.',
    fechamentos: {
      comentario: 'Você dorme de cabelo solto ou preso? Me fala aqui embaixo, eu tô fazendo uma pesquisa e já sei que a maioria vai falar solto.',
      seguir: 'Eu cuido do cabelo com pouca coisa e muita constância. Se é isso que você procura, fica por aqui comigo.'
    }
  },
  {
    id: 'beleza-04',
    nicho: 'beleza',
    titulo: 'Gastei duzentos reais e tudo deu errado',
    capa: 'Gastei 200 à toa',
    views: 1620000,
    thumb: '',
    roteiroReferencia: 'Ela põe os produtos que comprou na mesa e fala honestamente o que funcionou e o que não funcionou, incluindo o que ela se arrependeu de comprar.',
    ganchos: [
      'Eu gastei duzentos reais em produto de beleza esse mês e só um prestou. Vou te falar qual.',
      'Antes de você comprar aquele produto que tá em todo lugar, assiste isso.',
      'Ninguém fala mal de produto porque todo mundo tá ganhando pra falar bem. Eu não tô.'
    ],
    corpo: 'O sérum de sessenta reais não fez nada que o hidratante de doze não faça. O pó translúcido caro ressecou minha pele mais que o baratinho de farmácia. A máscara de cílios, essa sim valeu, porque durou o dia inteiro sem borrar embaixo do olho. E a regra que eu aprendi depois de perder esse dinheiro: produto que fica na pele muito tempo, tipo protetor solar e hidratante, vale investir. Produto que sai no fim do dia, tipo base e pó, pode ser barato sem problema nenhum. Eu invertia isso e gastava errado.',
    fechamentos: {
      comentario: 'Me conta aqui embaixo o produto caro que você comprou e se arrependeu. Vamos fazer essa lista juntas pra ninguém mais cair.',
      seguir: 'Eu falo o que não funciona também, porque eu compro com o meu dinheiro. Me segue que eu te poupo de errar.'
    }
  },
  {
    id: 'beleza-05',
    nicho: 'beleza',
    titulo: 'Sobrancelha em casa sem estragar',
    capa: 'Sobrancelha em casa',
    views: 1380000,
    thumb: '',
    roteiroReferencia: 'Close muito próximo na sobrancelha dela. Ela marca os três pontos com um lápis antes de tirar qualquer pelo e explica cada marcação.',
    ganchos: [
      'Antes de pegar a pinça, marca esses três pontos. Depois disso é impossível errar.',
      'Eu estraguei minha sobrancelha por dez anos porque ninguém me mostrou isso.',
      'Não é sobre tirar pelo. É sobre saber onde a sua sobrancelha começa, e provavelmente não é onde você acha.'
    ],
    corpo: 'Pega um lápis e encosta ele na lateral do nariz, subindo reto. Onde ele cruza a sobrancelha é onde ela começa, e tudo que estiver antes disso, no meio da testa, pode sair. Depois inclina o lápis do nariz passando pelo meio do olho: ali é o ponto mais alto do arco. E do nariz até o canto de fora do olho é onde ela termina. Marca os três com lápis claro antes de encostar a pinça. E tira sempre por baixo, nunca por cima, porque em cima é o que dá o formato e não volta fácil se você errar.',
    fechamentos: {
      comentario: 'Faz as três marcas agora e volta aqui pra me contar se a sua sobrancelha começava no lugar certo. A minha não começava.',
      seguir: 'Eu ensino a fazer em casa o que a gente não tem dinheiro pra pagar toda semana. Fica por aqui.'
    }
  },
  {
    id: 'beleza-06',
    nicho: 'beleza',
    titulo: 'A pele melhorou quando eu tirei coisas',
    capa: 'Tirei tudo e melhorou',
    views: 1880000,
    thumb: '',
    roteiroReferencia: 'Ela mostra a prateleira lotada de produtos e depois mostra os três que sobraram. Conta o que aconteceu com a pele dela nesse meio tempo.',
    ganchos: [
      'Eu usava onze produtos na cara. Hoje eu uso três e minha pele nunca esteve tão boa.',
      'Se sua pele tá irritada, provavelmente não falta nada nela. Sobra.',
      'Ninguém ganha dinheiro te falando pra comprar menos, então eu vou falar.'
    ],
    corpo: 'Eu tinha ácido, sérum, esfoliante, máscara, tônico, e minha pele vivia ardendo e descamando. Eu parei tudo por duas semanas, usando só água, um sabonete suave e protetor solar. A pele acalmou em dez dias. Aí eu fui voltando um produto por vez, com uma semana de diferença, pra descobrir qual era o problema. Era o esfoliante, que eu usava três vezes na semana quando devia ser uma. Hoje é sabonete, hidratante e protetor. Só. E se você for gastar em um, gasta no protetor solar, que é o único que faz diferença de verdade a longo prazo.',
    fechamentos: {
      comentario: 'Quantos produtos você passa na cara por dia? Conta aí embaixo, sem vergonha, porque eu já passei onze.',
      seguir: 'Eu falo de pele sem te empurrar produto. Se você tá cansada de gastar e não ver resultado, me segue.'
    }
  },
  {
    id: 'beleza-07',
    nicho: 'beleza',
    titulo: 'Batom que não sai no copo',
    capa: 'Batom que não sai',
    views: 1150000,
    thumb: '',
    roteiroReferencia: 'Ela passa o batom do jeito dela, bebe água no copo transparente na frente da câmera e mostra o copo limpo. O truque são duas camadas com uma coisa no meio.',
    ganchos: [
      'Eu bebi água, comi e falei o dia inteiro. Olha o copo e olha a minha boca.',
      'O truque do batom que fica é uma folha de papel higiênico. Eu explico.',
      'Você não precisa de batom caro. Precisa passar em duas camadas, e quase ninguém faz isso.'
    ],
    corpo: 'Passa a primeira camada e pressiona os lábios num lenço ou num pedaço de papel, tirando o excesso. Essa primeira camada é a que gruda na boca, e ela fica mesmo que pareça que saiu. Depois passa a segunda camada por cima, mais fininha, e pressiona de novo no papel. Duas camadas finas duram o triplo de uma grossa. E hidrata a boca uma hora antes, não na hora, porque se você passar batom em cima de hidratante fresco ele desliza e vaza pro canto. Boca descascada é o que faz o batom sair em pedaço.',
    fechamentos: {
      comentario: 'Qual é a cor de batom que você usa quando não quer pensar? Escreve aqui, eu tô querendo uma nova e confio mais em vocês que em loja.',
      seguir: 'Truque pequeno que resolve problema chato, todo dia aqui. Me segue que tem muito.'
    }
  },
  {
    id: 'beleza-08',
    nicho: 'beleza',
    titulo: 'Me arrumar quando eu não tô bem',
    capa: 'Nos dias difíceis',
    views: 2420000,
    thumb: '',
    roteiroReferencia: 'Vídeo mais quieto que os outros, sem trilha animada. Ela se arruma devagar e fala sobre o que se arrumar faz por ela nos dias ruins. Olha muito pra câmera.',
    ganchos: [
      'Tem dias que eu me arrumo não porque eu vou sair, mas porque eu preciso me reconhecer no espelho.',
      'Se você tá numa fase em que nem passar um creme você consegue, esse vídeo é pra você.',
      'Ninguém fala disso, mas tem dia que se arrumar é a coisa mais difícil da casa.'
    ],
    corpo: 'Eu tenho uma regra pros dias ruins, e é fazer uma coisa só. Uma. Pode ser lavar o rosto. Pode ser passar hidratante na mão. Pode ser prender o cabelo. Não é sobre ficar bonita pra ninguém ver, é sobre fazer um gesto pequeno de cuidado comigo mesma quando eu não tô conseguindo fazer mais nada. E quase sempre, depois da primeira, vem uma segunda. Mas se não vier, tudo bem também. O dia que eu só lavei o rosto ainda foi um dia que eu cuidei de mim.',
    fechamentos: {
      comentario: 'Qual é a sua coisa única nos dias difíceis? Me conta aqui embaixo. Eu leio todas, de verdade, e às vezes é o que me segura também.',
      seguir: 'Aqui não é sobre ser perfeita, é sobre não se abandonar. Se isso faz sentido pra você, fica comigo.'
    }
  }
);

/* ==========================================================================
 *  MATERNIDADE
 * ========================================================================*/
window.RDB.videos.push(
  {
    id: 'maternidade-01',
    nicho: 'maternidade',
    titulo: 'A mochila da creche que salva a manhã',
    capa: 'A mochila da creche',
    views: 1470000,
    thumb: '',
    roteiroReferencia: 'Ela arruma a mochila na frente da câmera, item por item, e fala por que cada coisa está ali. No fim mostra o compartimento que ninguém pensa em usar.',
    ganchos: [
      'Eu arrumo a mochila da creche à noite e a minha manhã virou outra coisa.',
      'Tem uma coisa dentro dessa mochila que já me salvou umas vinte vezes e não é roupa.',
      'Se sua manhã é um caos, não é você que é desorganizada. É que você tá fazendo tudo no pior horário.'
    ],
    corpo: 'Duas mudas de roupa completas, e completa quer dizer com meia e com calcinha ou cueca, porque falta sempre a peça pequena. Uma sacola plástica pra roupa suja, dessas de mercado mesmo. Um pacote de lenço e um creme. E a coisa que salva: uma muda de roupa minha, uma camiseta dobrada bem pequena no bolso da frente. Porque quando vaza, vaza em mim também, e eu já fui trabalhar com a blusa suja mais vezes do que eu queria admitir. E arruma tudo à noite, com a criança dormindo. De manhã ninguém pensa direito.',
    fechamentos: {
      comentario: 'O que tem na sua mochila que não tem na dos outros? Escreve aqui embaixo, eu quero roubar as ideias de vocês.',
      seguir: 'Eu compartilho as coisas que fazem o dia de mãe apertada funcionar. Sem perfeição nenhuma. Fica comigo aqui.'
    }
  },
  {
    id: 'maternidade-02',
    nicho: 'maternidade',
    titulo: 'A frase que fez ele parar de gritar',
    capa: 'Essa frase mudou tudo',
    views: 2790000,
    thumb: '',
    roteiroReferencia: 'Ela conta uma cena real de birra no mercado, imita as duas falas, a que ela usava antes e a que ela usa hoje. Não julga ninguém em momento nenhum.',
    ganchos: [
      'Meu filho tava gritando no meio do mercado e eu falei uma frase que mudou tudo em dez segundos.',
      'Eu parei de mandar meu filho se acalmar. Foi aí que ele começou a se acalmar.',
      'Se toda birra vira briga na sua casa, tem uma coisa que eu troquei e eu vou te contar qual é.'
    ],
    corpo: 'Antes eu falava "para com isso", "não é hora", "você já é grande". E ele gritava mais. Hoje eu abaixo na altura dele e falo o que eu tô vendo: "você queria muito aquilo e não pode levar, e isso é bem chato". Só isso. Eu não dou o que ele quer, eu não mudo o não. Eu só falo em voz alta o que ele tá sentindo, porque criança pequena não sabe nomear o que sente e o corpo dela explode. Quando alguém nomeia, o corpo dela entende que foi compreendida. Não funciona toda vez. Mas funciona muito mais do que mandar parar.',
    fechamentos: {
      comentario: 'Qual foi a birra mais difícil que você já passou em público? Escreve aqui embaixo, ninguém vai julgar. Aqui a gente se entende.',
      seguir: 'Eu não sou psicóloga, eu sou mãe aprendendo igual você. Se você quer companhia nessa, fica por aqui.'
    }
  },
  {
    id: 'maternidade-03',
    nicho: 'maternidade',
    titulo: 'Almoço da semana em uma hora',
    capa: 'Uma hora, semana toda',
    views: 1930000,
    thumb: '',
    roteiroReferencia: 'Cozinha filmada de cima, tudo acontecendo ao mesmo tempo em quatro panelas. No fim ela mostra os potes organizados na geladeira.',
    ganchos: [
      'Uma hora de domingo e eu não cozinho mais nada até sexta.',
      'Eu chegava do trabalho às sete e ainda tinha que fazer comida. Até eu descobrir isso.',
      'Não é marmita congelada. É melhor que isso e eu vou te mostrar a diferença.'
    ],
    corpo: 'Eu não faço pratos prontos, eu faço bases. Uma panela grande de arroz, uma de feijão, uma proteína desfiada, que pode ser frango cozido, e uma travessa de legumes assados. Tudo separado em potes. Aí durante a semana eu só combino: segunda é arroz com frango e legume, terça o frango vira recheio de tapioca, quarta o legume vira sopa batida. A mesma base vira comida diferente e ninguém enjoa. Marmita pronta de domingo enjoa na quarta. Base separada não enjoa, porque toda noite parece uma comida nova.',
    fechamentos: {
      comentario: 'Qual base você faria primeiro? Escreve aqui embaixo que eu gravo o passo a passo da mais pedida.',
      seguir: 'Eu trabalho fora e dou conta da casa com truque, não com tempo. Se você tá na mesma, me segue aqui.'
    }
  },
  {
    id: 'maternidade-04',
    nicho: 'maternidade',
    titulo: 'A culpa de voltar a trabalhar',
    capa: 'A culpa que ninguém fala',
    views: 3120000,
    thumb: '',
    roteiroReferencia: 'Ela fala direto pra câmera, sem edição, sobre o primeiro dia que deixou o filho pra voltar ao trabalho. Chora um pouco e não corta essa parte.',
    ganchos: [
      'No primeiro dia que eu deixei ele na creche eu chorei dentro do carro por quarenta minutos.',
      'Ninguém me avisou que voltar a trabalhar ia doer tanto assim.',
      'Se você tá se sentindo culpada por precisar trabalhar, senta aqui comigo um minuto.'
    ],
    corpo: 'A culpa não é um sinal de que você tá fazendo errado. Ela é só o preço de amar muito e não poder estar em dois lugares. Eu levei um ano pra entender isso. O que me ajudou não foi deixar de sentir culpa, foi mudar a conta que eu fazia na cabeça: em vez de contar as horas que eu tava fora, eu comecei a contar o que eu fazia nas horas que eu tava em casa. Vinte minutos deitada no chão com ele, sem celular na mão, valem mais que uma tarde inteira do meu corpo presente e a minha cabeça no trabalho. E ele também vê a mãe dele trabalhando. Isso ensina alguma coisa que eu não conseguiria ensinar falando.',
    fechamentos: {
      comentario: 'Se você já passou por isso, escreve aqui embaixo uma palavra pra quem tá passando agora. Tem muita mãe lendo esses comentários hoje.',
      seguir: 'Aqui a gente fala das partes difíceis também, não só das bonitinhas. Se você precisa desse lugar, fica comigo.'
    }
  },
  {
    id: 'maternidade-05',
    nicho: 'maternidade',
    titulo: 'Brincadeira que rende meia hora',
    capa: 'Rende 30 minutos',
    views: 1650000,
    thumb: '',
    roteiroReferencia: 'Ela monta a brincadeira com coisa que já tem em casa, em menos de um minuto, e depois mostra a criança brincando sozinha enquanto ela toma café.',
    ganchos: [
      'Essa brincadeira custa zero reais e me dá meia hora de paz. Eu não tô exagerando.',
      'Eu tomo café quente de novo desde que eu descobri isso aqui.',
      'Não precisa de brinquedo novo. Precisa de uma bacia, água e umas tampas de garrafa.'
    ],
    corpo: 'Põe uma bacia com um dedo de água em cima de uma toalha velha, no chão da cozinha. Joga dentro umas tampinhas de garrafa, uma colher e um potinho. Só isso. A criança fica transferindo água de um pote pro outro, e isso é sério pra ela, é trabalho, não é bobagem. Rende muito mais que brinquedo caro porque não tem resposta certa, ela inventa. Põe a toalha embaixo que resolve a bagunça, e fica na mesma cozinha que ela, de olho, mas sentada. Eu tomo meu café ali mesmo. Trinta minutos, quase todo dia.',
    fechamentos: {
      comentario: 'Me conta aqui embaixo a brincadeira de zero real que funciona aí na sua casa. Eu preciso de ideias novas, socorro.',
      seguir: 'Eu posto uma dessas por semana, sempre com o que já tem em casa. Me segue que a sua vida fica mais fácil.'
    }
  },
  {
    id: 'maternidade-06',
    nicho: 'maternidade',
    titulo: 'Parei de tentar dar conta de tudo',
    capa: 'Parei de dar conta',
    views: 2270000,
    thumb: '',
    roteiroReferencia: 'Ela mostra a casa bagunçada de verdade, sem arrumar pra gravar, e fala sobre o que ela escolheu deixar de fazer.',
    ganchos: [
      'Essa é a minha casa hoje, sem arrumar pra gravar. E eu tô em paz.',
      'Eu escolhi três coisas pra fazer bem e larguei o resto. Vou te falar quais.',
      'A casa da internet não existe. A minha é essa aqui, e eu parei de me comparar.'
    ],
    corpo: 'Eu fiz uma lista de tudo que eu achava que tinha que dar conta e fui riscando. Sobrou três: comida na mesa, roupa limpa e tempo com as crianças. Essas três eu faço bem. Chão brilhando eu não faço. Armário organizado por cor eu não faço. Bolo de aniversário confeitado eu compro pronto e não sinto culpa. Porque quando eu tentava fazer tudo, eu fazia tudo pela metade e ainda me odiava no fim do dia. Escolher o que você não vai fazer é tão importante quanto escolher o que você vai.',
    fechamentos: {
      comentario: 'Qual é a coisa que você vai largar a partir de hoje? Escreve aqui embaixo, eu quero ver a lista de vocês.',
      seguir: 'Aqui é casa real, mãe cansada e sem filtro. Se você cansou do perfeito, vem pra cá.'
    }
  },
  {
    id: 'maternidade-07',
    nicho: 'maternidade',
    titulo: 'O que eu falo quando ele pergunta de dinheiro',
    capa: 'Quando ele pede algo caro',
    views: 1410000,
    thumb: '',
    roteiroReferencia: 'Ela conta a cena do filho pedindo um brinquedo caro na loja e ensina a resposta que ela dá. Fala sem drama e sem pena.',
    ganchos: [
      'Meu filho pediu um brinquedo de trezentos reais e eu não falei que a gente não tinha dinheiro.',
      'Tem um jeito de falar não que não faz a criança achar que a família é pobre demais.',
      'Eu parei de falar "a gente não pode" e comecei a falar isso aqui.'
    ],
    corpo: 'Quando eu falava "a gente não tem dinheiro", ele ficava com medo, e às vezes até com vergonha. Hoje eu falo assim: "a gente tem dinheiro, e a gente escolheu usar ele com outras coisas esse mês". Aí eu mostro o que a gente escolheu, a comida, o passeio do fim de semana, a escola. Isso muda o não de falta pra escolha. E quando é algo que ele quer muito, eu falo "vamos anotar na lista de aniversário", e anoto na frente dele, porque a criança precisa ver que o desejo dela foi levado a sério mesmo quando a resposta é não agora.',
    fechamentos: {
      comentario: 'Como você responde quando pedem coisa cara? Escreve aqui embaixo, eu tô sempre aprendendo com vocês nessa parte.',
      seguir: 'Eu falo de criar filho com o dinheiro contado, sem fingir que é fácil. Fica comigo aqui.'
    }
  },
  {
    id: 'maternidade-08',
    nicho: 'maternidade',
    titulo: 'Quinze minutos só meus',
    capa: 'Quinze minutos meus',
    views: 1780000,
    thumb: '',
    roteiroReferencia: 'Vídeo simples, ela sentada na beira da cama de manhã cedo, ainda escuro, contando o que faz nesse horário e por quê.',
    ganchos: [
      'Eu acordo quinze minutos antes de todo mundo e é a melhor parte do meu dia.',
      'Não é sobre acordar às cinco da manhã. É sobre ter quinze minutos em que ninguém te chama.',
      'Se você não lembra da última vez que ficou sozinha acordada, esse vídeo é pra você.'
    ],
    corpo: 'Não é rotina de produtividade, não é exercício, não é nada que eu preciso fazer. É só eu, um café, e a casa em silêncio. Às vezes eu olho o celular, às vezes eu não faço nada. O ponto é que esse tempo não pertence a ninguém além de mim, e isso muda o jeito que o resto do dia acontece. Antes eu acordava já sendo chamada e ia atendendo todo mundo até a noite, e quando eu ia dormir eu não tinha existido no meu próprio dia. Quinze minutos. Não precisa ser de manhã, pode ser à noite depois que eles dormem. Mas precisa ser seu.',
    fechamentos: {
      comentario: 'Que horas do dia são suas? Me conta aqui embaixo. Se você não tem nenhuma, escreve isso também, sem vergonha.',
      seguir: 'Aqui eu lembro você de que você também é gente, não só mãe. Se você precisa ouvir isso, me segue.'
    }
  }
);

/* ==========================================================================
 *  CULINARIA
 * ========================================================================*/
window.RDB.videos.push(
  {
    id: 'culinaria-01',
    nicho: 'culinaria',
    titulo: 'Bolo de liquidificador que nunca falha',
    capa: 'O bolo que nunca falha',
    views: 3450000,
    thumb: '',
    roteiroReferencia: 'Tudo filmado de cima. Ela põe tudo no liquidificador, bate, assa e corta. Sem falar nada, só com o som da cozinha e legenda com as medidas.',
    ganchos: [
      'Esse bolo tem cinco ingredientes e eu faço ele de olho fechado há dez anos.',
      'Se o seu bolo sempre solha no meio, é uma coisa só e não é o forno.',
      'Tudo no liquidificador, quarenta minutos, e olha esse corte.'
    ],
    corpo: 'Três ovos, uma xícara de açúcar, meia de óleo, uma de leite e duas de farinha. Bate tudo menos o fermento, e o fermento entra por último, mexido com a colher, nunca no liquidificador. É aí que quase todo mundo erra: se o fermento bate junto, ele trabalha antes da hora e o bolo cresce e murcha. Forno em cento e oitenta, e não abre nos primeiros vinte e cinco minutos, por mais vontade que dê. Abrir cedo derruba o bolo. Espeta um palito, saiu limpo, tá pronto. Esse bolo já pagou conta de luz aqui em casa.',
    fechamentos: {
      comentario: 'Você é do time do bolo de fubá ou do de chocolate? Escreve aqui embaixo que eu faço a versão do que ganhar.',
      seguir: 'Receita de verdade, com o que tem no armário, sem ingrediente caro. É isso que eu faço aqui. Me segue.'
    }
  },
  {
    id: 'culinaria-02',
    nicho: 'culinaria',
    titulo: 'Como eu faço arroz soltinho',
    capa: 'Arroz sempre soltinho',
    views: 2180000,
    thumb: '',
    roteiroReferencia: 'Close na panela. Ela faz o arroz do começo ao fim em tempo real e mostra o grão solto no final, mexendo com o garfo.',
    ganchos: [
      'Meu arroz fica soltinho todo dia e eu não lavo o arroz. Vou te explicar.',
      'Arroz empapado tem uma causa só e ninguém fala dela: é a quantidade de água, não o tempo de fogo.',
      'Minha sogra fazia o melhor arroz do mundo e eu finalmente descobri o que ela fazia diferente.'
    ],
    corpo: 'Refoga o alho no óleo até ficar dourado, não queimado, porque alho queimado amarga a panela inteira. Joga o arroz seco e mexe por um minuto, até o grão ficar meio transparente na borda. Esse minuto é o que sela o grão e mantém ele solto. Aí a água: para cada xícara de arroz, duas de água quente, nunca fria, porque água fria corta o cozimento e o grão racha. Sal, tampa, fogo baixo, e não mexe mais. Mexer arroz cozinhando solta o amido e empapa. Quando secar, desliga e deixa tampado cinco minutos antes de soltar com garfo.',
    fechamentos: {
      comentario: 'Você lava o arroz antes ou não? Escreve aqui embaixo que eu quero ver essa briga nos comentários.',
      seguir: 'Eu ensino o básico bem feito, que é o que a gente come todo dia. Fica por aqui comigo.'
    }
  },
  {
    id: 'culinaria-03',
    nicho: 'culinaria',
    titulo: 'Janta de vinte reais pra família toda',
    capa: 'Janta de 20 reais',
    views: 2890000,
    thumb: '',
    roteiroReferencia: 'Ela mostra a sacola do mercado, fala o valor de cada item, cozinha e serve o prato pra quatro pessoas. O valor total aparece na tela no fim.',
    ganchos: [
      'Vinte reais, quatro pessoas, janta de verdade. Vem comigo no mercado.',
      'No fim do mês, quando não tem quase nada, é essa janta que eu faço aqui em casa.',
      'Essa é a receita que me salvou quando o dinheiro apertou de verdade, e não tem nada de tristeza nela.'
    ],
    corpo: 'Meio quilo de carne moída de segunda, uma cebola, dois tomates, um pacote de macarrão e um molho. Refoga a cebola, põe a carne e deixa ela pegar cor antes de mexer, porque carne moída mexida cedo cozinha na própria água e fica sem gosto. Tomate picado, molho, e deixa apurar em fogo baixo uns quinze minutos com a panela meio tampada. Macarrão cozido al dente e misturado no molho ainda na panela, nunca separado no prato, porque assim ele pega o sabor. Rende pra quatro com repeteco e ainda sobra pra marmita do dia seguinte.',
    fechamentos: {
      comentario: 'Qual é a sua janta de fim de mês? Escreve aqui embaixo que eu vou testando as receitas de vocês e mostrando aqui.',
      seguir: 'Eu cozinho pra vida real, com o dinheiro contado e sem julgamento. Se é a sua realidade, me segue.'
    }
  },
  {
    id: 'culinaria-04',
    nicho: 'culinaria',
    titulo: 'O que eu faço com o que ia pro lixo',
    capa: 'Isso ia pro lixo',
    views: 1990000,
    thumb: '',
    roteiroReferencia: 'Ela tira da geladeira as coisas que estão pra vencer e transforma tudo num prato só. Vai decidindo na hora, sem receita pronta.',
    ganchos: [
      'Eu abri a geladeira, peguei o que ia estragar e fiz o almoço de hoje.',
      'A gente joga fora quase cem reais de comida por mês sem perceber. Eu parei.',
      'Talo, folha e casca não são lixo. Olha o que eu faço com eles.'
    ],
    corpo: 'Talo de couve e de brócolis picado fininho vai no refogado do arroz e ninguém percebe. Folha de cenoura e de beterraba bate com alho e óleo e vira um molho verde que vai na macarronada. Pão amanhecido eu rasgo, jogo azeite e sal e levo ao forno: vira crouton e vira farinha de rosca. E a regra que mudou tudo aqui: quando eu chego do mercado, eu tiro tudo da sacola e olho um por um antes de guardar, decidindo o que come primeiro. O que estraga fica na frente da geladeira, na altura dos olhos. O que dura vai pro fundo. Só isso me fez parar de jogar comida fora.',
    fechamentos: {
      comentario: 'O que você sempre acaba jogando fora? Me fala aqui embaixo que eu ensino o que fazer com aquilo.',
      seguir: 'Eu aproveito tudo aqui em casa porque eu preciso, não porque tá na moda. Se você também, fica comigo.'
    }
  },
  {
    id: 'culinaria-05',
    nicho: 'culinaria',
    titulo: 'A carne barata que fica macia',
    capa: 'Carne barata e macia',
    views: 1720000,
    thumb: '',
    roteiroReferencia: 'Ela corta a carne na frente da câmera mostrando a direção da fibra, e compara dois pedaços cozidos do mesmo jeito, um cortado certo e um errado.',
    ganchos: [
      'Mesma carne, mesma panela, mesmo tempo. Uma tá macia e a outra tá uma sola. A diferença é a faca.',
      'Você não precisa comprar carne cara. Precisa saber cortar a barata.',
      'O açougueiro me ensinou isso e eu nunca mais comprei carne de primeiro preço à toa.'
    ],
    corpo: 'Olha a carne crua contra a luz e você vai ver umas linhas correndo numa direção, que é a fibra. Você tem que cortar atravessado nessas linhas, nunca no mesmo sentido delas. Quando você corta no sentido da fibra, cada pedaço fica com fio comprido e a mastigação vira briga. Atravessado, a fibra já vem curtinha e a carne desmancha. E pra carne de segunda, deixa meia hora num pouco de sal grosso antes de cozinhar, e cozinha em fogo baixo com a panela tampada. Fogo alto em carne dura endurece mais. Paciência é o que amacia.',
    fechamentos: {
      comentario: 'Qual carne barata você compra mais? Escreve aqui embaixo que eu ensino o jeito certo de fazer aquela.',
      seguir: 'Eu passo aqui o que eu aprendi de tanto errar na cozinha. Me segue que o seu almoço melhora.'
    }
  },
  {
    id: 'culinaria-06',
    nicho: 'culinaria',
    titulo: 'Congelei a semana inteira em potes',
    capa: 'Congelei a semana',
    views: 2340000,
    thumb: '',
    roteiroReferencia: 'Ela mostra o freezer organizado e explica a etiqueta de cada pote. Depois mostra uma refeição saindo do congelador e indo pro prato.',
    ganchos: [
      'Meu freezer tem doze refeições prontas e eu levei uma manhã pra fazer todas.',
      'Congelar comida não dá errado. Congelar errado é que dá.',
      'Tem três coisas que não podem ir pro congelador e eu aprendi do jeito difícil.'
    ],
    corpo: 'Congela sempre em pote baixo e largo, nunca fundo, porque no raso a comida congela rápido e descongela por igual. Espera esfriar completo antes de fechar, senão faz gelo por dentro e a comida fica aguada. Etiqueta com o nome e a data, porque em três semanas você não vai saber o que é aquele pote marrom. E não congela: batata cozida, que vira farelo, folha crua, que vira pano molhado, e comida com creme de leite, que talha. O resto vai tudo. Arroz congela bem, feijão congela ótimo, molho congela perfeito.',
    fechamentos: {
      comentario: 'O que você já congelou e deu errado? Me conta aqui embaixo, eu preciso rir com vocês porque a minha foi a batata.',
      seguir: 'Eu organizo a comida da semana em uma manhã e vivo tranquila. Se você quer isso, me segue aqui.'
    }
  },
  {
    id: 'culinaria-07',
    nicho: 'culinaria',
    titulo: 'Tempero caseiro que substitui o caldo',
    capa: 'Joguei o caldo fora',
    views: 1580000,
    thumb: '',
    roteiroReferencia: 'Ela bate os ingredientes no processador e põe no pote de vidro. Mostra o pote pronto na bancada e a comida temperada com ele.',
    ganchos: [
      'Eu não compro caldo de galinha há dois anos. Faço esse aqui e dura três meses.',
      'Olha o que tem no caldo que você põe na comida do seu filho todo dia. Agora olha o que tem no meu.',
      'Custa um quinto do preço, dura três meses e o gosto é outro.'
    ],
    corpo: 'Cebola, alho, salsinha, cebolinha, um pouco de cenoura e de pimentão, tudo picado grosseiro. Bate no processador até virar uma pasta e mistura com sal, bastante sal, porque é o sal que conserva. Põe num pote de vidro na geladeira e dura uns três meses tranquilo. Uma colher disso substitui o cubo inteiro. E se você quiser guardar mais tempo, põe em forminha de gelo e congela: aí você tira um cubinho por panela. Eu faço uma vez a cada três meses, num domingo, e resolvo a comida da casa inteira.',
    fechamentos: {
      comentario: 'Você tem tempero caseiro de família? Escreve aqui embaixo o que sua mãe ou sua avó punha no dela, eu quero as receitas de vocês.',
      seguir: 'Comida de verdade, feita em casa, sem gastar mais por isso. Fica comigo que eu te ensino tudo que eu sei.'
    }
  },
  {
    id: 'culinaria-08',
    nicho: 'culinaria',
    titulo: 'Comecei a vender marmita da minha cozinha',
    capa: 'Vendo da minha cozinha',
    views: 2610000,
    thumb: '',
    roteiroReferencia: 'Ela monta as marmitas do dia e conta como começou, quantas vende e quanto cobra. Tudo filmado na cozinha da casa dela mesmo.',
    ganchos: [
      'Eu vendo quarenta marmitas por semana da minha própria cozinha e comecei com oito.',
      'Se você cozinha bem e tá precisando de dinheiro, começa com oito marmitas. Eu te explico por quê.',
      'Não precisa de ponto, não precisa de alvará no começo, não precisa de nada além do que você já tem.'
    ],
    corpo: 'Eu comecei oferecendo pros vizinhos do prédio, num grupo de mensagem, oito marmitas de segunda. Anotei quanto gastei de tudo, dividi por oito, e somei o meu trabalho em cima. Não chuta o preço, faz a conta, senão você trabalha de graça e não percebe. Pedido só até a noite anterior, porque cozinhar por encomenda fechada é o que não deixa sobrar comida e prejuízo. E não faz cardápio grande no começo: dois pratos por dia, só. Cardápio grande te obriga a comprar muita coisa e é aí que o lucro some sem você entender pra onde foi.',
    fechamentos: {
      comentario: 'Você venderia comida da sua casa? Escreve aqui embaixo o que te trava, que eu respondo uma por uma.',
      seguir: 'Eu sustento a minha família com essa cozinha aqui. Se você quer o caminho, eu mostro tudo por aqui.'
    }
  }
);

/* ==========================================================================
 *  SERVICOS LOCAIS
 * ========================================================================*/
window.RDB.videos.push(
  {
    id: 'servicos-01',
    nicho: 'servicos',
    titulo: 'Como eu consegui cliente sem gastar',
    capa: 'Cliente sem pagar nada',
    views: 1860000,
    thumb: '',
    roteiroReferencia: 'Ela fala direto pra câmera, sentada no lugar onde atende. Conta as três coisas que fez na primeira semana e que trouxeram as primeiras clientes.',
    ganchos: [
      'Eu consegui minhas primeiras doze clientes sem gastar um real em anúncio.',
      'Todo mundo fala pra você impulsionar. Antes de gastar dinheiro, faz essas três coisas.',
      'Se você acabou de começar e não tem cliente, o problema não é o preço nem o seu trabalho.'
    ],
    corpo: 'Primeiro: eu avisei uma por uma. Não postei e esperei. Mandei mensagem individual pra quarenta pessoas que já me conheciam, falando o que eu tava fazendo. Doze responderam. Segundo: eu pedi pra cada uma que atendi mandar uma foto do resultado e me marcar, e eu dava um desconto pequeno na próxima por isso. Terceiro, e é o que mais funcionou: eu entrei nos grupos de bairro, aqueles de vizinhos, e não fiquei anunciando. Eu respondia dúvida. Quando alguém perguntava algo da minha área, eu respondia de graça, bem respondido. Aí as pessoas iam no meu perfil sozinhas.',
    fechamentos: {
      comentario: 'De qual bairro você é e o que você faz? Escreve aqui embaixo, porque tem gente lendo isso que mora perto de você.',
      seguir: 'Eu comecei sem nada e sem conhecer ninguém. Se você tá começando agora, fica comigo que eu mostro o caminho.'
    }
  },
  {
    id: 'servicos-02',
    nicho: 'servicos',
    titulo: 'O que eu respondo quando perguntam o preço',
    capa: 'Quando perguntam o preço',
    views: 2150000,
    thumb: '',
    roteiroReferencia: 'Ela mostra a tela do celular com a conversa real, lê a pergunta da cliente e lê a resposta dela. Compara com a resposta que ela dava antes.',
    ganchos: [
      'A cliente pergunta o preço e some. Eu vou te mostrar o que eu passei a responder.',
      'Eu mudei uma frase na minha resposta e dobrei quantas pessoas fecham comigo.',
      'Nunca mais responda só o valor. Esse é o erro que faz todo mundo sumir.'
    ],
    corpo: 'Antes eu respondia "oitenta reais" e a pessoa sumia. Hoje eu respondo assim: "Oi! Esse serviço fica em oitenta e leva mais ou menos uma hora e meia. Eu tenho horário quinta às duas ou sexta de manhã, qual fica melhor pra você?" Repara em três coisas: eu falo o valor sem rodeio, eu falo quanto tempo leva, porque tempo faz o preço fazer sentido, e eu já termino com uma pergunta de horário. Quando você termina com o valor, a conversa acaba ali. Quando você termina com uma pergunta, ela continua, e quem responde uma pergunta de horário já está quase marcando.',
    fechamentos: {
      comentario: 'Manda aqui embaixo como você responde hoje, que eu te falo o que eu mudaria. Eu respondo mesmo, pode mandar.',
      seguir: 'Eu ensino a parte de conversar com cliente, que é onde a maioria perde dinheiro. Fica por aqui comigo.'
    }
  },
  {
    id: 'servicos-03',
    nicho: 'servicos',
    titulo: 'A cliente que desmarcou em cima da hora',
    capa: 'Desmarcou em cima da hora',
    views: 1670000,
    thumb: '',
    roteiroReferencia: 'Ela conta a situação com bom humor, sem xingar ninguém, e mostra a regra que criou depois disso. Mostra a mensagem que manda hoje.',
    ganchos: [
      'Três clientes desmarcaram na mesma semana e eu perdi o dia inteiro. Aí eu criei essa regra.',
      'Se você é autônoma e não tem política de desmarque, você trabalha de graça sem perceber.',
      'Eu não cobro multa. Eu faço isso aqui, e desde então quase ninguém mais falta.'
    ],
    corpo: 'Eu passei a mandar uma mensagem no dia anterior, sempre no mesmo horário, assim: "Oi! Confirmando o seu horário amanhã às duas. Se precisar remarcar, me avisa hoje que eu consigo encaixar outra pessoa." Não tem cobrança nem ameaça, mas a frase final mostra que o horário dela tem valor e que outra pessoa quer. Só isso derrubou as faltas quase a zero. E pra quem falta sem avisar duas vezes, eu passo a pedir metade adiantado pra marcar. Não é castigo, é que o meu dia tem um número limitado de horários e cada um vazio é dinheiro que não volta.',
    fechamentos: {
      comentario: 'Já levou cano de cliente? Conta aqui embaixo a sua história, porque eu preciso saber que não fui só eu.',
      seguir: 'Eu compartilho as regras que eu criei errando, pra você não precisar errar igual. Me segue aqui.'
    }
  },
  {
    id: 'servicos-04',
    nicho: 'servicos',
    titulo: 'Aumentei meu preço e não perdi ninguém',
    capa: 'Aumentei o preço',
    views: 1940000,
    thumb: '',
    roteiroReferencia: 'Ela conta quanto cobrava, quanto passou a cobrar e como avisou as clientes antigas. Lê a mensagem que mandou pra elas.',
    ganchos: [
      'Eu aumentei trinta por cento no meu preço e perdi duas clientes de quarenta. Valeu muito a pena.',
      'Se você cobra o mesmo valor de dois anos atrás, você está ganhando menos hoje. É matemática.',
      'O jeito que você avisa do aumento importa mais que o aumento em si. Olha como eu avisei.'
    ],
    corpo: 'Eu mandei a mensagem com trinta dias de antecedência, individual, assim: "Oi! Quero te avisar com antecedência que a partir do dia primeiro meu valor passa pra cento e dez. Até lá, tudo que você agendar fica no valor antigo. Obrigada por todo esse tempo comigo!" Avisar antes mostra respeito e deixa a pessoa se organizar. Dar a janela do preço antigo faz quem ia sair marcar mais uma vez, e quase sempre ela continua depois. E o mais importante: eu não pedi desculpa e não expliquei o porquê. Quando a gente se justifica demais, a pessoa entende que tem espaço pra negociar.',
    fechamentos: {
      comentario: 'Há quanto tempo você não aumenta seu preço? Escreve o tempo aqui embaixo, eu quero que você veja isso escrito.',
      seguir: 'Eu falo sobre cobrar direito sem perder cliente. Se isso é o seu aperto hoje, fica comigo por aqui.'
    }
  },
  {
    id: 'servicos-05',
    nicho: 'servicos',
    titulo: 'Meu antes e depois que mais trouxe cliente',
    capa: 'O antes e depois certo',
    views: 2470000,
    thumb: '',
    roteiroReferencia: 'Ela mostra vários antes e depois do trabalho dela e explica qual formato trouxe cliente de verdade e qual só rendeu curtida.',
    ganchos: [
      'Esse antes e depois me trouxe nove clientes. Os outros não trouxeram nenhum, e eu descobri por quê.',
      'Foto de antes e depois não vende sozinha. Falta uma coisa que quase ninguém põe.',
      'Para de postar só o depois. É o antes que faz a pessoa se ver ali.'
    ],
    corpo: 'O que trouxe cliente foi o vídeo em que eu mostro o antes por mais tempo que o depois. Parece errado, mas é o antes que a pessoa reconhece como o problema dela. Se você só mostra o resultado lindo, ela acha bonito e passa. Se você mostra o problema, ela para porque é o problema dela. E o que faltava nos meus: falar em voz alta o que a cliente sentia. Eu digo "ela chegou dizendo que tinha vergonha disso", e aí quem tem a mesma vergonha se vê na tela. Resultado é o que você entrega. Mas é o problema que faz a pessoa te procurar.',
    fechamentos: {
      comentario: 'Qual é a queixa que você mais escuta das suas clientes? Escreve aqui embaixo que é exatamente disso que você tem que falar no próximo vídeo.',
      seguir: 'Eu mostro o que funcionou de verdade no meu perfil pequeno, com números reais. Me segue que tem bastante.'
    }
  },
  {
    id: 'servicos-06',
    nicho: 'servicos',
    titulo: 'Atendo em casa e a casa é pequena',
    capa: 'Atendo na minha casa',
    views: 1520000,
    thumb: '',
    roteiroReferencia: 'Ela mostra o canto da casa onde atende, que é bem simples, e conta as três coisas que fez pra deixar profissional sem reformar nada.',
    ganchos: [
      'Eu atendo nesse cantinho aqui e minhas clientes acham que é um espaço alugado.',
      'Não precisa de sala, de reforma, nem de placa. Precisa de três coisas e todas são baratas.',
      'Eu tinha vergonha de atender em casa. Hoje é o meu maior barato de custo.'
    ],
    corpo: 'Primeiro: um canto fixo, sempre o mesmo, com uma parede limpa atrás. Não precisa ser bonito, precisa ser organizado e sem nada de família aparecendo. Segundo: luz. Uma lâmpada branca boa custa vinte reais e faz o ambiente parecer outro, tanto pra cliente quanto na foto que você vai tirar. Terceiro: um cheiro e uma toalha limpa. Parece pouco, mas é isso que a pessoa lembra. E combina os horários pra quando a casa estiver mais tranquila, porque o que tira o profissional não é a casa ser pequena, é a bagunça aparecendo no meio do atendimento.',
    fechamentos: {
      comentario: 'Você atende em casa também? Escreve aqui embaixo o que te dá mais insegurança nisso, eu já passei por tudo.',
      seguir: 'Eu mostro como fazer bonito com pouco, porque foi assim que eu comecei. Fica por aqui comigo.'
    }
  },
  {
    id: 'servicos-07',
    nicho: 'servicos',
    titulo: 'A agenda cheia que não dava lucro',
    capa: 'Agenda cheia, sem lucro',
    views: 1790000,
    thumb: '',
    roteiroReferencia: 'Ela mostra a agenda anotada no caderno, cheia, e faz a conta na calculadora na frente da câmera. O número final surpreende.',
    ganchos: [
      'Minha agenda tava lotada e eu não tinha dinheiro no fim do mês. Eu fiz essa conta e entendi.',
      'Trabalhar muito não é ganhar muito, e eu levei dois anos pra aceitar isso.',
      'Tem um serviço no seu cardápio que está te dando prejuízo. Vamos achar ele juntas.'
    ],
    corpo: 'Eu peguei cada serviço que eu ofereço e anotei três coisas: quanto eu cobro, quanto eu gasto de material e quanto tempo leva de verdade, contando a arrumação antes e a limpeza depois. Aí dividi. Tinha serviço meu rendendo dezoito reais a hora e outro rendendo sessenta. E adivinha qual enchia a agenda? O de dezoito, porque era o mais barato e todo mundo pedia. Eu não tirei ele do cardápio, eu só aumentei o preço dele e parei de divulgar. A agenda ficou menos cheia e o fim do mês ficou melhor. Agenda cheia não é o objetivo. É o fim do mês.',
    fechamentos: {
      comentario: 'Faz essa conta com um serviço seu e me fala aqui embaixo quanto deu por hora. Se der menos de vinte, a gente precisa conversar.',
      seguir: 'Eu falo de número, de conta e de lucro, sem enrolação. Se você é autônoma, fica comigo aqui.'
    }
  },
  {
    id: 'servicos-08',
    nicho: 'servicos',
    titulo: 'Eu tinha vergonha de aparecer',
    capa: 'Tinha vergonha de gravar',
    views: 2830000,
    thumb: '',
    roteiroReferencia: 'Ela fala sobre o medo de gravar, mostra o primeiro vídeo que postou, que é bem tímido, e conta o que mudou depois que ela continuou mesmo assim.',
    ganchos: [
      'Esse foi o meu primeiro vídeo. Eu gravei trinta vezes e quase não postei.',
      'Se você tem vergonha de aparecer, eu vou te falar a única coisa que resolveu isso pra mim.',
      'Eu não fiquei confiante e aí comecei a gravar. Eu comecei a gravar e aí fiquei confiante. É nessa ordem.'
    ],
    corpo: 'O que me destravou foi parar de me gravar falando de mim e começar a me gravar fazendo o meu trabalho. Quando a câmera tá na minha mão trabalhando, eu esqueço dela. E eu combinei comigo uma coisa: eu posto o primeiro take. Não o quinto, não o décimo. O primeiro. Porque a décima vez fica sem vida e eu já perdi a vontade. O vídeo tremido e a voz meio insegura fazem a pessoa do outro lado confiar mais, não menos, porque é gente de verdade. Perfeito ninguém acredita. E a vergonha não some, ela só fica menor que a vontade de ter cliente.',
    fechamentos: {
      comentario: 'Se você nunca gravou por vergonha, escreve aqui embaixo o que te trava. Eu quero responder uma por uma, essa parte eu conheço bem.',
      seguir: 'Eu sou tímida e apareço assim mesmo. Se você precisa ver alguém fazendo com medo pra acreditar que dá, fica comigo.'
    }
  }
);
