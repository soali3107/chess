import Piece from './piece';

class Knight extends Piece {
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;
        this.addition = this.addition.bind(this);

    }
    symbol() {
        // return "KNIGHT";
        // return `../assets/n${this.symbol[0]}.svg`;
        return (this.color === 'white' ? `./assets/nw.svg` : `./assets/nb.svg`);
    }

    moveDirections() {
        const moves = [ [1, 2], [2, 1], [1, -2], [2, -1],
                        [-1, 2], [-2, 1], [-1, -2], [-2, -1] ]
        return moves.map(addition)
    }

    addition(arr){
        return [[this.position[0] + arr[0]], [this.position[1] + arr[1]] ]
    }
}

export default Knight;