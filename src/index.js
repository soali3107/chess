// create index.js in /src directory and import style /src / styles / index.scss
import './styles/index.scss';
// import Game from './scripts/board';
import Board from './scripts/board';
import Queen from './scripts/piece/Queen';
import Pawn from './scripts/piece/pawn';
// this.game = new Game;
document.querySelector('.reset').addEventListener('click', () =>{
    board2 = new Board;
    clickCount = [];
    document.getElementsByClassName("chess")[0].innerHTML = "";
    updateBoard();
});
document.addEventListener("DOMContentLoaded", () =>{
    updateBoard();
});

let clickCount = [];
let board2 = new Board();
function updateBoard(){
    // debugger
    // document.getElementsByClassName("chess").innerHTML = "";
    console.log(document.getElementsByClassName("chess"));
    let chessBoard = document.getElementsByClassName("chess")[0];
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
                    console.log('being pushed');
                }
                else if (clickCount.length === 0){
                    console.log('wrong color');
                }
                else {
                    board2.movePiece(clickCount[0], startPos)
                    let currentPiece = board2.rows[startPos[0]][startPos[1]];
                    if (currentPiece instanceof Pawn && (startPos[0] === 0 || startPos[0] === 7)){
                        currentPiece = board2.promotion(startPos, Queen);
                    }
                    clickCount = [];
                    chessBoard.innerHTML = "";
                    updateBoard();
                }
            }
               
        }
    };
    
    
};

function updateMessages(){
    if (board2.checkmate){
        document.querySelector('.check').textContent= `${board.currentPlayer()} is in `;
    }
}


// import Board from './scripts/board';
// instance of  board
// const a = new Board;
// console.log(a);

// new Game
// node file. 