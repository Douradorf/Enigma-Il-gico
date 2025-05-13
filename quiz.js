const perguntas = [
  {
    pergunta: "Se os pinguins governassem o mundo, qual seria a primeira lei que eles criariam?",
    opcoes: ["Proibição de andar de costas", "Toda comida deve ser servida gelada", "Os iglus devem ser construídos com gelo 100% puro", "Todos devem aprender a dançar"],
    correta: 1
  },
  {
    pergunta: "Se um tomate é um legume, o que faz a batata?",
    opcoes: ["Uma batata-astronauta", "Um legume gourmet", "Um vegetal que gosta de se esconder", "Um super-herói de sofá"],
    correta: 0
  },
  {
    pergunta: "Se um cavalo usasse óculos, como ele escolheria a armação?",
    opcoes: ["Óculos de sol com estilo", "Uma armação grande e quadrada", "Óculos redondos, para parecer mais sábio", "Nenhum, ele preferiria usar capacete"],
    correta: 1
  },
  {
    pergunta: "Se os peixes falassem, qual seria o assunto mais popular entre eles no bar?",
    opcoes: ["A última partida de futebol aquático", "Como aprender a voar", "O melhor sushi da cidade", "A temperatura ideal da água"],
    correta: 2
  },
  {
    pergunta: "Como seria um abraço entre dois elefantes usando uma capa de invisibilidade?",
    opcoes: ["Eles ficariam se perguntando onde se tocaram", "Faria um som bem alto, como uma explosão", "Eles iriam tentar se encontrar em outro continente", 
    "Seria bem estranho, eles não se abraçariam"],
    correta: 2
  },
  {
    pergunta: "Se as nuvens pudessem escolher o sabor de um sorvete, qual seria o sabor preferido delas?",
    opcoes: ["Algodão doce", "Chocolate com nuvem de caramelo", "Sorvete de ar", "Sorvete de chuva de morango"],
    correta: 0
  },
  {
    pergunta: "Se o sol fosse uma celebridade, qual seria o nome do seu reality show?",
    opcoes: ["Brilhando no Pico", "Aquecendo o Planeta", "De Sol a Sol", "Iluminando a Vida"],
    correta: 3
  },
  {
    pergunta: "Por que os carros nunca ficam com vergonha de dar partida em frente a todo mundo?",
    opcoes: ["Eles têm um motor muito barulhento", "Eles estão sempre prontos para uma aventura", "Eles acham que todo mundo está interessado", "Eles têm medo de se desligar"],
    correta: 1
  },
  {
    pergunta: "Se você fosse um unicórnio, qual seria a sua senha para o Wi-Fi do castelo encantado?",
    opcoes: ["Unicórnio123", "CoresdoArcoiris#", "MagiaEterna", "ORelampagoUnicornio"],
    correta: 2
  },
  {
    pergunta: "Se os dinossauros tivessem redes sociais, qual seria o nome do perfil do T-Rex?",
    opcoes: ["@ReiDoJurassicPark", "@TyranoMestre", "@GiganteVerde", "@T-RexEmFuga"],
    correta: 0
  },
  {
    pergunta: "O que faria um abacaxi se ele fosse eleito prefeito da cidade das frutas?",
    opcoes: ["Proibir as maçãs de fazerem suco", "Implantar o sistema de semáforos para os morangos", "Colocar a cidade toda em um coquetel tropical", "Determinar que todas as frutas devem usar chapéus"],
    correta: 2
  },
  {
    pergunta: "Como seria um dia normal na vida de um extraterrestre que adora comida japonesa?",
    opcoes: ["Ele passaria o dia experimentando sushi intergaláctico", "Faria uma festa de sushi na lua", "Passaria no mercado da galáxia procurando wasabi", "Criaria um restaurante de ramen no planeta Terra"],
    correta: 0
  },
  {
    pergunta: "Se o Wi-Fi tivesse sentimentos, o que ele diria quando você estivesse em uma reunião importante?",
    opcoes: ["Estou desconectando porque você não me valoriza", "Precisamos conversar depois dessa reunião", "Vou cair porque você não me deu atenção", "Parece que estamos em uma conexão de longa distância"],
    correta: 2
  },
  {
    pergunta: "O que você acha que passaria pela cabeça de um gato se ele começasse a ter um podcast?",
    opcoes: ["Hoje vamos falar sobre como dominar o mundo", "O que os cachorros estão planejando?", "Como fazer os humanos acreditarem que eles são os verdadeiros chefes", "Por que eu sou tão bonito?"],
    correta: 0
  },
  {
    pergunta: "Se os sapos usassem smartphones, qual aplicativo eles mais usariam?",
    opcoes: ["SapoSnap (para compartilhar fotos de pulos)", "Frogbook (para encontrar outros sapos)", "CroakChat (para bater papo com outros sapos)", "LeapIn (para marcar encontros de saltos)"],
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
