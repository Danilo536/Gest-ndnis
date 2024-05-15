var currentQuestion = -1;
var quizContainer = document.getElementById("quiz-container");
var intro = document.getElementById("intro");
var question = document.getElementById("question");
var leftColumn = document.getElementById("left-column");
var rightColumn = document.getElementById("right-column");
var nextQuestionBtn = document.getElementById("next-question-btn");
var resultContainer = document.getElementById("result-container");
var resultText = document.getElementById("result-text");

var questions = [
  {
    question: "Wann wurde Martin Luther geboren?",
    choices: ["1483", "1501", "1520", "1546"],
    correctAnswer: "1483"
  },
  {
    question: "Wo wurde Martin Luther geboren?",
    choices: ["Leipzig", "Erfurt", "Wittenberg", "Eisleben"],
    correctAnswer: "Eisleben"
  },
  // Weitere Fragen hier einfügen...
];

function displayQuestion() {
  var q = questions[currentQuestion];
  question.textContent = q.question;
  leftColumn.innerHTML = "";
  rightColumn.innerHTML = "";
  for (var i = 0; i < q.choices.length; i++) {
    var choice = q.choices[i];
    var button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice");
    button.addEventListener("click", function(event) {
      selectAnswer(event.target);
    });
    if (i < 2) {
      button.style.marginRight = "10px"; // Für den Abstand nach rechts
      leftColumn.appendChild(button);
    } else {
      button.style.marginLeft = "10px"; // Für den Abstand nach links
      rightColumn.appendChild(button);
    }
  }
  nextQuestionBtn.disabled = true;
}

function displayNextQuestion() {
  currentQuestion++;
  if (currentQuestion === questions.length - 1) {
    nextQuestionBtn.textContent = "Auswertung anzeigen";
    nextQuestionBtn.onclick = function() {
      showResult();
    };
  }
  if (currentQuestion < questions.length) {
    displayQuestion();
  }
}

function selectAnswer(selectedButton) {
  var q = questions[currentQuestion];
  var buttons = document.querySelectorAll(".choice");
  buttons.forEach(function(button) {
    button.classList.remove("selected");
    button.disabled = true; // Deaktivieren aller Buttons nach der Auswahl
  });
  selectedButton.classList.add("selected");
  checkAnswer(selectedButton);
}

function checkAnswer(selectedButton) {
  var q = questions[currentQuestion];
  var buttons = document.querySelectorAll(".choice");
  buttons.forEach(function(button) {
    if (button.textContent === q.correctAnswer) {
      button.style.backgroundColor = "green"; // Markieren der richtigen Antwort grün
    } else if (button.classList.contains("selected")) {
      button.style.backgroundColor = "red"; // Markieren der ausgewählten Antwort rot
    }
  });
  nextQuestionBtn.disabled = false; // Aktivieren des Buttons für die nächste Frage
}

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  var score = calculateScore();
  resultText.textContent = "Deine Anzahl richtiger Antworten: " + score + " von " + questions.length;
}


function calculateScore() {
  var score = 0;
  var selectedButtons = document.querySelectorAll(".choice.selected");
  selectedButtons.forEach(function(selectedButton) {
    var selectedAnswer = selectedButton.textContent;
    var currentQuestionIndex = Array.from(selectedButton.parentNode.children).indexOf(selectedButton);
    var currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score += 1;
    }
  });
  return score;
}


function restartQuiz() {
  window.location.reload();
}

function startQuiz() {
  quizContainer.style.display = "block";
  intro.style.display = "none";
  displayNextQuestion();
}
