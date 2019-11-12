import Piece from './piece';

class NullPiece extends Piece  {
    constructor(color, board, position){
        super(color, board, position);
        // this.board = board;
        // this.position = position;
        // this.color = "none";
        // this.symbol = "null";
        this.moves  = [];
    }
    symbol() {
        return `//:0`;
    }
};

//Singleton: https://www.sitepoint.com/javascript-design-patterns-singleton/
Object.freeze(NullPiece);
export default NullPiece;