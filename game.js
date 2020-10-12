const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounterText');
const scoreText = document.getElementById('score');
const timerEl = document.getElementById("timer");


let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []
var time = 21;
let intervalId;

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1:  "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choice1:  "quotes",
        choice2: "booleans",
        choice3: "parentheses",
        choice4: "square brackets",
        answer: 3
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1:  "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1:  "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
    }
    
]

  //CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

// Function which starts the game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();

};

// This function moves the user to the next question once answered
getNewQuestion = () => {
   
    //intervalId = setInterval(updateTime(), 1000);
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS || (time === 0)) {

        localStorage.setItem("mostRecentScore", score);

        //go to the end page
        return window.location.assign('end.html');
    }
    
    
    
    questionCounter++;
    questionCounterText.innerText = (questionCounter + "/" + MAX_QUESTIONS);

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnsers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //applies a class depending on the correct or incorrect answer
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        //increments score counter
        if(classToApply === "correct") {
        incrementScore();
        }

        //applies a red or green to indicate a wrong or right answer then moves user to next question
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
    
    })
})

incrementScore = () => {
score++;
};

startGame();