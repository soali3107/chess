import Piece from './piece';
import { AxialDirections, DiagonalDirections, moves } from './slideable';

class Queen extends Piece {
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;

        this.moveDirections = this.moveDirections.bind(this);

    }
    symbol() {
        // return `../assets/q${this.symbol[0]}.svg`;
        return (this.color === 'white' ? `./assets/qw.svg` : `./assets/qb.svg`);
    }

    moveDirections() {
        // console.log("Axial + Diagonal", AxialDirections.concat(DiagonalDirections)[0] );
        return moves(AxialDirections.concat(DiagonalDirections), this.position, this.board)
    }  
}

export default Queen;