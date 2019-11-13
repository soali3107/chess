class Piece {
    constructor(color, board, position){
        this.color =color;
        this.board = board;
        this.position = position;
        this.status = false;
    }
    validMoves(){
        //takes out moves  if it moves into check
    }

    isMovedIntoCheck(end_pos){
        //boolean if piece is in  check if in end position
    }
}

export default Piece;