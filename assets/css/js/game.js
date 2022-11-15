/* questions-answers*/
const data = [{
        question: 'What part of human body cannot heal itself?',
        a: 'Skin',
        b: 'Liver',
        c: 'Teeth',
        d: 'Bones',
        correct: "c",
    },
    {
        question: "It's illegal to own just one species of this animal in Switzerland.",
        a: 'Dog',
        b: 'Parrot',
        c: 'Lizzard',
        d: 'Guinea pig',
        correct: "d",
    },

    {
        question: "The anthem of this country has no lyrics.",
        a: 'Ukraine',
        b: 'Spain',
        c: 'Malta',
        d: 'Tanzania',
        correct: "b",


    }, {
        question: "Who designed chupa chups logo?",
        a: 'Andy Warhol',
        b: 'Salvador Dali',
        c: 'Pablo Picasso',
        d: 'Jean-Michelle Basquiat',
        correct: "b",


    }, {
        question: "The largest organ of human body is...",
        a: 'Skin',
        b: 'Tongue',
        c: 'Lungs',
        d: 'Intestines',
        correct: "a",


    }, {
        question: "What animal's eye is bigger than its brain?",
        a: 'Sloth',
        b: 'Ostrich',
        c: 'Whale',
        d: 'Schrimp',
        correct: "b",


    }, {
        question: "What's the smallest country in the World?",
        a: 'Lichtenstein',
        b: 'Luxembourg',
        c: 'Vatican',
        d: 'Andorra',
        correct: "c",

    }, {
        question: "What is the only flying mammal?",
        a: 'Ostrich',
        b: 'Bat',
        c: 'Chicken',
        d: 'Flying squirrells',
        correct: "b",

    }, {
        question: "What mammal doesn't have a stomach?",
        a: 'Whale',
        b: 'Platypus',
        c: 'Wombat',
        d: 'Armadillo',
        correct: "b",

    }, {
        question: "What is the deadliest animal in the world?",
        a: 'Crocodile',
        b: 'Shark',
        c: 'Mosquito',
        d: 'Cobra',
        correct: "c",

    }, {
        question: "What is the tallest building in the world?",
        a: 'The Burg Khalifa in Dubai',
        b: 'The Empire State Building in New York ',
        c: 'The Shanghai Tower in Shanghai',
        d: 'The One World Trade Center in New York',
        correct: "a",

    }, {
        question: "What country does have the biggest number of pyramids in the world?",
        a: 'Sudan',
        b: 'Egypt',
        c: 'China',
        d: 'Mexico',
        correct: "a",

    },
];
const targetDiv = document.getElementsByClassName("display")
const btn = document.getElementsByClassName('btn')
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.choice_text')
const questionEl = document.getElementById('question')
const userName = document.getElementById('username')
const optionA = document.getElementById('choice_text1')
const optionB = document.getElementById('choice_text2')
const optionC = document.getElementById('choice_text3')
const optionD = document.getElementById('choice_text4')

const submitBtn = document.getElementById('button')

let currentQuiz = 0;
let score = 0;

btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};
loadQuiz()


function loadQuiz() {

    deselectAnswers()
    const currentQuizData = data[currentQuiz]

    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (
        answerEl.checked = false))
}

function getSelect() {
    let answer
    answerEls.forEach((answerEl) => {
        if (answerEl.checked)
            answer = answerEl.id
    })
    return answer;
}