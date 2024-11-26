// script.js
const questions = [
  {
    question: "Apa ibukota Indonesia?",
    answers: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
    correct: 0
  },
  {
    question: "Berapa hasil dari 5 + 3?",
    answers: ["5", "8", "10", "15"],
    correct: 1
  },
  {
    question: "Siapa presiden pertama Indonesia?",
    answers: ["Soekarno", "Soeharto", "BJ Habibie", "Jokowi"],
    correct: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const answerButtons = document.querySelectorAll('.answer-btn');

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.dataset.correct = index === currentQuestion.correct;
  });
}

function selectAnswer(selectedIndex) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  if (selectedIndex === correctAnswer) {
    score++;
    alert("Benar!");
  } else {
    alert("Salah! Jawaban yang benar adalah: " + questions[currentQuestionIndex].answers[correctAnswer]);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultContainer = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const questionContainer = document.getElementById('question-container');
  const nextButton = document.getElementById('next-btn');

  questionContainer.style.display = 'none';
  nextButton.style.display = 'none';
  resultContainer.style.display = 'block';

  scoreElement.textContent = `Skor Anda: ${score}/${questions.length}`;
}

// Inisialisasi soal pertama
loadQuestion();
