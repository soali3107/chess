import Piece from './piece';
import { AxialDirections, moves } from './slideable';

class Rook extends Piece {
    constructor(color, board, position){
        super(color, board, position);
        this.status = true;

    }
    symbol() {
        return "ROOK";
    }

    moveDirections(){
        return  moves(AxialDirections)
    }
}

export default Rook;