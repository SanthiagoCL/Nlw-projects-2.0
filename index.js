const perguntas = [
  {
    pergunta: "Em que ano o Sport Club Corinthians Paulista foi fundado?",
    respostas: [
      "A. 1908",
      "B. 1910",
      "C. 1912",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual estádio é a casa do Corinthians?",
    respostas: [
      "A. Estádio do Pacaembu",
      "B. Arena Corinthians",
      "C. Morumbi",
    ],
    correta: 1,
  },
  {
    pergunta: "Quem é o maior artilheiro da história do Corinthians?",
    respostas: [
      "A. Marcelinho Carioca",
      "B. Ronaldo Fenômeno",
      "C. Cláudio",
    ],
    correta: 2,
  },
  {
    pergunta: "Quantos títulos brasileiros de primeira divisão o Corinthians possui até 2022?",
    respostas: [
      "A. 5",
      "B. 7",
      "C. 9",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual foi o ano da conquista da Copa Libertadores da América pelo Corinthians?",
    respostas: [
      "A. 2010",
      "B. 2012",
      "C. 2014",
    ],
    correta: 1,
  },
  {
    pergunta: "Quem é conhecido como 'Doutor' e é ídolo do Corinthians?",
    respostas: [
      "A. Sócrates",
      "B. Rivelino",
      "C. Neto",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual técnico comandou o Corinthians na conquista da FIFA Club World Cup em 2000?",
    respostas: [
      "A. Tite",
      "B. Oswaldo de Oliveira",
      "C. Vanderlei Luxemburgo",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual jogador foi o autor do gol histórico conhecido como 'Gol do Título' em 1977?",
    respostas: [
      "A. Basílio",
      "B. Rivelino",
      "C. Zé Maria",
    ],
    correta: 0,
  },
  {
    pergunta: "Em qual ano o Corinthians conquistou a Copa do Brasil pela primeira vez?",
    respostas: [
      "A. 1989",
      "B. 1991",
      "C. 1995",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual jogador é conhecido como 'Sheik' e teve papel fundamental na Libertadores e no Mundial de 2012?",
    respostas: [
      "A. Emerson Sheik",
      "B. Jorge Henrique",
      "C. Danilo",
    ],
    correta: 0,
  },
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const correta = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = correta.size + ' de ' + totalDePerguntas


// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      correta.delete(item)
      if(estaCorreta){ 
        correta.add(item)
  
     }
     mostrarTotal.textContent = correta.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)


  }

  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}