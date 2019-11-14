import Piece from './piece';
import { DiagonalDirections, moves } from './slideable';
// let piece = NodeRequire './piece';

class Bishop extends Piece{
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;
        this.symbol = this.symbol.bind(this);

    }
    symbol() {
        // return "BISHOP";
        // return `../assets/b${this.symbol[0]}.svg`;
        return (this.color === 'white' ? `./assets/bw.svg` : `./assets/bb.svg`);

    }

    moveDirections() {
        return moves(DiagonalDirections)
    }
}

export default Bishop;