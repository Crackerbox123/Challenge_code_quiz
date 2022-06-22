// variables 

var introSection = document.getElementById("intro-text");


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