/* questions-answers*/
const data = [{
        question: 'What part of human body cannot heal itself?',
        options: ['Skin', 'Liver', 'Teeth', 'Bones'],
        correct: 2
    },
    {
        question: "It's illegal to own just one species of this animal in Switzerland.",
        options: ['Dog', 'Parrot', 'Lizzard', 'Guinea pig'],
        correct: 3,
    },

    {
        question: "The anthem of this country has no lyrics.",
        options: ['Ukraine', 'Spain', 'Malta', 'Tanzania'],
        correct: 1


    }, {
        question: "Who designed chupa chups logo?",
        options: ['Andy Warhol', 'Salvador Dali', 'Pablo Picasso', 'Jean-Michelle Basquiat'],
        correct: 1


    }, {
        question: "The largest organ of human body is...",
        options: ['Skin', 'Tongue', 'Lungs', 'Intestines'],
        correct: 0


    }, {
        question: "What animal's eye is bigger than its brain?",
        options: ['Sloth', 'Ostrich', 'Whale','Schrimp'],
        correct: 1


    }, {
        question: "What's the smallest country in the World?",
        options: ['Lichtenstein','Luxembourg', 'Vatican', 'Andorra'],
        correct: 2

    }, {
        question: "What is the only flying mammal?",
        options: ['Ostrich','Bat', 'Chicken', 'Flying squirrells'],
        correct: 1

    }, {
        question: "What mammal doesn't have a stomach?",
        options: ['Whale', 'Platypus', 'Wombat', 'Armadillo'],
        correct: 1

    }, {
        question: "What is the deadliest animal in the world?",
        options: ['Crocodile', 'Shark', 'Mosquito', 'Cobra'],
        correct: 2

    }, {
        question: "What is the tallest building in the world?",
        options: ['The Burg Khalifa in Dubai', 'The Empire State Building in New York ', 'The Shanghai Tower in Shanghai', 'The One World Trade Center in New York'],
        correct: 0

    }, {
        question: "What country does have the biggest number of pyramids in the world?",
        options:['Sudan', 'Egypt', 'China','Mexico'],
        correct: 0

    },
];

/* functions for buttons to show different divs (game-sections)*/

const welcome = document.getElementById("welcome")
const quiz = document.getElementById('quiz')
const scoreDiv = document.getElementById('score')

function myFunction() {
    if (welcome.style.display === "block") {
        welcome.style.display = "none";
    } else {
        welcome.style.display = "block";
    }
    if (welcome.style.display === "none") {
        quiz.style.display = "block";
    } else {
        quiz.style.display = "none";
    }
}

function myFunction1() {
    if (quiz.style.display === "block") {
        quiz.style.display = "none";
    } else {
        quiz.style.display = "block";
    }
    if (quiz.style.display === "none") {
        scoreDiv.style.display = "block"
    } else {
        score.style.display = "none;"
    }
}

function myFunction2() {
    if (scoreDiv.style.display === "block") {
        scoreDiv.style.display = "none";
    } else {
        scoreDiv.style.display = "block";
    }
    if (scoreDiv.style.display === "none") {
        quiz.style.display = "block"
    } else {
        quiz.style.display = "none;"
    }
}

function myFunction3() {
    if (scoreDiv.style.display === "block") {
        scoreDiv.style.display = "none";
    } else {
        scoreDiv.style.display = "block";
    }
    if (scoreDiv.style.display === "none") {
        welcome.style.display = "block"
    } else {
        welcome.style.display = "none;"
    }
}

const answerEls = document.querySelector('.answer')
const questionEl = document.getElementById('question')
const userName = document.getElementById('username')
const optionA = document.getElementById('choice_text1')
const optionB = document.getElementById('choice_text2')
const optionC = document.getElementById('choice_text3')
const optionD = document.getElementById('choice_text4')
const score = document.getElementById('current-score')
const currentQuestionNumber = document.getElementById('progressBar')


function getQuestion () {
    questionEl.innerHTML = data.question
}

