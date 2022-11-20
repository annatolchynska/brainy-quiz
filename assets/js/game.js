//questions-answers
const questions = [{
        question: 'What part of human body cannot heal itself?',
        choice1: 'skin',
        choice2: 'liver',
        choice3: 'teeth',
        choice4: 'bones',
        answer: 3
    },
    {
        question: "It's illegal to own just one species of this animal in Switzerland.",
        choice1: 'dog',
        choice2: 'parrot',
        choice3: 'lizzard',
        choice4: 'guinea pig',
        answer: 4,
    },
    {
        question: "The anthem of this country has no lyrics.",
        choice1: 'Ukraine',
        choice2: 'Spain',
        choice3: 'Malta',
        choice4: 'Tanzania',
        answer: 2
    },
    {
        question: "Who designed chupa chups logo?",
        choice1: 'Andy Warhol',
        choice2: 'Salvador Dali',
        choice3: 'Pablo Picasso',
        choice4: 'Jean-Michelle Basquiat',
        answer: 2
    },
    {
        question: "The largest organ of human body is...",
        choice1: 'skin',
        choice2: 'tongue',
        choice3: 'lungs',
        choice4: 'intestines',
        answer: 1
    },
    {
        question: "What animal's eye is bigger than its brain?",
        choice1: 'sloth',
        choice2: 'ostrich',
        choice3: 'whale',
        choice4: 'schrimp',
        answer: 2
    },
    {
        question: "What's the smallest country in the World?",
        choice1: 'Lichtenstein',
        choice2: 'Luxembourg',
        choice3: 'Vatican',
        choice4: 'Andorra',
        answer: 3
    },
    {
        question: "What is the only flying mammal?",
        choice1: 'ostrich',
        choice2: 'bat',
        choice3: 'chicken',
        choice4: 'flying squirrells',
        answer: 2
    },
    {
        question: "What mammal doesn't have a stomach?",
        choice1: 'whale',
        choice2: 'platypus',
        choice3: 'wombat',
        choice4: 'armadillo',
        answer: 2
    },
    {
        question: "What is the deadliest animal in the world?",
        choice1: 'crocodile',
        choice2: 'shark',
        choice3: 'mosquito',
        choice4: 'cobra',
        answer: 3
    },
    {
        question: "What is the tallest building in the world?",
        choice1: 'the Burg Khalifa in Dubai',
        choice2: 'the Empire State Building in New York ',
        choice3: 'the Shanghai Tower in Shanghai',
        choice4: 'the One World Trade Center in New York',
        answer: 1
    },
    {
        question: "What country does have the biggest number of pyramids in the world?",
        choice1: 'Sudan',
        choice2: 'Egypt',
        choice3: 'China',
        choice4: 'Mexico',
        answer: 1
    },
    {
        question: "What is the only fish that can blink with both eyes?",
        choice1: 'dolphin',
        choice2: 'shark',
        choice3: 'whale',
        choice4: 'salmon',
        answer: 2
    },
    {
        question: "What's the average time for a person to fall asleep?",
        choice1: '1 hour',
        choice2: '30 minutes',
        choice3: '7 minutes',
        choice4: '17 minutes',
        answer: 3
    },
    {
        question: "What do people actually see while looking at a bright sky and seeing white dots?",
        choice1: 'dust',
        choice2: 'snow',
        choice3: 'white blood cells in their body',
        choice4: 'brain cells',
        answer: 3
    },
    {
        question: "Which animal have rectangular pupil in their eye?",
        choice1: 'elephant',
        choice2: 'goat',
        choice3: 'koala',
        choice4: 'penguin',
        answer: 2
    },
    {
        question: "What is the most visied country in the world due to the recent research?",
        choice1: 'the USA',
        choice2: 'France',
        choice3: 'Thailand',
        choice4: 'Italy',
        answer: 2
    },
    {
        question: "What former planet was demoted to a dwarf planet in 2006?",
        choice1: 'Pluto',
        choice2: 'Uranus',
        choice3: 'Moon',
        choice4: 'Nebula',
        answer: 1
    },
    {
        question: "Which is the only one of the seven wonders of the ancient world still standing?",
        choice1: 'Lighthouse of Alexandria',
        choice2: 'Colossus of Rhodes',
        choice3: 'The Pyramids of Giza',
        choice4: 'Hanging Gardens of Babylon',
        answer: 3
    },
    {
        question: "What do rings on the Olympic flag stand for?",
        choice1: 'people who invented it',
        choice2: 'kinds of sports that were played first',
        choice3: 'Greek Gods',
        choice4: 'continents',
        answer: 4
    },
    {
        question: "What company does have the slogan 'JUST DO IT'?",
        choice1: 'Adidas',
        choice2: 'Nike',
        choice3: "McDonald's",
        choice4: 'Apple',
        answer: 2
    },
    {
        question: "Which of the following countries don't border the Black Sea?",
        choice1: 'Romania',
        choice2: 'Moldova',
        choice3: 'Georgia',
        choice4: 'Montenegro',
        answer: 4
    },
];
//global variables 
const welcome = document.getElementById("welcome");
const quiz = document.getElementById('quiz');
const scoreDiv = document.getElementById('score');
const question = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score-number');
const totalText = document.getElementById('number');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];
const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;
let score;
const username = document.getElementById('username');

//functions 
//functions to show/hide divs
document.getElementById('go').addEventListener('click', function showQuiz() {
    if (welcome.style.display === "block") {
        welcome.style.display = "none";
    } else {
        welcome.style.display = "block";
    }
    if (welcome.style.display === "none") {
        quiz.style.display = "block";
        startGame();
    } else {
        quiz.style.display = "none";
    }
});
document.getElementById('start_btn').addEventListener('click', function goHome() {
    if (scoreDiv.style.display === "block") {
        scoreDiv.style.display = "none";
    } else {
        scoreDiv.style.display = "block";
    }
    if (scoreDiv.style.display === "none") {
        welcome.style.display = "block";
    } else {
        welcome.style.display = "none;";
    }
});
//function to run the game
let startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};
//function to get random questions from available questions
/**
 * The code is taken from YouTube tutorial 
 * How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial 
 * by Brian Design
 */
let getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

        return scoreDiv.style.display = "block", quiz.style.display = 'none';
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};
//function to get options for answer and get the right answer
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
               const correctAnswer = choices[currentQuestion.answer - 1];
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        } else if (classToApply === 'incorrect') {
            correctAnswer.parentElement.classList.add('correct');
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            correctAnswer.parentElement.classList.remove('correct');
            getNewQuestion();
        }, 10);
    });
});
//function to count scores
let incrementScore = num => {
    score += num;
    scoreText.innerText = score;
    totalText.innerText = username.value + '= ' + score;
};
startGame();