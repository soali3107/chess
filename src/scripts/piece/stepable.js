import Board from "../board";

export function allMoves(moves, color){
    const possibleMoves = [];
    for(let i = 0; i < moves.length; i++){
        let potentialMoves = moves(i)
        let newPosition = [this.position[0] + potentialMoves[0], this.position[1] + potentialMoves[1] ]
        if(board.isValidPosition(newPosition) && (board.position(newPosition).color === color)){
            possibleMoves.push(newPosition)
        }
    }
    return possibleMoves
}