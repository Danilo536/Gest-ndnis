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
  }
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
      button.style.marginRight = "10px";
      leftColumn.appendChild(button);
    } else {
      button.style.marginLeft = "10px";
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
  } else {
    nextQuestionBtn.textContent = "Nächste Frage";
    nextQuestionBtn.onclick = function() {
      displayNextQuestion();
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
    button.disabled = true;
  });
  selectedButton.classList.add("selected");
  checkAnswer(selectedButton);
  nextQuestionBtn.disabled = false;
}

function checkAnswer(selectedButton) {
  var q = questions[currentQuestion];
  var buttons = document.querySelectorAll(".choice");
  buttons.forEach(function(button) {
    if (button.textContent === q.correctAnswer) {
      button.style.backgroundColor = "green";
    } else if (button.classList.contains("selected")) {
      button.style.backgroundColor = "red";
    }
  });
}

function restartQuiz() {
  window.location.reload();
}

function startQuiz() {
  quizContainer.style.display = "block";
  intro.style.display = "none";
  displayNextQuestion();
}

function showResult() {
  var correctAnswers = 0;
  var wrongAnswers = [];

  questions.forEach(function(q, index) {
    var selectedButton = document.querySelectorAll(".choice.selected")[index];
    if (selectedButton && selectedButton.textContent === q.correctAnswer) {
      correctAnswers++;
    } else {
      wrongAnswers.push({ question: q.question, correctAnswer: q.correctAnswer });
    }
  });

  resultText.textContent = "Du hast " + correctAnswers + " von " + questions.length + " Fragen richtig beantwortet.";

  if (wrongAnswers.length > 0) {
    var wrongList = document.createElement("ul");

    wrongAnswers.forEach(function(wrong) {
      var item = document.createElement("li");
      item.textContent = wrong.question + " - Die richtige Antwort ist: " + wrong.correctAnswer;
      wrongList.appendChild(item);
    });

    resultContainer.appendChild(wrongList);
  }

  resultContainer.style.display = "block";
  nextQuestionBtn.style.display = "none"; // Verstecke den Button nach der Auswertung
}

document.addEventListener('DOMContentLoaded', startQuiz);

