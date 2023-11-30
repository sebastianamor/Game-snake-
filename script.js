//HTML element 
const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("gameOver");

// Game seatting 
const boardSize = 10;
const gameSpeed = 100;
const squareType = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
}

// game variables

let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const setGame = () =>{
    snake = ["00","01","02","03"];
    score = snake.length;
    direction = "ArrowRight";
    boardSquares = Array.from(Array(boardSize), () => new Array (boardSize).fill(squareType.emptySquare));
}

const startGame = () => {
    setGame();
} 

startButton.addEventListener("click",startGame);
