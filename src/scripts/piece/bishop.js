import Piece from './piece';
import { DiagonalDirections, moves } from './slideable';
// let piece = NodeRequire './piece';

class Bishop extends Piece{
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;
        this.symbol = this.symbol.bind(this);
        this.moveDirections= this.moveDirections.bind(this);
        this.moves = moves.bind(this);
        // this.DiagonalDirections = DiagonalDirections.bind(this);

    }
    symbol() {
        // return "BISHOP";
        // return `../assets/b${this.symbol[0]}.svg`;
        return (this.color === 'white' ? `./assets/bw.svg` : `./assets/bb.svg`);

    }

    moveDirections() {
        return moves(DiagonalDirections, this.position, this.board)
    }
}

export default Bishop;