import Piece from './piece';
import { allMoves } from './stepable';

class King extends Piece{
    constructor(color, board, position) {
        super(color, board, position);
        this.status = true;
        this.moveDirections = this.moveDirections.bind(this);
    }
    symbol() {
        // return "KING";
        // return `../assets/k${this.symbol[0]}.svg`;
        return (this.color === 'white' ? `./assets/kw.svg` : `./assets/kb.svg`);
    }

    moveDirections() {
        const moves = [[1,0], [1, 1], [0, 1], [-1, 1],
                         [-1, 0], [-1, -1], [0, -1], [1, -1]];
        return allMoves(moves, this.position, this.board);
    }
}

export default King;