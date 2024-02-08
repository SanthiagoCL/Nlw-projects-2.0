const perguntas = [
  {
    pergunta: "Qual clube venceu a UEFA Champions League na temporada 2020-2021?",
    respostas: [
      "A. Real Madrid",
      "B. Liverpool",
      "C. Chelsea",
    ],
    correta: 2
  },
  {
    pergunta: "Quem foi o artilheiro da Premier League na temporada 2020-2021?",
    respostas: [
      "A. Mohamed Salah",
      "B. Bruno Fernandes",
      "C. Harry Kane",
    ],
    correta: 2
  },
  {
    pergunta: "Qual país sediou a Eurocopa 2020 (adiada para 2021)?",
    respostas: [
      "A. França",
      "B. Alemanha",
      "C. Itália",
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano a França sediou e venceu a Copa do Mundo da FIFA?",
    respostas: [
      "A. 1998",
      "B. 2002",
      "C. 2006",
    ],
    correta: 0
  },
  {
    pergunta: "Qual jogador venceu o prêmio de Melhor Jogador da FIFA em 2020?",
    respostas: [
      "A. Lionel Messi",
      "B. Cristiano Ronaldo",
      "C. Robert Lewandowski",
    ],
    correta: 0
  },
  {
    pergunta: "Qual equipe conquistou mais títulos da Bundesliga até 2022?",
    respostas: [
      "A. Borussia Dortmund",
      "B. Bayern de Munique",
      "C. Bayer Leverkusen",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o treinador do Manchester City na temporada 2023-2024?",
    respostas: [
      "A. Jurgen Klopp",
      "B. Pep Guardiola",
      "C. Carlo Ancelotti",
    ],
    correta: 1
  },
  {
    pergunta: "Qual jogador português é conhecido como 'O Fenômeno'?",
    respostas: [
      "A. Cristiano Ronaldo",
      "B. Luis Figo",
      "C. Rui Costa",
    ],
    correta: 1
  },
  {
    pergunta: "Em que ano o Barcelona venceu seu primeiro título da UEFA Champions League?",
    respostas: [
      "A. 1992",
      "B. 1996",
      "C. 2000",
    ],
    correta: 0
  },
  {
    pergunta: "Qual clube italiano é popularmente conhecido como 'Velha Senhora'?",
    respostas: [
      "A. AC Milan",
      "B. Inter de Milão",
      "C. Juventus",
    ],
    correta: 2
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