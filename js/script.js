 
 //movie trivia game


/*----- constants -----*/

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
    questionText: "What is the highest grossing movie of all time? (not adjusted for inflation)",
    answerOptions: ["Avengers: Endgame", "Titanic", "Avatar" ,"Barbie"],
    correctAnswer: "Avatar"
    },
    {
    questionText: "What color pill does Neo take in The Matrix?",
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
    questionText: "What is the name of the Hotel in 'The Shining'?",
    answerOptions: ["The Stanley", "The Dolphin", "The Overlook" ,"The Hilton"],
    correctAnswer: "The Overlook",
    img: "Images/overlook.jpg"
    },
    {
    questionText: "Which actor plays the main character in Scott 'Pilgrim Vs. The World'?",
    answerOptions: ["Chris Evans", "Micheal Cera", "Jonah Hill" ,"Seth Rogan"],
    correctAnswer: "Micheal Cera"
    },
    {
    questionText: "How many Infinity Stones are there in Avengers: Endgame?",
    answerOptions: ["Five", "Four", "Six", "Seven"],
    correctAnswer: "Six", 
    },
    { 
    questionText: "Who directed 'The Dark Knight'?",
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
    correctAnswer: "A spinning top",
    img: "Images/cobb.jpg"
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
{
    questionText: "Name this movie?",
    answerOptions: ["Lethal Weapon", "Die Hard", "Fight Club", "Se7en"],
    correctAnswer: "Se7en",
    img: "Images/WITB.jpg"
},
{
    questionText: "What is the name of the fictional African nation in the movie 'Black Panther'?",
    answerOptions: ["Genosha","Wakanda", "Latveria", "Zamunda"],
    correctAnswer: "Wakanda"
},
{
    questionText: "In which movie did Tom Cruise play a character who attends the U.S. Naval Fighter Weapons School?",
    answerOptions: ["Rain Man", "Top Gun", "The Color of Money", "Risky Business"],
    correctAnswer: "Top Gun"
},
{
    questionText: "Who directed the the epic historical drama 'Schindler's List' in 1993?",
    answerOptions: ["Steven Spielberg", "Martin Scorsese", "Ridley Scott", "Oliver Stone"],
    correctAnswer: "Steven Spielberg"
},
{
    questionText: "In the 2017 horror film 'Get Out', directed by Jordan Peele, what unique method does the antagonist family use to control their victims?",
    answerOptions: ["Drugs", "Hypnosis", "Magic", "Technology"],
    correctAnswer: "Hypnosis"
},
{
    questionText: "Which actor played the lead role of the stuntman and getaway driver in the 2011 film 'Drive'?",
    answerOptions: ["Jake Gyllenhaal", "Christian Bale", "Ryan Gosling", "Brad Pitt"],
    correctAnswer: "Ryan Gosling",
    img: "" 
},
{
    questionText: "In Stephen King's 'IT', what form does the shape-shifting entity primarily take?",
    answerOptions: ["A Clown", "A Spider", "A Werewolf", "A Vampire"],
    correctAnswer: "A Clown",
    img: "" 
},
{
    questionText: "In the 2007 film 'The Mist', adapted from a Stephen King novella, where do the survivors take refuge from the mysterious mist?",
    answerOptions: ["A Church", "A Grocery Store", "A School", "A Hospital"],
    correctAnswer: "A Grocery Store"
},
{
    questionText: "In Stephen King's 'IT', what is the name of the hypnotizing lights that are a manifestation of It's true form?",
    answerOptions: ["Soullights", "Fearlights", "Deadlights", "Doomlights"],
    correctAnswer: "Deadlights",
    img: "Images/Dlights.jpg" 
},

{
    questionText: "Which 2009 superhero film, directed by Zack Snyder, features characters like Rorschach and Dr. Manhattan?",
    answerOptions: ["The Dark Knight", "Watchmen", "Sin City", "V for Vendetta"],
    correctAnswer: "Watchmen",
},
{
    questionText: "Which director is known for his distinctive visual and narrative style in films such as 'The Grand Budapest Hotel' and 'Moonrise Kingdom'?",
    answerOptions: ["Wes Anderson", "Christopher Nolan", "Quentin Tarantino", "Steven Spielberg"],
    correctAnswer: "Wes Anderson",
    img: "Images/Wes.jpg" 
},
{
    questionText: "In which horror movie is a curse transmitted from person to person like a virus?",
    answerOptions: ["The Conjuring", "Hereditary", "The Babadook", "It Follows"],
    correctAnswer: "It Follows",
},
{
    questionText: "Which movie is a modern musical romance set in Los Angeles?",
    answerOptions: ["Moulin Rouge!", "Chicago", "La La Land", "The Greatest Showman"],
    correctAnswer: "La La Land",
},
{
    questionText: "Which movie is a 2015 American horror film directed by Robert Eggers?",
    answerOptions: ["It", "The Conjuring", "The Babadook", "The Witch"],
    correctAnswer: "The Witch",
},
{
    questionText: "Played by Jack Nicholson, What's the main character's name in the movie 'The Shining'?",
    answerOptions: ["Danny", "Jack", "Wendy", "Tony"],
    correctAnswer: "Jack",
},
{
    questionText: "Which movie is a 2013 American supernatural horror film directed by James Wan?",
    answerOptions: ["The Conjuring", "The Babadook", "The Witch", "It"],
    correctAnswer: "The Conjuring",
},
{
    questionText: "Which movie is a 2017 American romantic coming-of-age drama starring Timothée Chalamet and Armie Hammer?",
    answerOptions: ["Call Me by Your Name", "Lady Bird", "Dune", "Moonlight"],
    correctAnswer: "Call Me by Your Name",
},
{
    questionText: "In Stanley Kubrick's '2001: A Space Odyssey,' what is the name of the ship's AI?",
    answerOptions: ["Skynet", "HAL 9000", "R2-D2", "JARVIS"],
    correctAnswer: "HAL 9000",
    img: "Images/hal.jpg"
},

];

const MAX_QUESTIONS = 10;
const maxTime = 20; 
/*----- state variables -----*/
let timeLeft; 
let timer; 
let questionIndex = 0;
let score = 0;
let incorrectAnswers = 0;


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
//reply text (element) 
const replyEl = document.getElementById('reply');

const questionContainer = document.getElementById('question-container');
const homeContainer = document.getElementById('home-container');
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
const hoverSound = document.getElementById('hover-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');
const timerEl = document.getElementById('timer');
const timerSound = document.getElementById('timer-sound');
const questionImage = document.getElementById('question-image');


/*----- event listeners -----*/
//start click
startButton.addEventListener('click', startGame);
//answer click
//next question click
nextButton.addEventListener('click', handleNextQuestion);
//restart click
restartButton.addEventListener('click', restartGame);

/*----- functions -----*/

// SHUFFLE questions

function shuffleArray(arr) {
    for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i],arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
}

//function to START timer

function startTimer() {
    clearInterval(timer); 
    timeLeft = maxTime;
    updateTimerDisplay(timeLeft);

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout(); 
        }
    }, 1000);
}

function updateTimerDisplay(time) {
    const timerEl = document.getElementById('timer');
    timerEl.innerText = time;
    //change COLOR of TIMER as it gets closer to 0
    if (time <= 5) {
        timerSound.play();
        timerEl.style.fontSize = '30px';
        timerEl.style.color = 'firebrick';
        timerEl.style.fontWeight = 'bold';
        timerEl.style.textAlign = 'center';
    } else {
        timerEl.style.fontSize = '20px';
        timerEl.style.color = '';
        timerEl.style.fontWeight = 'normal';
        timerEl.style.textAlign = '';
}
}
//function to handle TIMEOUT

function handleTimeout() {
    replyEl.innerText = "Out of Time!";
    replyEl.style.color = 'red';
    incorrectSound.play(); 
    incorrectAnswers++;
    setTimeout(() => {
    if (incorrectAnswers >= 3) {
        endGame("lose");
    } else {
        questionIndex++;
        if (questionIndex < QUESTIONS.length) {
            showQuestion(questionIndex);
        } else {
            endGame("win");
        }}
    }, 1000); 
}

function ResetSounds() {
    const sounds = [correctSound, incorrectSound, timerSound];
    sounds.forEach(sound => {
        if (!sound.paused) {
            sound.pause();
            sound.currentTime = 0;
        }
    });
}

// Question Number Display

function nextQuestionNumber() {
    const questionNumber = document.getElementById('question-number');
    questionNumber.innerText = `Question ${questionIndex + 1} of ${MAX_QUESTIONS}`;
}

//function to START game
function startGame() {
    shuffleArray(QUESTIONS);
    questionIndex = 0;
    incorrectAnswers = 0;
    score = 0;
    timerEl.classList.remove('hidden');
    startButton.classList.add('hidden');
    const questionContainer = document.getElementById('game-container');
    questionContainer.classList.remove('hidden');
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.add('hidden');
    const homeContainer = document.getElementById('home-container');
    homeContainer.classList.add('hidden');
    showQuestion(questionIndex);
    startTimer();
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
    nextQuestionNumber();
    ResetSounds();
    clearInterval(timer);
    startTimer(); 
    const question = QUESTIONS[index];
    questionEl.innerText = question.questionText;
    //IMAGES for questions with images
    const questionImage = document.getElementById('question-image');
    if (question.img) {
        questionImage.src = question.img;
        questionImage.classList.remove('hidden'); 
    } else {
        questionImage.classList.add('hidden'); 
    }

    answerButtonsEl.innerHTML = '';
    replyEl.innerText = '';
    const buttons = answerButtonsEl.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = ''; 
    });

    question.answerOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn', 'answer-btn');
        //adds HOVER sound to buttons
        button.addEventListener('mouseover', () => {
            hoverSound.currentTime = 0; 
            hoverSound.play();
        });

        button.addEventListener('click', () => handleAnswer(option));
        answerButtonsEl.appendChild(button);
    });
}

//function to handle ANSWER

function handleAnswer(selectedAnswer) {
    clearInterval(timer); 
    const question = QUESTIONS[questionIndex];
//styles for right and wrong SELECTED answers RED and GREEN
    const buttons = answerButtonsEl.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.innerText === selectedAnswer) {
            button.style.backgroundColor = selectedAnswer === question.correctAnswer ? 'green' : 'red';
        }
        if (selectedAnswer !== question.correctAnswer && button.innerText === question.correctAnswer) {
            button.style.backgroundColor = 'green';
        }
    });
    if (selectedAnswer === question.correctAnswer) {
        score++;
        replyEl.innerText = "Correct!";
        replyEl.style.color = 'green';
        correctSound.play();
        
    } else {
        replyEl.innerText = "Incorrect!";
        replyEl.style.color = 'red';
        incorrectSound.play();
        incorrectAnswers++;
        if (incorrectAnswers >= 3) {
            endGame("lose");
            return;
        }
    }
    //TIMEOUT/ NEXT QUESTION. 
    setTimeout(() => {
        clearInterval(timer); 
        questionIndex++;
        if (questionIndex >= MAX_QUESTIONS || questionIndex >= QUESTIONS.length) {
            endGame('win');
        } else {
            showQuestion(questionIndex);
        }
    }, 2000);

}
// END GAME function

function endGame(result) {
    ResetSounds();
    // Hide the question container
    const questionContainer = document.getElementById('game-container');
    questionContainer.classList.add('hidden');

    // Display result message
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');

    scoreText.innerText = `${score} / ${MAX_QUESTIONS}`;
//RESULT TEXT
    if (result === "lose") {
        scoreText.innerText = `You lost! That's ${incorrectAnswers} incorrect answers...`;
        scoreText.style.color = 'white';
        loseSound.play();
    } else {
        scoreText.innerText = `Congratulations! Your score: ${score}/${MAX_QUESTIONS}`;
        scoreText.style.color = 'white';
        winSound.play();
    }

    startButton.classList.remove('hidden');
    startButton.innerText = 'Restart';
    const homeContainer = document.getElementById('home-container');
    homeContainer.classList.remove('hidden');
    const replyEl = document.getElementById('reply');
    replyEl.innerText = '';
    // const restartButton = document.getElementById('restart-btn')
    // restartButton.classList.add('hidden');
}
