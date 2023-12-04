 
 //movie trivia game


/*----- constants -----*/


//array of questions
//nested array of answers 
//to stop later headaches; an array of strings,

const QUESTIONS = [
    {
    questionText: "What was the first feature-length animated movie ever released?",
    answerOptions: ["Dumbo", "Toy Story", "Snow White and the Seven Dwarfs" ,"Fantasia"],
    correctAnswer: "Snow White and the Seven Dwarfs"
    },
    {
    questionText: "Who directed Kill Bill, Pulp Fiction, and Once Upon a Time in Hollywood?",
    answerOptions: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
    correctAnswer: "Quentin Tarantino"
    },
    {
    questionText: "Who portrayed the Joker in The Dark Knight?",
    answerOptions:  ["Jared Leto", "Jack Nicholson", "Heath Ledger", "Joaquin Phoenix"],
    correctAnswer: "Heath Ledger"
    },
    {
    questionText: "What is the highest grossing movie of all time?",
    answerOptions: ["Avengers: Endgame", "Titanic", "Avatar" ,"Barbie"],
    correctAnswer: "Avatar"
    },
    {
    questionText: "What color pill does Neo take in The Matrix",
    answerOptions: ["Green", "Red", "Blue" ,"Black"],
    correctAnswer: "Red"
    },
    {
    questionText: "Name the movie that this iconic quote comes from: “Youre gonna need a bigger boat.”",
    answerOptions: ["The Titanic", "Cast Away", "The Beach" ,"Jaws"],
    correctAnswer: "Jaws"
    },
    {
    questionText: "Who voices Woody the Cowboy in the Toy Story movie franchise?",
    answerOptions: ["Woody Allen", "Tom Hanks", "Tim Allen" ,"Clint Eastwood"],
    correctAnswer: "Tom Hanks"
    },
    {
    questionText: "What is the name of the Hotel in The Shining?",
    answerOptions: ["The Stanley", "The Dolphin", "The Overlook" ,"The Hilton"],
    correctAnswer: "The Overlook"
    },
    {
    questionText: "Which actor plays the main character in Scott Pilgrim Vs. The World?",
    answerOptions: ["Chris Evans", "Micheal Cera", "Jonah Hill" ,"Seth Rogan"],
    correctAnswer: "Micheal Cera"
    },
    {
    questionText: "How many Infinity Stones are there in Avengers: Endgame?",
    answerOptions: ["Five", "Four", "Six" , "Thanos was right"],
    correctAnswer: "Six" 
    },
    { 
    questionText: "Who directed The Dark Knight?",
    answerOptions: ["Christopher Nolan", "James Cameron", "Wes Anderson" ,"Jordan Peele"],
    correctAnswer: "Christopher Nolan"    
},
{
    questionText: "What is the name of the kingdom in Disney's 'Frozen'",
    answerOptions: ["Arendelle", "Corona", "Atlantica" ,"Agrabah"],
    correctAnswer: "Arendelle"
},
{
    questionText: "Which actor played Jack in 'Titanic'?",
    answerOptions: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio" ,"Johnny Depp"],
    correctAnswer: "Leonardo DiCaprio"
},
{
    questionText: "Who directed the movie 'Jurassic Park'?",
    answerOptions: ["George Lucas", "Ridley Scott", "James Cameron" ,"Steven Spielberg"],
    correctAnswer: "Steven Spielberg"
},
{
    questionText: "In 'Inception', which item is used by Cobb as a totem?",
    answerOptions: ["A briefcase", "A spinning top", "A golden coin" ,"A totem?"],
    correctAnswer: "A spinning top"
},
{
    questionText: "What was Johnny Depp's first movie appearance?",
    answerOptions: ["Edward Scissorhands", "A Nightmare on Elm Street", "Donnie Brasco", "Cry-Baby"],
    correctAnswer: "A Nightmare on Elm Street"
},
{
    questionText: "Before 'Twilight,' Robert Pattinson appeared in 'Harry Potter and the Goblet of Fire' as what character?",
    answerOptions: ["Draco Malfoy", "Cedric Diggory", "Ron Weasley", "Sirius Black"],
    correctAnswer: "Cedric Diggory"
},
];

const MAX_QUESTIONS = 10;

/*----- state variables -----*/
//display score
let questionIndex = 0;
let score = 0;
let incorrectAnswers = 0;


//question number
//current question
//current awnsers
//correct awnser
//score


/*----- cached elements  -----*/
//question text (element)
const questionEl = document.getElementById('question');
//answer button
const answerButtonsEl = document.getElementById('answer-buttons');
//start button
const startButton = document.getElementById('start-btn');
//next question button
const nextButton = document.getElementById('next-btn')
const restartButton = document.getElementById('restart-btn')
//score text (element)
const scoreText = document.getElementById('result-text')
//quit buttion
//const quitButton = document.getElementById('quit-btn') 
////////////////////////////
//reply text (element) 
const replyEl = document.getElementById('reply');

const questionContainer = document.getElementById('question-container');
const homeContainer = document.getElementById('home-container');

//result text (element)



/*----- event listeners -----*/


//start the game

startButton.addEventListener('click', startGame);
//answer click
//next question click
nextButton.addEventListener('click', handleNextQuestion);
//restart click
restartButton.addEventListener('click', restartGame);
//quit click
//quitButton.addEventListener('click', quitGame);
////////////////////


/*----- functions -----*/


//randomize questions

function shuffleArray(arr) {
    for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i],arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
}


//function to START game
function startGame() {
    shuffleArray(QUESTIONS);
    questionIndex = 0;
    incorrectAnswers = 0;
    score = 0;
    startButton.classList.add('hidden');
    const questionContainer = document.getElementById('game-container');
    questionContainer.classList.remove('hidden');
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.add('hidden');
    const homeContainer = document.getElementById('home-container');
    homeContainer.classList.add('hidden');
    showQuestion(questionIndex);
}


//function to RESTART game

function restartGame() {
    shuffleArray(QUESTIONS);
    questionIndex = 0;
    score = 0;
    showQuestion(questionIndex);
    }
    

//function to SHOW the current question

function showQuestion(index) {
    const question = QUESTIONS[index];
    questionEl.innerText = question.questionText;
    answerButtonsEl.innerHTML = '';
    replyEl.innerText = '';
    //need forEach option
    question.answerOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn', 'answer-btn');
        button.addEventListener('click', () => handleAnswer(option));
        answerButtonsEl.appendChild(button);
    });
}

//function to handle ANSWER

function handleAnswer(selectedAnswer) {
    const question = QUESTIONS[questionIndex];
    if (selectedAnswer === question.correctAnswer) {
        score++;
        replyEl.innerText = "Correct!";
        replyEl.style.color = 'green';
    } else {
        replyEl.innerText = "Incorrect!";
        replyEl.style.color = 'red';
        incorrectAnswers++;
        if (incorrectAnswers >= 3) {
            // replyEl.innerText = "Incorrect!";
            // replyEl.style.color = 'red';
            endGame("lose");
            return;
        }
    }

    setTimeout(() => {
        questionIndex++;
        if (questionIndex >= MAX_QUESTIONS || questionIndex >= QUESTIONS.length) {
            endGame('win');
        } else {
            showQuestion(questionIndex);
        }
    }, 1000); 
}



// add function to display the current SCORE
// add function to display the current QUESTION NUMBER

// set TIMEOUT to 1 second and then call--
//function to handle NEXT question
function handleNextQuestion() {
    questionIndex++;
    //move to next question
    if (questionIndex < QUESTIONS.length) {
        showQuestion(questionIndex);
    } else {
        endGame();
    }
}



function endGame(result) {
    // Hide the question container
    const questionContainer = document.getElementById('game-container');
    
    questionContainer.classList.add('hidden');

    // Display result message
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');

    scoreText.innerText = `${score} / ${MAX_QUESTIONS}`;

    if (result === "lose") {
        scoreText.innerText = `You lost! Too many Incorrect Answers: ${incorrectAnswers}`;
    } else {
        scoreText.innerText = `Congratulations! Your score: ${score}`;
    }

    startButton.classList.remove('hidden');
    startButton.innerText = 'Restart';
    const homeContainer = document.getElementById('home-container');
    homeContainer.classList.remove('hidden');

}





//............................

