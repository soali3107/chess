import Piece from './piece';

class King extends Piece{
    constructor(color, board, position) {
        super(color, board, position);
        this.status = true;

    }
    symbol() {
        // return "KING";
        return `../assets/k${this.symbol[0]}.svg`;
    }

    moveDirections() {
        const moves = [[1,0], [1, 1], [0, 1], [-1, 1],
                         [-1, 0], [-1, -1], [0, -1], [1, -1]]
    }
}

export default King;