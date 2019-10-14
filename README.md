## TIC-TAC-TOE Project

For this project we were desginated to create a tic tac toe game where the user verses
themselves by clicking either "X" or "O" in the squares provided. We had to determine
a winner between either "X" or "O", as well as a tie game.

## Development Process

- Starting this project I initially used my wire frame to lay down a basic tic tac toe
layout through HTML with some CSS styling.
- I then began working on the user API with creating a signIn / signUp login while also
working on some JavaScript functions.
- Continued working on JavaScript to complete game functionality and once this was
figured out I began working on the game API.
- Worked on the games API by using the store.js to have data collected and using ajax to send a request to the server.
As we play the game it is constantly being updated with user data such as a games id, a value of 'X' or 'O',
an index of where in the array the move was made, and over to determine if the game
was completed or not and we are sent back response data from the server.
- Finally, I worked on the styling of the game with CSS and made the user experience appealing.


## WireFrames / User Stories

https://i.imgur.com/KJf46D7.jpg?1

- As a user, I would like to create a username and start a new game.
- As a user, I would like to start a new game upon winning or losing & keep playing.
- As a user, I would like a list of instructions on how to play so I can enhance my skill.
- As a user, I would like a nice prompt message telling me I have won/lost.
- As a user, I would like a clean layout that is visually appealing.
- As a user, I would like success and error messages informing me after I have done actions.

## Future Additions

- Create a user vs. computer AI mode.
- Be able to track the amount of games each specific user has played, and their
wins / losses.
- Play audio sound for when you click each square and for when you win the game.
- Hightlight a row when a user has won the game.


## Technologies
For this project I used:
* JavaScript
* HTML
* CSS
* jQuery
* DOM
* AJAX
* Bootstrap
* SASS

## Setup
1) To run this project, fork and clone this GitHub repository.
2) Checkout into a new branch.
3) Install dependencies with npm install.
4) Run grunt serve to pull up the local host and run this project locally.
