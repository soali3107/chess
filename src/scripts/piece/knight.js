import Piece from './piece';
import { allMoves } from './stepable';

class Knight extends Piece {
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;
        this.moveDirections = this.moveDirections.bind(this);
    }
    symbol() {
        // return "KNIGHT";
        // return `../assets/n${this.symbol[0]}.svg`;
        return (this.color === 'white' ? `./assets/nw.svg` : `./assets/nb.svg`);
    }

    moveDirections() {
        const moves = [ [1, 2], [2, 1], [1, -2], [2, -1],
                        [-1, 2], [-2, 1], [-1, -2], [-2, -1] ]
        return allMoves(moves, this.position, this.board)
    }
}

export default Knight;