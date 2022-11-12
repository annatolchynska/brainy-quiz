const questionElement = document.getElementById('question');
const answerElement = document.getElementByTagName ('p')
const startButton = document.getElementById('btn');
startButton.addEventListener('click', runGame);

let shuffledQuestions, currentQuestionIndex;

function runGame() {
    console.log('Started');
    shuffledQuestions = questions;
    currentIndexQuestion = 0;
    setNextQuestion()

}
function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function ShowQuestion(question) {
questionElement.innerText = question.question
}

function checkingAnswers() {
    let userAnswer = document.getElementByClassName('choice');
    let correctAnswer = userAnswer = answer;
    if (correctAnswer) {
        alert("Hey! You got it right! :D");
        incrementScore();
    }
}
/* questions-answers*/
const questions = [{
        question: 'What part of human body cannot heal itself?',
        choice1: 'Skin',
        incorrect: false,
        choice2: 'Liver',
        incorrect: false,
        choice3: 'Teeth',
        correct: true,
        choice4: 'Bones',
        incorrect: false,
    },
    {
        question: "It's illegal to own just one species of this animal in Switzerland.",
        choice1: 'Dog',
        incorrect: false,
        choice2: 'Parrot',
        incorrect: false,
        choice3: 'Lizzard',
        incorrect: false,
        choice4: 'Guinea pig',
        correct: true,

    },
    {
        question: "The anthem of this country has no lyrics.",
        choice1: 'Ukraine',
        incorrect: false,
        choice2: 'Spain',
        correct: true,
        choice3: 'Malta',
        incorrect: false,
        choice4: 'Tanzania',
        incorrect: false,

    },
    {
        question: "Who designed chupa chups logo?",
        choice1: 'Andy Warhol',
        incorrect: false,
        choice2: 'Salvador Dali',
        correct: true,
        choice3: 'Pablo Picasso',
        incorrect: false,
        choice4: 'Jean-Michelle Basquiat',
        incorrect: false,

    },
    {
        question: "The largest organ of human body is...",
        choice1: 'Skin',
        correct: true,
        choice2: 'Tongue',
        incorrect: false,
        choice3: 'Lungs',
        incorrect: false,
        choice4: 'Intestines',
        incorrect: false,

    },
    {
        question: "What animal's eye is bigger than its brain?",
        choice1: 'Sloth',
        incorrect: false,
        choice2: 'Ostrich',
        correct: true,
        choice3: 'Whale',
        incorrect: false,
        choice4: 'Schrimp',
        incorrect: false,

    },
    {
        question: "What's the smallest country in the World?",
        choice1: 'Lichtenstein',
        incorrect: false,
        choice2: 'Luxembourg',
        incorrect: false,
        choice3: 'Vatican',
        correct: true,
        choice4: 'Andorra',
        incorrect: false,

    },
    {
        question: "What is the only flying mammal?",
        choice1: 'Ostrich',
        incorrect: false,
        choice2: 'Bat',
        correct: true,
        choice3: 'Chicken',
        incorrect: false,
        choice4: 'Flying squirrells',
        incorrect: false,

    },
    {
        question: "What mammal doesn't have a stomach?",
        choice1: 'Whale',
        incorrect: false,
        choice2: 'Platypus',
        correct: true,
        choice3: 'Wombat',
        incorrect: false,
        choice4: 'Armadillo',
        incorrect: false,

    },
    {
        question: "What is the deadliest animal in the world?",
        choice1: 'Crocodile',
        incorrect: false,
        choice2: 'Shark',
        incorrect: false,
        choice3: 'Mosquito',
        correct: true,
        choice4: 'Cobra',
        incorrect: false,

    },
    {
        question: "What is the tallest building in the world?",
        choice1: 'The Burg Khalifa in Dubai',
        correct: true,
        choice2: 'The Empire State Building in New York ',
        incorrect: false,
        choice3: 'The Shanghai Tower in Shanghai',
        incorrect: false,
        choice4: 'The One World Trade Center in New York',
        incorrect: false,

    },
    {
        question: "What country does have the biggest number of pyramids in the world?",
        choice1: 'Sudan',
        correct: true,
        choice2: 'Egypt',
        incorrect: false,
        choice3: 'China',
        incorrect: false,
        choice4: 'Mexico',
        incorrect: false,

    },
]