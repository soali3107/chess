// let EXPORTED_VARIABLES = ["AxialDirections", "DiagonalDirections", "moves", "growingMoves"];

export const AxialDirections = [[1, 0], [0, 1], [-1, 0], [0, -1]];
export const DiagonalDirections = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
Object.freeze(AxialDirections);
Object.freeze(DiagonalDirections);

export function moves(directionalArray, position, board){
    let allMoves = [];
    console.log("moves2");
    console.log(allMoves);
    console.log(position);
    // console.log(board);
    for(let  i = 0; i < directionalArray.length; i++){
        console.log("Axial Direction: ", directionalArray[i]);
        allMoves = combine(allMoves, growingMoves(directionalArray[i][0], directionalArray[i][1], position, board)); 
        console.log("newMoves");
        console.log(allMoves);
    }
    return allMoves;
}

export function growingMoves(dx, dy, position, board){
    const oneDirectionalMoves = [];
    console.log("Grow");
    // console.log(this.position);
    let currentPosition = position;
    // console.log(board);
    currentPosition =  [currentPosition[0] + dy, currentPosition[1] + dx];
    let count = 0;
    while( board.isValidPosition(currentPosition) && count < 10){
    // while (false){
        console.log(count += 1);
        oneDirectionalMoves.push(currentPosition);
        currentPosition = [currentPosition[0] + dx, currentPosition[1] + dy];
    }
    return oneDirectionalMoves
}

function combine(arr1, arr2){
    for(let  i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
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
