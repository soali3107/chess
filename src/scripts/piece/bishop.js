import Piece from './piece';
import { DiagonalDirections, moves } from './slideable';
// let piece = NodeRequire './piece';

class Bishop extends Piece{
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;

    }
    symbol() {
        return "BISHOP";
    }

    moveDirections() {
        return moves(DiagonalDirections)
    }
}

export default Bishop;