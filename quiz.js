var currentQuestion = -1;
var quizContainer = document.getElementById("quiz-container");
var intro = document.getElementById("intro");
var question = document.getElementById("question");
var leftColumn = document.getElementById("left-column");
var rightColumn = document.getElementById("right-column");
var nextQuestionBtn = document.getElementById("next-question-btn");

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
  {
    question: "Was wurde Luther, nachdem er in das Augustinerkloster in Erfurt eintrat?",
    choices: ["Priester", "Mönch", "Bischoff", "Pfarrer"],
    correctAnswer: "Mönch"
  },
    {
    question: "In welchem Jahr nagelte Martin Luther seine 95-Thesen an die Tür?",
    choices: ["1415", "1530", "1517", "1500"],
    correctAnswer: "1517"
  },
    {
    question: "Wann starb Martin Luther?",
    choices: ["1546", "1456" ,"1670", "1547"],
    correctAnswer: "1546"
  },
    {
    question:
    choices:
    correctAnswer:
  },
    {
    question:
    choices:
    correctAnswer:
  },
    {
    question:
    choices:
    correctAnswer:
  },
    {
    question:
    choices:
    correctAnswer:
  },
    {
    question:
    choices:
    correctAnswer:
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
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
  if (currentQuestion === questions.length - 1) {
    nextQuestionBtn.textContent = "Auswertung anzeigen";
    nextQuestionBtn.onclick = function() {
      showResult();
    };
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
  nextQuestionBtn.disabled = false;
}

function startQuiz() {
  quizContainer.style.display = "block";
  intro.style.display = "none";
  document.getElementById("back-btn").style.display = "none";
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

  var resultMessage = "Du hast " + correctAnswers + " von " + questions.length + " Fragen richtig beantwortet.";
  var resultData = {
    resultMessage: resultMessage,
    wrongAnswers: wrongAnswers
  };

  localStorage.setItem('quizResult', JSON.stringify(resultData));
  window.location.href = 'result.html';
}

// Event-Listener für das Laden des Quiz
document.addEventListener('DOMContentLoaded', function() {
  // Start Quiz Button Event Listener
  var startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('click', startQuiz);
});
