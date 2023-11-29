Movie Trivia Game
A simple movie themed trivia game. 
Lasting about 5 of so rounds
Using JavaScript, HTML, CSS.
basic pseudocode and outline in the screenshot 

 Set up game.  
Create a list of gameQuestions
Each Question will have the question text, possible answers, and the correct answer.
 Start the game
 Create reset 
 Create a list of questions
 Ask series of questions in a random order
 gain a point for each correct response. 
 set up event listeners on the buttons
  total added at the end
  reset 


Movie Trivia Funtime

## Overview
Its a trivia game. Players answer a series of movie-related questions, randomly picked from a predefined sets. The game tracks the player's score and progress through different questions. At the end of the game, players are presented with their final score and the option to play again. 

## User Stories

```
As a user, I want the ability to... 

- Click responsive buttons
- A sound alert
- A clean ui
- random question
- multiplayer option
- a question timer
- themes and catergories

---Maybe, possibly want to---
- sign up.
- sign in. 
- change my password. 
- sign out. 

```

## Wireframes / Screenshots


![wireframes1](/Users/briantaylor/code/triviagame-project1/screenshot.png)


## Psuedocode

-Initialize gameState  
- Set up game. 
- Create game questions
- create game anwsers 
- create Array of gameQuestions 
- Each Question contains the question text,
- possible answers, and the correct answer.
- function to start game
- reset handler 
- function for showing question
- function for showing awnsers
- event listeners for the buttons
- create buttons
- end game screen



2) Define required variables used to track the state of the game

1) Define required constants
```js
  /*----- constants -----*/
    const GAME_QUESTIONS = 5;
    const TIME_LIMIT = //maybe 15 or 30

 /*----- state variables -----*/

gameState: [] //array
indexOfQuestions
totalQuestions 
totalScore

