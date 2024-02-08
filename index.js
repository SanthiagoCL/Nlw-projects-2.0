const perguntas = [
  {
    pergunta: "Qual clube venceu a última edição da UEFA Champions League?",
    resposta: [
      "Real Madrid",
      "Liverpool",
      "Bayern de Munique",
    ],
    correta: 2
  },
  {
    pergunta: "Qual jogador recebeu o prêmio de Melhor Jogador da UEFA em 2021?",
    resposta: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Robert Lewandowski",
    ],
    correta: 0
  },
  {
    pergunta: "Em que país sediará a próxima Copa do Mundo da FIFA em 2022?",
    resposta: [
      "França",
      "Alemanha",
      "Catar",
    ],
    correta: 2
  },
  {
    pergunta: "Qual seleção nacional ganhou a Euro 2020?",
    resposta: [
      "Itália",
      "Inglaterra",
      "Espanha",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o atual artilheiro da Premier League?",
    resposta: [
      "Mohamed Salah",
      "Harry Kane",
      "Bruno Fernandes",
    ],
    correta: 0
  },
  {
    pergunta: "Qual clube venceu a última edição da La Liga espanhola?",
    resposta: [
      "Barcelona",
      "Real Madrid",
      "Atlético de Madrid",
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano a França sediou e venceu a Copa do Mundo da FIFA?",
    resposta: [
      "1998",
      "2002",
      "2010",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o artilheiro da UEFA Champions League na temporada 2020-2021?",
    resposta: [
      "Erling Haaland",
      "Kylian Mbappé",
      "Robert Lewandowski",
    ],
    correta: 2
  },
  {
    pergunta: "Qual país é conhecido por sua 'Série A' no futebol?",
    resposta: [
      "Espanha",
      "Itália",
      "Alemanha",
    ],
    correta: 1
  },
  {
    pergunta: "Qual jogador português é frequentemente comparado a Cristiano Ronaldo?",
    resposta: [
      "Bruno Fernandes",
      "João Cancelo",
      "Diogo Jota",
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
  
