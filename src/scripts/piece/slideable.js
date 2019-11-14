// let EXPORTED_VARIABLES = ["AxialDirections", "DiagonalDirections", "moves", "growingMoves"];

export const AxialDirections = [[1, 0], [0, 1], [-1, 0], [0, -1]];
export const DiagonalDirections = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
Object.freeze(AxialDirections);
Object.freeze(DiagonalDirections);

export function moves(directionalArray, position, board){
    const allMoves =[];
    console.log("moves2");
    console.log(board);
    for(let  i = 0; i < directionalArray.length; i++){
        allMoves.push(growingMoves(directionalArray[0], directionalArray[1], position, board)) 
    }
    return allMoves;
}

export function growingMoves(dx, dy, position, board){
    const oneDirectionalMoves = [];
    console.log("Grow");
    // console.log(this.position);
    let currentPosition = position;
    console.log(board);
    currentPosition =  [currentPosition[0] + dx, currentPosition[1] + dy];
    while( board.isValidPosition(currentPosition) ){
        return oneDirectionalMoves
    }
}
// export default Slideable;

// import Board from "../board";
// import Piece from './piece';

// class Slideable extends Board{
//     //Axial Directions: Directions of the axis (x- and y-) 
//     constructor(){
//         // super();

//         const AxialDirections = [[1,  0], [0, 1], [-1,  0], [0, -1]];
//         const DiagonalDirections = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
//         Object.freeze(AxialDirections);
//         Object.freeze(DiagonalDirections);
//     }


//     growingMoves(dx, dy){
//         const oneDirectionalMoves = [];
//         let currentPosition = this.position;
//         currentPosition =  [currentPosition[0] + dx, currentPosition[1] + dy];
//         while(super.validPosition(currentPosition)){
        
//             return oneDirectionalMoves
//         }
//     }
// }
