const perguntasFutebolEuropeu = [
  {
    pergunta: "Qual clube venceu a Liga dos Campeões da UEFA na temporada 2020-2021?",
    resposta: [
      "Real Madrid",
      "Chelsea",
      "Bayern de Munique",
    ],
    correta: 1, // Resposta correta: Chelsea
  },
  {
    pergunta: "Em qual país foi sediada a Eurocopa 2020?",
    resposta: [
      "Itália",
      "Alemanha",
      "Inglaterra",
    ],
    correta: 0, // Resposta correta: Itália
  },
  {
    pergunta: "Quem foi o artilheiro da última temporada da La Liga (2021-2022)?",
    resposta: [
      "Lionel Messi",
      "Karim Benzema",
      "Cristiano Ronaldo",
    ],
    correta: 1, // Resposta correta: Karim Benzema
  },
  {
    pergunta: "Qual país sediará a Copa do Mundo da FIFA em 2022?",
    resposta: [
      "Brasil",
      "Rússia",
      "Catar",
    ],
    correta: 2, // Resposta correta: Catar
  },
  {
    pergunta: "Quantas vezes o Liverpool ganhou a Liga dos Campeões da UEFA até agora?",
    resposta: [
      "4",
      "5",
      "6",
    ],
    correta: 2, // Resposta correta: 6
  },
  {
    pergunta: "Quem é o atual campeão da Premier League (2021-2022)?",
    resposta: [
      "Manchester City",
      "Manchester United",
      "Liverpool",
    ],
    correta: 0, // Resposta correta: Manchester City
  },
  {
    pergunta: "Qual jogador recebeu a Chuteira de Ouro na temporada 2020-2021?",
    resposta: [
      "Robert Lewandowski",
      "Lionel Messi",
      "Cristiano Ronaldo",
    ],
    correta: 0, // Resposta correta: Robert Lewandowski
  },
  {
    pergunta: "Quem é conhecido como 'Faraó' e joga como atacante no Liverpool?",
    resposta: [
      "Mohamed Salah",
      "Sadio Mané",
      "Roberto Firmino",
    ],
    correta: 0, // Resposta correta: Mohamed Salah
  },
  {
    pergunta: "Em qual estádio foi disputada a final da Eurocopa 2016?",
    resposta: [
      "Wembley",
      "Stade de France",
      "Allianz Arena",
    ],
    correta: 1, // Resposta correta: Stade de France
  },
  {
    pergunta: "Quantos títulos da Liga dos Campeões o Barcelona conquistou até agora?",
    resposta: [
      "4",
      "5",
      "6",
    ],
    correta: 1, // Resposta correta: 5
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
  
