// create index.js in /src directory and import style /src / styles / index.scss
import './styles/index.scss';
// import Game from './scripts/board';
import Board from './scripts/board';
import Queen from './scripts/piece/Queen';
import Pawn from './scripts/piece/pawn';
// this.game = new Game;

document.addEventListener("DOMContentLoaded", () =>{
    updateBoard();
    reset();
});

let clickCount = [];
let board2 = new Board();
function updateBoard(){
    let chessBoard = document.getElementsByClassName("chess")[0];
    let valid = document.getElementsByClassName("valid")[0];
    updateMessages();    
    // debugger
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            //create  tile element for 
            let img = document.createElement("img");   
            img.className = ((i + j) % 2 === 0 ? "black" : "white" );
            img.id = `${i}${j}`;
            img.src = board2.rows[i][j].symbol();
            chessBoard.appendChild(img);
            img.onclick = function (e) {
                e.preventDefault;
                const startPos = [i, j];
                if (clickCount.length === 0 && board2.rows[startPos[0]][startPos[1]].color === board2.currentPlayer){
                    clickCount.push(startPos);
                    valid.textContent = `Pick where to move ${board2.currentPlayer} piece`;
                    // console.log('being pushed');
                }
                else if (clickCount.length === 0){
                    // console.log('wrong color');
                    valid.textContent = `Pick ${board2.currentPlayer} piece to move.`;
                }
                else {
                    board2.movePiece(clickCount[0], startPos);
                    valid.textContent = `Pick ${board2.currentPlayer} piece to move.`;
                    let currentPiece = board2.rows[startPos[0]][startPos[1]];
                    if (currentPiece instanceof Pawn && (startPos[0] === 0 || startPos[0] === 7)){
                        currentPiece = board2.promotion(startPos, Queen);
                    }
                    // console.log("White is in check: ", board2.checkmate('white'));
                    clickCount = [];
                    chessBoard.innerHTML = "";
                    updateBoard();
                }
            }
               
        }
    };
    
    
};

function reset(){
    document.getElementsByClassName('reset')[0].addEventListener('click', () => {
        board2 = new Board;
        clickCount = [];
        document.getElementsByClassName("chess")[0].innerHTML = "";
        updateBoard();
    });
}


function updateMessages(){
    let isCheck = document.getElementsByClassName("check")[0]; 
    let turn = document.getElementsByClassName("turn")[0];
    turn.textContent = board2.currentPlayer[0].toUpperCase() + board2.currentPlayer.slice(1) + "'s Turn";
    console.log(board2.checkmate('white'));
    console.log(board2.checkmate('black'));
    console.log('----------');
    // debugger;
    console.log(board2);
    if (board2.checkmate('white')){
        isCheck.textContent = `White is in checkmate!`;
        turn.textContent = '';
    }
    else if (board2.checkmate('black')){
        isCheck.textContent = 'Black is in checkmate!';
        turn.textContent = '';
    }
    else if (board2.check('white')){
        isCheck.textContent = 'White is in check!';
    }
    else if (board2.check('black')){
        isCheck.textContent = 'Black is in check!';
    }
    else {
        isCheck.textContent = '';
    }
}

// import Board from './scripts/board';
// instance of  board
// const a = new Board;
// console.log(a);

// new Game
// node file. 