/* questions-answers*/
const questions = [{
        question: 'What part of human body cannot heal itself?',
        choice1:'Skin',
        choice2:'Liver',
        choice3: 'Teeth',
        choice4: 'Bones',
        answer: 3
    },
    {
        question: "It's illegal to own just one species of this animal in Switzerland.",
        choice1: 'Dog',
        choice2: 'Parrot',
        choice3: 'Lizzard',
        choice4: 'Guinea pig',
        answer: 4,
    },

    {
        question: "The anthem of this country has no lyrics.",
        choice1: 'Ukraine', 
        choice2:'Spain', 
        choice3:'Malta', 
        choice4:'Tanzania',
        answer: 2


    }, {
        question: "Who designed chupa chups logo?",
        choice1: 'Andy Warhol',
        choice2: 'Salvador Dali', 
        choice3:'Pablo Picasso', 
        choice4:'Jean-Michelle Basquiat',
        answer: 2

    }, {
        question: "The largest organ of human body is...",
        choice1:'Skin', 
        choice2:'Tongue', 
        choice3:'Lungs', 
        choice4:'Intestines',
        answer: 1


    }, {
        question: "What animal's eye is bigger than its brain?",
        choice1:'Sloth', 
        choice2:'Ostrich', 
        choice3:'Whale',
        choice4:'Schrimp',
        answer: 2


    }, {
        question: "What's the smallest country in the World?",
        choice1:'Lichtenstein',
        choice2:'Luxembourg', 
        choice3:'Vatican', 
        choice4:'Andorra',
        answer: 3

    }, {
        question: "What is the only flying mammal?",
        choice1:'Ostrich',
        choice2:'Bat', 
        choice3:'Chicken',
        choice4: 'Flying squirrells',
        answer: 2

    }, {
        question: "What mammal doesn't have a stomach?",
        choice1:'Whale', 
        choice2:'Platypus', 
        choice3:'Wombat', 
        choice4:'Armadillo',
        answer: 2

    }, {
        question: "What is the deadliest animal in the world?",
        choice1:'Crocodile', 
        choice2:'Shark', 
        choice3:'Mosquito', 
        choice4:'Cobra',
        answer: 3

    }, {
        question: "What is the tallest building in the world?",
        choice1:'The Burg Khalifa in Dubai', 
        choice2:'The Empire State Building in New York ', 
        choice3:'The Shanghai Tower in Shanghai',
        choice4: 'The One World Trade Center in New York',
        answer: 1

    }, {
        question: "What country does have the biggest number of pyramids in the world?",
        choice1:'Sudan',
        choice2: 'Egypt', 
        choice3:'China',
        choice4:'Mexico',
        answer: 1

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



const question = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score-number');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []

const SCORE_POINTS = 1
const MAX_QUESTIONS = 10

let startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    timer();
}
let getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset.number
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset.number

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        const correctAnswer = choices[currentQuestion.answer - 1]
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        } else if (classToApply === 'incorrect') {
            correctAnswer.parentElement.classList.add('correct')
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            correctAnswer.parentElement.classList.remove('correct')
            getNewQuestion()

        }, 10)
    })
})

let incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()

function timer() {
    let seconds = 60;
    let timer = setInterval(function() {
        document.getElementById('timer').innerHTML = seconds;
        seconds--;

        if (seconds < 0) {
            localStorage.setItem("mostRecentScore", score);
            clearInterval(timer);
            location.href = "index.html";}
        
    }, 1000);} 

    
