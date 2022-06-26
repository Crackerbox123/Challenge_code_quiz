// variables 
var startBtn = document.getElementById("start-btn");
var introSection = document.getElementById("intro-text");
var questionSc = document.getElementById("question-format-sc");
var endQuizSc = document.getElementById("end-quiz-sc");
var highScoreSc = document.getElementById("high-score-sc");
var questionText = document.getElementById("question");
var answer1Text = document.getElementById("answer-btn-1");
var answer2Text = document.getElementById("answer-btn-2");
var answer3Text = document.getElementById("answer-btn-3");
var answer4Text = document.getElementById("answer-btn-4");
var submitScoreBtn = document.getElementById("submit-initials");
var clearScoresBtn = document.getElementById("clear-scores");
var initialsTextarea = document.getElementById("initials-field");
var backToStartBtn = document.getElementById("go-back");
var backFromHSBtn = document.getElementById("back-to-main");
var toHighScoresBtn = document.getElementById("high-scores-button");
var highScoreTbl = document.getElementById("high-scores-tbl");
var currentCorrectAnswer;
var currentQuestionIdx = 0;
var quizLength = 10;
var questionBank;
var timer = document.getElementById("timer");
var timeLeft = 100;
var tempScore;
var ScoreList = JSON.parse(localStorage.getItem("ScoreList"));
var activeSection;



// array of questions + answers
var QuestionsObject = [
    {
        questionText: "Commonly used data types do NOT include:",
        correctAnswer: "",
        answerArr: [
            'Numbers',
            'strings',
            'Boolean',
            'alerts'
        ]
    },
    {
        questionText: "The condition in an if/else statement is enclosed in ________",
        correctAnswer: "Curly Brackets",
        answerArr: [
            'Quotes',
            'Curly Brackets',
            'Parentheses',
            'Square Brackets'
        ]
    },
    {
        questionText: "Arrays in JavaScript can be used to store:",
        correctAnswer:"All of the Above",
        answerArr: [
            'Numbers and Strings',
            'Other Arrays',
            'booleans',
            'All of the Above',
        ]
    },
    {
        questionText: "String values must be enclosed within __________ to when being assigned to variables ",
        correctAnswer:"quotes",
        answerArr: [
            'commas',
            'quotes',
            'parentheses',
            'curly brackets',
        ]
    },
    {
        questionText: "A very useful tool used during developing and debugging for printing content to the debugger is:",
        correctAnswer:"console log",
        answerArr: [
            'JavaScript',
            'terminal/bash',
            'console log',
            'for loops',
        ]
    },
]

// shows intro-text section on page load

window.onload = function() {

}


// function reals hidden section and hides active section
function reveal(thisSection) {
    //hide active section
    activeSection.classList.add("hidden");

    //reveal new section
    thisSection.classList.remove("hidden");
    activeSection = thisSection;
}

//generate the quiz and start from the first question. also hides the intro section & reveals question section once generated.
function startQuiz(){
    console.log("started quiz");
    intervalID = setInterval(showScore, 1000);
    quiz();
    reveal(questionSc);
}

//displays next question
function quiz() {
    loadQuestion(currentQuestionIdx);
}

//loads new question data from our question obj array
function loadQuestion(questionNum) {
    var newQuestion = QuestionsObj[questionNum];
    currentCorrectAnswer = newQuestion.correctAnsStr;
    questionText.innerHTML = newQuestion.questionText;
    answer1Text.innerHTML = newQuestion.AnswerArr[0];
    answer2Text.innerHTML = newQuestion.AnswerArr[1];
    answer3Text.innerHTML = newQuestion.AnswerArr[2];
    answer4Text.innerHTML = newQuestion.AnswerArr[3];

}

// compares the clicked answer to the correct answer
function checkAnswer(answerClicked) {
    if(answerClicked == currentCorrectAnswer){
        return true;
    }
    else{ return false }
}

// handles decrementing of score
function updateScore(chk) {
    if(chk){
        console.log("The answer was correct");
    }
    else{
        console.log("The answer was incorrect");
        //decrement time
        timeLeft -= 10;
    }
}
