// create index.js in /src directory and import style /src / styles / index.scss
import './styles/index.scss';
import Piece from './scripts/piece/piece';

document.addEventListener("DOMContentLoaded", setUpBoard);

function setUpBoard(){
    // debugger
    const chessBoard  = document.getElementsByClassName("chess")[0];
    // debugger
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            //create  tile element for 
            let img = document.createElement("img");   
            // Create a <img> element
            // img.innerHTML = "CLICK ME";
            img.className = ((i + j) % 2 === 0 ? "black" : "white" );
            img.class = `${i}${j}`;
            // if (i < 2 a)
            img.src = '../assets/bb.svg';
            // img.onclick = "";
            debugger
            chessBoard.appendChild(img);   
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