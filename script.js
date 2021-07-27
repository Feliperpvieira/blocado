//Código das cores:
var vermelho = "#BC2020";
var azul = "#237BB7";
var roxo = "#6C22BA";
var laranja = "#FF8E06";
var verde = "#22BA4D";
var amarelo = "#F9F930";
var rosa = "#FF6699";
var aqua = "#03BB85";
var gelo = "#9ED8F0";
var limao = "#BFFF00";

/*-----------------------------------------------*/
//Código tabuleiro - Felipe
var canvas = document.getElementById("canvas-tabuleiro");
var contexto = canvas.getContext("2d");

//Meta 1-1 \/
var tabuleiro = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""]
]

var comprimento = 40, altura = 40;
var totalDeLinhas = tabuleiro.length, totalDeColunas = tabuleiro[0].length;

function DesenharTabuleiro() {
  for (var i = 0; i < totalDeLinhas; i = i + 1) {
    for (var j = 0; j < totalDeColunas; j = j + 1) {
      var pedacosDoTabuleiro = tabuleiro[i][j];
      var coluna = j * comprimento, linha = i * altura;

      //Determina as cores de cada quadrado preenchido
      if (pedacosDoTabuleiro == vermelho) {
        contexto.fillStyle = vermelho;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == azul) {
        contexto.fillStyle = azul;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == roxo) {
        contexto.fillStyle = roxo;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == laranja) {
        contexto.fillStyle = laranja;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == verde) {
        contexto.fillStyle = verde;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == amarelo) {
        contexto.fillStyle = amarelo;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == rosa) {
        contexto.fillStyle = rosa;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == aqua) {
        contexto.fillStyle = aqua;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == gelo) {
        contexto.fillStyle = gelo;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }
      else if (pedacosDoTabuleiro == limao) {
        contexto.fillStyle = limao;
        contexto.fillRect(coluna, linha, comprimento, altura);
      }

      //Desenha o quadriculado no tabuleiro completo
      contexto.strokeStyle = "grey";
      contexto.lineWidth = 0.8;
      contexto.strokeRect(coluna, linha, comprimento, altura);

    }
  }
}
DesenharTabuleiro();

//Meta 1-2 \/ 
var linhasPreenchidas = []
var colunasPreenchidas = []
var verificar = document.getElementById("verifica");

function VerificarBlocos() {
  // Detecta linhas preenchidas
  var contagem = 0;
  for (var l = 0; l < totalDeLinhas; l = l + 1) {
    for (var c = 0; c < totalDeColunas; c = c + 1) {
      if (tabuleiro[l][c] != "") {
        contagem = contagem + 1;
      }
    }
    //console.log("linha " + l + " | ocupados: " + contagem); //Conferencia

    if (contagem == 10) {
      //console.log("Linha está toda cheia!");
      linhasPreenchidas.push(l);
      AdicionaPontos(30);
    }
    contagem = 0;
  }


  // Detecta colunas preenchidas
  contagem = 0;
  for (var l = 0; l < totalDeLinhas; l = l + 1) {
    for (var c = 0; c < totalDeColunas; c = c + 1) {
      if (tabuleiro[c][l] != "") {
        contagem = contagem + 1;
      }
    }
    //console.log("coluna " + c + " | ocupados: " + contagem); //Conferencia

    if (contagem == 10) {
      //console.log("Coluna está toda cheia!");
      colunasPreenchidas.push(l);
      AdicionaPontos(30);
    }
    contagem = 0;
  }
}
// verificar.onclick = VerificarBlocos;

var tamanho = 0;

function ApagarBlocos() {
  if (linhasPreenchidas.length != 0 || colunasPreenchidas.length != 0) {
    tamanho = tamanho + 2;
  }
  if (tamanho == 42) {
    tamanho = 0;
    linhasPreenchidas = [];
    colunasPreenchidas = [];
    SalvarJogo();
  }
  for (var l = 0; l < linhasPreenchidas.length; l++) {
    for (var c = 0; c < totalDeColunas; c++) {
      var linha = (linhasPreenchidas[l] * altura) + 20, coluna = (c * comprimento) + 20;

      contexto.fillStyle = 'white';
      contexto.fillRect(coluna - tamanho / 2, linha - tamanho / 2, tamanho, tamanho);
      tabuleiro[linhasPreenchidas[l]][c] = "";
    }
  }

  for (var l = 0; l < colunasPreenchidas.length; l++) {
    for (var c = 0; c < totalDeLinhas; c++) {
      var linha = (c * altura) + 20, coluna = (colunasPreenchidas[l] * comprimento) + 20;

      contexto.fillStyle = 'white';
      contexto.fillRect(coluna - tamanho / 2, linha - tamanho / 2, tamanho, tamanho);
      tabuleiro[c][colunasPreenchidas[l]] = "";
    }
  }
  if (tamanho == 40) {
    contexto.clearRect(0, 0, 400, 400);
    DesenharTabuleiro();
  }
}
var timer = setInterval(ApagarBlocos, 10);

/*-----------------------------------------------*/
//Código seleção das peças - Gabriel

var canvas1 = document.getElementById("canvas1");
var contexto1 = canvas1.getContext("2d");
var canvas2 = document.getElementById("canvas2");
var contexto2 = canvas2.getContext("2d");
var canvas3 = document.getElementById("canvas3");
var contexto3 = canvas3.getContext("2d");
var paragrafoPlacar = document.getElementById("placar");

var paragrafoRecorde = document.getElementById("recorde");

function SortearNumeroEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function BlocoGenerico(contextoEscolhido, peca, colunaMouse, linhaMouse) {
  for (var i = 0; i < peca.colunas.length; i++) {
    contextoEscolhido.fillStyle = peca.cor;
    contextoEscolhido.fillRect(peca.colunas[i] * 40 + colunaMouse * 40, peca.linhas[i] * 40 + linhaMouse * 40, 40, 40);
    contextoEscolhido.strokeStyle = "white";
    contextoEscolhido.strokeRect(peca.colunas[i] * 40 + colunaMouse * 40, peca.linhas[i] * 40 + linhaMouse * 40, 40, 40);
  }
}

function BlocoO(contextoEscolhido, giro, coluna, linha) {
  var peca = { cor: vermelho, colunas: [0, 1, 1, 0], linhas: [0, 0, 1, 1] };
  BlocoGenerico(contextoEscolhido, peca, coluna, linha);
  return peca;
};

function BlocoI(contextoEscolhido, giro, coluna, linha) {
  if (giro == 1 | giro == 3) {
    var peca = { cor: azul, colunas: [0, 0, 0, 0], linhas: [0, 1, 2, 3] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  }
  if (giro == 2 | giro == 4) {
    var peca = { cor: azul, colunas: [0, 1, 2, 3], linhas: [0, 0, 0, 0] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  }
};

function BlocoJ(contextoEscolhido, giro, coluna, linha) {
  if (giro == 1) {
    var peca = { cor: roxo, colunas: [1, 1, 1, 0], linhas: [0, 1, 2, 2] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 2) {
    var peca = { cor: roxo, colunas: [0, 0, 1, 2], linhas: [0, 1, 1, 1] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 3) {
    var peca = { cor: roxo, colunas: [0, 1, 0, 0], linhas: [0, 0, 1, 2] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 4) {
    var peca = { cor: roxo, colunas: [0, 1, 2, 2], linhas: [0, 0, 0, 1] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
}

function BlocoL(contextoEscolhido, giro, coluna, linha) {
  if (giro == 1) {
    var peca = { cor: laranja, colunas: [0, 0, 0, 1], linhas: [0, 1, 2, 2] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 2) {
    var peca = { cor: laranja, colunas: [0, 0, 1, 2], linhas: [0, 1, 0, 0] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 3) {
    var peca = { cor: laranja, colunas: [0, 1, 1, 1], linhas: [0, 0, 1, 2] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 4) {
    var peca = { cor: laranja, colunas: [0, 1, 2, 2], linhas: [1, 1, 1, 0] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
}

function BlocoS(contextoEscolhido, giro, coluna, linha) {
  if (giro == 1) {
    var peca = { cor: verde, colunas: [0, 1, 1], linhas: [0, 0, 1,] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 2) {
    var peca = { cor: verde, colunas: [1, 1, 0], linhas: [0, 1, 1] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 3) {
    var peca = { cor: verde, colunas: [0, 0, 1], linhas: [0, 1, 1] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 4) {
    var peca = { cor: verde, colunas: [0, 1, 0], linhas: [0, 0, 1] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
}

function BlocoZ(contextoEscolhido, giro, coluna, linha) {
  var peca = { cor: amarelo, colunas: [0], linhas: [0] };
  BlocoGenerico(contextoEscolhido, peca, coluna, linha);
  return peca;
}

function BlocoW(contextoEscolhido, giro, coluna, linha) {
  if (giro == 1 | giro == 3) {
    var peca = { cor: rosa, colunas: [0, 1], linhas: [0, 0] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 2 | giro == 4) {
    var peca = { cor: rosa, colunas: [0, 0], linhas: [0, 1] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  }
}

function BlocoX(contextoEscolhido, giro, coluna, linha) {
  var peca = { cor: aqua, colunas: [0, 1, 2, 0, 1, 2, 0, 1, 2], linhas: [0, 0, 0, 1, 1, 1, 2, 2, 2] };
  BlocoGenerico(contextoEscolhido, peca, coluna, linha);
  return peca;
}

function BlocoY(contextoEscolhido, giro, coluna, linha) {
  if (giro == 1) {
    var peca = { cor: gelo, colunas: [0, 0, 0, 1, 2], linhas: [0, 1, 2, 2, 2,] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 2) {
    var peca = { cor: gelo, colunas: [0, 1, 2, 2, 2], linhas: [2, 2, 2, 1, 0] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 3) {
    var peca = { cor: gelo, colunas: [0, 1, 2, 2, 2], linhas: [0, 0, 0, 1, 2] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
  if (giro == 4) {
    var peca = { cor: gelo, colunas: [0, 1, 2, 0, 0], linhas: [0, 0, 0, 1, 2] };
    BlocoGenerico(contextoEscolhido, peca, coluna, linha);
    return peca;
  };
}
function BlocoU(contextoEscolhido, giro, coluna, linha) {
  var peca = { cor: limao, colunas: [1, 0, 1, 2, 1], linhas: [0, 1, 1, 1, 2] };
  BlocoGenerico(contextoEscolhido, peca, coluna, linha);
  return peca;
}

var contextos = [contexto1, contexto2, contexto3];
var tiposEGiros = [{}, {}, {}]; //Array para receber os {} com tipo e giro de cada bloco sorteado

//coluna = x, linha = y
function DefineBloco(contextoEscolhido, bloco, giro, coluna, linha) {
  //Define o bloco a partir do sorteio
  if (bloco == 1) {
    return BlocoO(contextoEscolhido, giro, coluna, linha);
  }

  if (bloco == 2) {
    return BlocoI(contextoEscolhido, giro, coluna, linha);
  }

  if (bloco == 3) {
    return BlocoJ(contextoEscolhido, giro, coluna, linha);
  }

  if (bloco == 4) {
    return BlocoL(contextoEscolhido, giro, coluna, linha);
  }

  if (bloco == 5) {
    return BlocoS(contextoEscolhido, giro, coluna, linha);
  }

  if (bloco == 6) {
    return BlocoZ(contextoEscolhido, giro, coluna, linha);
  }

  if (bloco == 7) {
    return BlocoW(contextoEscolhido, giro, coluna, linha);
  }
  if (bloco == 8) {
    return BlocoX(contextoEscolhido, giro, coluna, linha);
  }
  if (bloco == 9) {
    return BlocoY(contextoEscolhido, giro, coluna, linha);
  }
  if (bloco == 10) {
    return BlocoU(contextoEscolhido, giro, coluna, linha);
  }
}

function DefineESalvaBloco(contextoEscolhido, bloco, giro, coluna, linha, indice) {
  var dadosBloco = DefineBloco(contextoEscolhido, bloco, giro, coluna, linha);

  //Salva os dados do bloco sorteados em uma variável
  var infoDoBloco = {}
  infoDoBloco.cor = dadosBloco.cor;
  infoDoBloco.colunas = dadosBloco.colunas;
  infoDoBloco.linhas = dadosBloco.linhas;
  infoDoBloco.tipo = bloco;
  infoDoBloco.giro = giro;
  //var infoPeca = 
  tiposEGiros[indice] = infoDoBloco;
  //console.log(tiposEGiros);
}

//Funções para mudar a cor do canvas selecionado
var canvasClicado = null;

function CliqueCanvas1() {
  canvas1.style.border = "5px solid red";
  canvas2.style.border = "5px solid black";
  canvas3.style.border = "5px solid black";
  canvasClicado = 0;
}
canvas1.onclick = CliqueCanvas1;

function CliqueCanvas2() {
  canvas1.style.border = "5px solid black";
  canvas2.style.border = "5px solid red";
  canvas3.style.border = "5px solid black";
  canvasClicado = 1;
}
canvas2.onclick = CliqueCanvas2;

function CliqueCanvas3() {
  canvas1.style.border = "5px solid black";
  canvas2.style.border = "5px solid black";
  canvas3.style.border = "5px solid red";
  canvasClicado = 2;
}
canvas3.onclick = CliqueCanvas3;

//Faz a movimentação da peça selecionada pelo canvas principal
function MovimentoMouseTabuleiro(eventoDoMouse) {
  contexto.clearRect(0, 0, 400, 400); //Limpa o canvas
  DesenharTabuleiro(); //Desenha o tabuleiro de novo

  var x = eventoDoMouse.pageX - canvas.offsetLeft;
  var y = eventoDoMouse.pageY - canvas.offsetTop;
  var colunaMouse = Math.floor(x / 40); //Calculo pra definir linha e coluna do mouse
  var linhaMouse = Math.floor(y / 40);

  //o if impede que o jogo tente desenhar um bloco no tabuleiro sem nenhum canvas selecionado, gerando infinitas linhas de erro
  if (canvasClicado != null) {
    //Chama o bloco definido no array tiposEGiros na posição [] canvasClicado
    DefineBloco(contexto, tiposEGiros[canvasClicado].tipo, tiposEGiros[canvasClicado].giro, colunaMouse, linhaMouse);
  }

}
canvas.onmousemove = MovimentoMouseTabuleiro;

//Limpa o tabuleiro quando o mouse sai do canvas, tirando a peça não colocada
function MouseSaiuDoCanvas() {
  contexto.clearRect(0, 0, 400, 400);
  DesenharTabuleiro();
}
canvas.onmouseout = MouseSaiuDoCanvas;

var contagemCliques = 0; //Faz com que só sorteie peças quando gastar as 3

function CliqueMouseTabuleiro(eventoDoMouse) {
  var x = eventoDoMouse.pageX - canvas.offsetLeft;
  var y = eventoDoMouse.pageY - canvas.offsetTop;
  var colunaMouse = Math.floor(x / 40);
  var linhaMouse = Math.floor(y / 40);

  var cor = tiposEGiros[canvasClicado].cor;
  var colunas = tiposEGiros[canvasClicado].colunas;
  var linhas = tiposEGiros[canvasClicado].linhas;

  for (var i = 0; i < colunas.length; i++) {
    var somaColunas = colunas[i] + colunaMouse;
    var somaLinhas = linhas[i] + linhaMouse;
    if (tabuleiro[somaLinhas][somaColunas] != "") {
      return;  //Cancela a operação e não posiciona a peça caso algum quadrado já esteja ocupado
    }
  }

  for (var i = 0; i < colunas.length; i++) {
    var somaColunas = colunas[i] + colunaMouse;
    var somaLinhas = linhas[i] + linhaMouse;
    //Posiciona a peça no tabuleiro
    tabuleiro[somaLinhas][somaColunas] = cor;
  }

  AdicionaPontos(colunas.length); //Adiciona em pontos a quantidade de peças posicionada no tabuleiro
  //contextos[canvasClicado].clearRect(0, 0, 160, 160); //Limpa o canvas da peça gasta
  //tiposEGiros[canvasClicado] = ""; //Limpa os dados da peça
  SorteiaPeca(canvasClicado);
  canvasClicado = null; //Desseleciona o canvas
  //contagemCliques = contagemCliques + 1;


  /*if (contagemCliques == 3){
    for (var i = 0; i < contextos.length; i++) {
      SorteiaPeca(i);
    }
    contagemCliques = 0;
   } //Resorteia as peças */

  //Recolore todos as borders dos canvas de preto
  canvas1.style.border = "5px solid black";
  canvas2.style.border = "5px solid black";
  canvas3.style.border = "5px solid black";

  VerificarBlocos(); //Verifica se pode limpar uma linha
  VerificarGameOver();
  SalvarJogo();
}
canvas.onclick = CliqueMouseTabuleiro;

function SorteiaPeca(numeroContexto) {
  contextos[numeroContexto].clearRect(0, 0, 160, 160);

  var bloco = SortearNumeroEntre(1, 10);
  var giro = SortearNumeroEntre(1, 4);
  var contextoEscolhido = contextos[numeroContexto];
  DefineESalvaBloco(contextoEscolhido, bloco, giro, 0, 0, numeroContexto);
  SalvarJogo();
}

//Pega o recorde salvo no navegador e coloca o valor dele como recorde atual (se não existir o valor é 0)
var pontuacaoRecorde = Number(localStorage.getItem("recordeSalvo"));
paragrafoRecorde.innerText = "Recorde: " + pontuacaoRecorde;

function AdicionaPontos(quantidadePontos) {
  contagemPontos = contagemPontos + quantidadePontos;

  paragrafoPlacar.innerText = "Pontuação: " + contagemPontos;

  if (contagemPontos > pontuacaoRecorde) {
    pontuacaoRecorde = contagemPontos;
    localStorage.setItem("recordeSalvo", pontuacaoRecorde)
  }
  paragrafoRecorde.innerText = "Recorde: " + pontuacaoRecorde;
}

function PodeColocarPeca(objeto, linhaInicial, colunaInicial) {
  var colunas = objeto.colunas;
  var linhas = objeto.linhas;

  for (var i = 0; i < colunas.length; i++) {
    var somaColunas = colunas[i] + colunaInicial;
    var somaLinhas = linhas[i] + linhaInicial;
    if (somaLinhas < 0 || somaColunas < 0 || somaLinhas >= totalDeLinhas || somaColunas >= totalDeColunas || tabuleiro[somaLinhas][somaColunas] != "") {
      return false;
    }
  }
  return true;
}

function TemEspacoParaPeca(objeto) {

  for (var l = 0; l < totalDeLinhas; l = l + 1) {
    for (var c = 0; c < totalDeColunas; c = c + 1) {
      var colocaPeca = PodeColocarPeca(objeto, l, c);

      if (colocaPeca == true) {
        return true;
      }
    }
  }
  return false;
}

function VerificarGameOver() {

  console.log("peça 0");
  var gameOver0 = TemEspacoParaPeca(tiposEGiros[0]);
  console.log("peça 1");
  var gameOver1 = TemEspacoParaPeca(tiposEGiros[1]);
  console.log("peça 2");
  var gameOver2 = TemEspacoParaPeca(tiposEGiros[2]);

  console.log(gameOver0, gameOver1, gameOver2);
  if (gameOver0 == false && gameOver1 == false && gameOver2 == false) {
    GameOver();
  }
}

/*-----------------------------------------------*/
// Interações do Menu

var menu = document.getElementById("menu");
var jogo = document.getElementById("jogo");
var comoJogar = document.getElementById("comoJogar");
var vocePerdeu = document.getElementById("fimDeJogo");

var jogar = document.getElementById("jogar");
var inst = document.getElementById("inst");
var voltar = document.getElementById("voltar");
var voltaMenu = document.getElementById("voltaMenu");

var contagemPontos = 0; //Conta os pontos na partida

function MostraInst() {
  menu.style.display = "none";
  comoJogar.style.display = "block";
}
inst.onclick = MostraInst;

//Limpa e Desenha tabuleiro
function Play() {
  menu.style.display = "none";
  jogo.style.display = "block";
  canvas1.style.display = "block";
  canvas2.style.display = "block";
  canvas3.style.display = "block";

  vocePerdeu.style.display = "none";

  contagemCliques = 0;
  contagemPontos = 0;
  AdicionaPontos(0); //Reseta paragrafo com contador de pontos no inicio de uma partida

  for (var l = 0; l < totalDeLinhas; l = l + 1) {
    for (var c = 0; c < totalDeColunas; c = c + 1) {
      if (tabuleiro[l][c] != "") {
        tabuleiro[l][c] = "";
      }
      contexto.clearRect(0, 0, 400, 400);
      DesenharTabuleiro();
    }
  }

  // Sorteia e Desenha novos blocos
  for (var i = 0; i < contextos.length; i++) {
    SorteiaPeca(i);
  }
}
jogar.onclick = Play;

function Voltar() {
  comoJogar.style.display = "none";
  menu.style.display = "block";
}
voltar.onclick = Voltar;

function MenuInicial() {
  jogo.style.display = "none";
  menu.style.display = "block";
}
voltaMenu.onclick = MenuInicial;

function GameOver() {
  canvas1.style.display = "none";
  canvas2.style.display = "none";
  canvas3.style.display = "none";
  vocePerdeu.style.display = "block";
}


//Salvar Jogo

var tabuleiroSalvo;
var blocosSalvos;

function SalvarJogo() {
  tabuleiroSalvo = JSON.stringify(tabuleiro);
  localStorage.setItem("tabuleiro", tabuleiroSalvo);

  blocosSalvos = JSON.stringify(tiposEGiros);
  localStorage.setItem("tiposEGiros", blocosSalvos);
  //console.log("o jogo foi salvo");

  localStorage.setItem("pontosSalvos", contagemPontos);

};

  var continuar = document.getElementById("continuar");
  var tabuleiroCarregado = localStorage.getItem("tabuleiro");
  var blocosCarregados = localStorage.getItem("tiposEGiros");
  var pontosSalvos = Number(localStorage.getItem("pontosSalvos"));

if (tabuleiroCarregado == null) {
  continuar.style.display = "none";
} else {
  continuar.style.display = "block";
}

function CarregarJogo() {
  tabuleiro = JSON.parse(tabuleiroCarregado);
  tiposEGiros = JSON.parse(blocosCarregados);
  contagemPontos = pontosSalvos;
  paragrafoPlacar.innerText = "Pontuação: " + contagemPontos;

  menu.style.display = "none";
  jogo.style.display = "block";
  canvas1.style.display = "block";
  canvas2.style.display = "block";
  canvas3.style.display = "block";
  vocePerdeu.style.display = "none";
  contagemCliques = 0;

  ApagarBlocos();
  DesenharTabuleiro();


  for (var i = 0; i < contextos.length; i++) {
    var contextoEscolhido = contextos[i];
    var bloco = tiposEGiros[i].tipo;
    var giro = tiposEGiros[i].giro;

    DefineESalvaBloco(contextoEscolhido, bloco, giro, 0, 0, i);
  }

}
continuar.onclick = CarregarJogo;
