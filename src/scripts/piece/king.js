import Piece from './piece';

class King extends Piece{
    constructor(color, board, position) {
        super(color, board, position);
        this.status = true;

    }
    symbol() {
        return "KING";
    }

    moveDirections() {
        const moves = [[1,0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]]
        
    }
}

export default King;