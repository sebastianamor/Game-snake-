//HTML element 
const board = document.getElementById("board");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("start");
const gameOverSign = document.getElementById('gameOver');

// Game seatting 
const boardSize = 10;
const gameSpeed = 70;
let blockedButtons = false;
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

const drawSnake = () => {
    snake.forEach( square => drawSquare(square, 'snakeSquare'));
}

// rellena cada cuadrado del tablero 
// @params
//square : posicion del cuadrado
//type : tipos de cuadrado (emptySquare, snakeSquare , foodSquare)

const drawSquare = (square, type) => {
    const [row , columns ] = square.split('');
    boardSquares[row][columns] = squareType [type];
    const squareElement = document.getElementById(square);
    squareElement.setAttribute('class','square ${type}');

    if(type === "emptySquare") {
        emptySquares.push(square); 
    } else {
        if (emptySquares.indexOf(square) !== -1 ) {
            emptySquares.splice(emptySquares.indexOf(square), 1);

        }
    }
} 

const moveSnake = () =>{
    const newSquare = String (
        Number (snake[snake.length - 1]) + directions[direction])
       .padStart(2,"0");
    const [row , column] = newSquare.split('');
       
    if (newSquare  , 0 || 
        newSquare > boardSize * boardSize || 
        (direction === "ArrowRight" && column == 0 ) ||
        ( direction === "ArrowLeft"  &&  column == 9 ||
        boardSquares[row][column] === 1)) {
        gameOver();
        } else {
            snake.push(newSquare);
            if(boardSquares [row][column] === 2 ){
                 addFood();
            } else {
                const emptySquare = snake.shift();
                drawSquare(emptySquare,'emptySquare', 0);
            }
            drawSnake();
        }
      
}

 const addFood = () => {
    score++;
    updateScore();
    createRandomFood();
 }


const gameOver = () => {
    gameOverSign.style.display = 'block';
    clearInterval(moveInterval)
    startButton.disabled = false;
}

const setDirection = newDirection => {
    direction = newDirection;
}

const directionEvent = key => {
    switch (key.code) {
        case 'ArrowUp':
            direction != "ArrowDown" && setDirection(key.code)
            break;
        case 'ArrowDown':
            direction != "Arrowup" && setDirection(key.code)
                break;
        case 'ArrowLeft':
            direction != "ArrowRight" && setDirection(key.code)
             break;
        case 'Arrowright':
            direction != "ArrowLeft" && setDirection(key.code)
                break;
                             
    }
}

const createRandomFood = () => {
    const randomEmptySqure = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    drawSquare(randomEmptySqure, "foodSquare");

}

const updateScore = () => {
    scoreBoard.innerText = score;

}


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
    gameOverSign.style.displey = "none";
    startButton.displey = true;
    drawSnake();
    updateScore();
    createRandomFood();
    document.addEventListener("keydown",directionEvent);
    moveInterval = setInterval(() => moveSnake(), gameSpeed );
} 

startButton.addEventListener("click", startGame );
