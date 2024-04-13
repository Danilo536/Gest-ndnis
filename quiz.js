// Funktion zum Mischen eines Arrays (Fisher-Yates Algorithmus)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fragen-Array mit Fragen und den richtigen Antworten
const questions = [
    {
        question: "Wann wurde Martin Luther geboren?",
        answers: [
            { text: "a) 10. November 1483", correct: true },
            { text: "b) 18. Februar 1546", correct: false },
            { text: "c) 31. Oktober 1517", correct: false },
            { text: "d) 1. Januar 1500", correct: false }
        ]
    },
    // Weitere Fragen hier hinzufügen
];

// Zufällige Anordnung der Fragen
shuffleArray(questions);

// Aktuelle Frage
let currentQuestionIndex = 0;

const questionElement = document.getElementById("question1");
const answerElements = questionElement.getElementsByClassName("answer");
const nextButton = document.getElementById("next-btn");
const resultButton = document.getElementById("result-btn");
const restartButton = document.getElementById("restart-btn");

function showQuestion(question) {
    questionElement.querySelector("h2").innerText = question.question;
    question.answers.forEach((answer, index) => {
        answerElements[index].querySelector("input").value = answer.text;
        answerElements[index].querySelector("input").checked = false;
        answerElements[index].querySelector("label").innerText = answer.text;
    });
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        nextButton.style.display = "none";
        resultButton.style.display = "block";
    }
}

function showResult() {
    let correctAnswers = 0;
    let resultText = "Auswertung:\n\n";

    questions.forEach((question, index) => {
        const selectedAnswer = Array.from(answerElements).find(answer => answer.querySelector("input").checked);
        if (selectedAnswer && selectedAnswer.querySelector("input").value === question.answers.find(answer => answer.correct).text) {
            correctAnswers++;
            resultText += "Frage " + (index + 1) + ": Richtig\n";
        } else {
            resultText += "Frage " + (index + 1) + ": Falsch\n";
        }
    });

    resultText += "\nDu hast " + correctAnswers + " von " + questions.length + " Fragen richtig beantwortet.";

    alert(resultText);

    restartButton.style.display = "block";
    resultButton.style.display = "none";
}

showQuestion(questions[currentQuestionIndex]);

nextButton.addEventListener("click", showNextQuestion);
resultButton.addEventListener("click", showResult);
restartButton.addEventListener("click", () => {
    window.location.reload();
});
