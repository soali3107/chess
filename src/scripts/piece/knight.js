import Piece from './piece';

class Knight extends Piece {
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;

    }
    symbol() {
        return "KNIGHT";
    }

    moveDirections() {
        const moves = [ [1, 2], [2, 1], [1, -2], [2, -1], [-1, 2], [-2, 1], [-1, -2], [-2, -1] ]
        
    }
}

export default Knight;