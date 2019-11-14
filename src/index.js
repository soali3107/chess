// create index.js in /src directory and import style /src / styles / index.scss
import './styles/index.scss';
// import Game from './scripts/board';
import Board from './scripts/board';
// this.game = new Game;
document.addEventListener("DOMContentLoaded", setUpBoard);
let board = new Board;

let clickCount = [];
function setUpBoard(){
    // debugger
    let chessBoard = document.getElementsByClassName("chess")[0];
    // debugger
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            //create  tile element for 
            let img = document.createElement("img");   
            // Create a <img> element
            // img.innerHTML = "CLICK ME";
            img.className = ((i + j) % 2 === 0 ? "black" : "white" );
            img.id = `${i}${j}`;
            // img.src = game.board.pos([i,j]);
            // if ( i < 2 )
            // if (i === 0) {
            //     img.src = '../assets/bb.svg';
            img.src = board.rows[i][j].symbol();
            // } else if (i > 6) {
            //     switch (j) {
            //         case j % 5 === 0:
            //     }
            // }
            // div.img.src = './assets/bb.svg';
            // img.onclick = "";
            // debugger
            chessBoard.appendChild(img);
            img.onclick = function (e) {
                e.preventDefault;
                const startPos = [i, j];
                if (clickCount.length === 0){
                    clickCount.push(startPos);
                    console.log('click1');
                    console.log(clickCount);
                }
                else {
                    console.log("start");
                    console.log(clickCount[0]);
                    console.log(startPos);
                    board.movePiece(clickCount[0], startPos)
                    clickCount = [];
                    console.log('click2')
                    console.log(clickCount);
                    // chessBoard.remove();
                    chessBoard.innerHTML = "";
                    setUpBoard();
                }
            }
               
        }
        ///<div><img onClick>
    };
};




// import Board from './scripts/board';
// instance of  board
// const a = new Board;
// console.log(a);

// new Game
// node file. 