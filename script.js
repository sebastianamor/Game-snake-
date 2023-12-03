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

const careteBoard = () => {
    boardSquares.forEach( (row, rowIndex) => {
        row.forEach( (column,columnndex) => {
            const sqareValue = `${rowIndex}${columnndex}`;
            const sqareElement = document.createElement('div');
            sqareElement.setAttribute("class","square emptySquare");
            sqareElement.setAttribute('id', sqareValue);
            board.appendChild(sqareElement);
            emptySquares.push(sqareValue);
        })
        
    })

}

const setGame = () =>{
    snake = ["00","01","02","03"];
    score = snake.length;
    direction = "ArrowRight";
    boardSquares = Array.from(Array(boardSize), () => new Array (boardSize).fill(squareType.emptySquare));
    console.log(boardSquares);
    board.innerHTML ="";
    emptySquares = [];
    careteBoard();
}

const startGame = () => {
    setGame();
} 

startButton.addEventListener("click",startGame);
