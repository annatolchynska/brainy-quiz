const question = document.querySelector("#question");
const choice = document.querySelector('#choice');
const scoreNumber = document.querySelector('#score');

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What part of human body cannot heal itself?',
        choice1: 'Skin',
        choice2: 'Liver',
        choice3: 'Teeth',
        choice4: 'Bones',
        answer: 'Skin'
    },
    {
        question: "It's illegal to own just one species of this animal in Switzerland.",
        choice1: 'Dog',
        choice2: 'Parrot',
        choice3: 'Lizzard',
        choice4: 'Guinea pig',
        answer: 'Guinea pig'
    },
    {
        question: "The anthem of this country has no lyrics.",
        choice1: 'Ukraine',
        choice2: 'Spain',
        choice3: 'Malta',
        choice4: 'Tanzania',
        answer: 'Spain'
    },
    {
        question: "Who designed chupa chups logo?",
        choice1: 'Andy Warhol',
        choice2: 'Salvador Dali',
        choice3: 'Pablo Picasso',
        choice4: 'Jean-Michelle Basquiat',
        answer: 'Salvador Dali'
    },
    {
        question: "The largest organ of human body is...",
        choice1: 'Skin',
        choice2: 'Tongue',
        choice3: 'Lungs',
        choice4: 'Intestines',
        answer: 'Skin'
    },
    
]
