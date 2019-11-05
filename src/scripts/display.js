// class Display {
//     constructor(board){
//         this.board = board;
//         const chessBoard = document.getElementsByClassName("chess")[0];
//         for (let i = 0; i < 8; i++) {
//             for (let j = 0; j < 8; j++) {
//                 let img = document.createElement("img");
//                 img.className = ((i + j) % 2 === 0 ? "black" : "white");
//                 img.id = `${i}${j}`;
//                 chessBoard.appendChild(img);
//             }
//         };
//     }
// }