class Piece {
    constructor(color, board, position){
        this.color =color;
        this.board = board;
        this.position = position;
        this.status = false;

        this.movePosition = this.movePosition.bind(this);
    }

    movePosition(pos){
        this.position = [pos[0], pos[1]];
    }

    validMoves(){
        //takes out moves  if it moves into check
    }

    isMovedIntoCheck(end_pos){
        //boolean if piece is in  check if in end position
    }
}

export default Piece;