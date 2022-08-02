const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which one of the following river flows between Vindhyan and Satpura ranges?',
    answers: [
      { text: 'Narmada', correct: true },
      { text: 'Mahanadi', correct: false },
      { text: 'Son', correct: true },
      { text: 'Netravati', correct: false }
      
    ]
  },
  {
    question: 'The Central Rice Research Station is situated in?',
    answers: [
      { text: 'Chennai', correct: false },
      { text: 'Cuttack', correct: true },
      { text: 'Dev Ed', correct: false},
      { text: 'Quilon', correct: false}
    ]
  },
  {
    question: 'Who among the following wrote Sanskrit grammar',
    answers: [
      { text: 'Kalidasa', correct: false },
      { text: 'Charak', correct: false },
      { text: 'Panini', correct: true},
      { text: 'Aryabhatt', correct: false }
    ]
  },
  {
    question: ' Which among the following headstreams meets the Ganges in last?',
    answers: [
      { text: 'Alaknanda', correct: false },
      { text: 'Pindar', correct: false },
      { text: 'Mandakini', correct: false },
      { text: 'Bhagirathi', correct: true }
    ]
  },
  {
    question: 'The metal whose salts are sensitive to light is?',
    answers: [
      { text: 'Zinc', correct: false },
      { text: 'Silver', correct: true },
      { text: 'Copper', correct: false },
      { text: 'Aluminum', correct: false }
    ]
  },
  {
    question: 'Patanjali is well known for the compilation of –',
    answers: [
      { text: 'Yogya Sutra', correct: true },
      { text: 'Panchatantra', correct: false },
      { text: 'Brahma Sutra', correct: false },
      { text: 'Ayuraveda', correct: false }
    ]
  },
  {
    question: 'River Luni originates near Pushkar and drains into which one of the following',
    answers: [
      { text: 'Rann of Kachchh', correct: false },
      { text: 'Arabian sea', correct: false },
      { text: 'Gulf of Cambay', correct: false },
      { text: 'Lake Sambhar', correct: true }
    ]
  },
  {
    question: 'Which one of the following rivers originates in Brahmagiri range of Western Ghats?',
    answers: [
      { text: 'Pennar', correct: false },
      { text: 'Cauvery', correct: true },
      { text: 'Krishna', correct: false },
      { text: 'Tapti', correct: false }
    ]
  },
  {
    question: 'The country that has the highest in Barley Production?',
    answers: [
      { text: 'China', correct: false },
      { text: 'India', correct: false },
      { text: 'Russia', correct: true },
      { text: 'France', correct: false }
    ]
  },
  {
    question: 'Tsunamis are not caused by',
    answers: [
      { text: 'Hurricanes', correct: true },
      { text: 'Earthquake', correct: false },
      { text: 'Undersea landslides', correct: false },
      { text: 'Volcanic eruption', correct: false}
    ]
  },
  
]