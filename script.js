//HTML element 
const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("start");

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
            const squareValue = `${rowIndex}${columnndex}`;
            const squareElement = document.createElement('div');
            squareElement.setAttribute("class","square emptySquare");
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);
        })
        
    })

}

const setGame = () =>{
    snake = ["00","01","02","03"];
    score = snake.length;
    direction = "ArrowRight";
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareType.emptySquare));
    console.log(boardSquares);
    board.innerHTML ="";
    emptySquares = [];
    careteBoard();
}

const startGame = () => {
    setGame();
} 

startButton.addEventListener("click", startGame );
