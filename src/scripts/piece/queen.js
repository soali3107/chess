import Piece from './piece';
import { AxialDirections, DiagonalDirections, moves } from './slideable';

class Queen extends Piece {
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;

    }
    symbol() {
        return `../assets/q${this.symbol[0]}.svg`;
    }

    moveDirections() {
        return moves(AxialDirections.concat(DiagonalDirections))
    }  
}

export default Queen;