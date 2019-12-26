import Board from "../board";

export function allMoves(moves, position, board){
    const possibleMoves = [];
    for(let i = 0; i < moves.length; i++){
        let potentialMoves = moves[i];
        let newPosition = [position[0] + potentialMoves[0], position[1] + potentialMoves[1] ]
        if(board.isValidPosition(newPosition)){
            possibleMoves.push(newPosition)
        }
    }
    return possibleMoves
}