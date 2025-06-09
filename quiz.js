const perguntas = [
  {
    pergunta: "1 - Se os pinguins governassem o mundo, qual seria a primeira lei que eles criariam?",
    opcoes: ["Proibição de andar de costas", "Toda comida deve ser servida gelada", "Os iglus devem ser construídos com gelo 100% puro", "Todos devem aprender a dançar"],
    correta: 1
  },
  {
    pergunta: "2 - Se um tomate é um legume, o que faz a batata?",
    opcoes: ["Uma batata-astronauta", "Um legume gourmet", "Um vegetal que gosta de se esconder", "Um super-herói de sofá"],
    correta: 0
  },
  {
    pergunta: "3 - Se um cavalo usasse óculos, como ele escolheria a armação?",
    opcoes: ["Óculos de sol com estilo", "Uma armação grande e quadrada", "Óculos redondos, para parecer mais sábio", "Nenhum, ele preferiria usar capacete"],
    correta: 1
  },
  {
    pergunta: "4 - Se os peixes falassem, qual seria o assunto mais popular entre eles no bar?",
    opcoes: ["A última partida de futebol aquático", "Como aprender a voar", "O melhor sushi da cidade", "A temperatura ideal da água"],
    correta: 2
  },
  {
    pergunta: "5 - Como seria um abraço entre dois elefantes usando uma capa de invisibilidade?",
    opcoes: ["Eles ficariam se perguntando onde se tocaram", "Faria um som bem alto, como uma explosão", "Eles iriam tentar se encontrar em outro continente", 
    "Seria bem estranho, eles não se abraçariam"],
    correta: 2
  }
];

let perguntaAtual = 0;
let pontuacao = 0;

function iniciarQuiz() {
  document.getElementById("tela-inicial").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  mostrarPergunta();
}

function mostrarPergunta() {
  let q = perguntas[perguntaAtual];
  document.getElementById("pergunta").innerText = q.pergunta;

  let respostasHTML = "";
  q.opcoes.forEach((opcao, index) => {
    respostasHTML += `
      <div class="resposta">
        <input type="radio" name="resposta" value="${index}" id="opcao${index}">
        <label for="opcao${index}">${opcao}</label>
      </div>
    `;
  });

  document.getElementById("respostas").innerHTML = respostasHTML;
}

function proximaPergunta() {
  let opcoes = document.getElementsByName("resposta");
  let selecionada = -1;

  for (let i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) {
      selecionada = parseInt(opcoes[i].value);
      break;
    }
  }

  if (selecionada === -1) {
    alert("Por favor, selecione uma resposta!");
    return;
  }

  if (selecionada === perguntas[perguntaAtual].correta) {
    pontuacao++;
  }

  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("tela-final").style.display = "block";
  document.getElementById("pontuacao-final").innerText = "Sua Pontuação: " + pontuacao + "/" + perguntas.length;
}

function reiniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  document.getElementById("tela-final").style.display = "none";
  document.getElementById("tela-inicial").style.display = "block";
}
