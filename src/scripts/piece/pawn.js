import Piece from './piece';

class Pawn extends Piece {
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;

        this.moveDirections = this.moveDirections.bind(this);
        this.atStart  = this.atStart.bind(this);
        this.fowardDirections = this.fowardDirections.bind(this);
        this.fowardSteps = this.fowardSteps.bind(this);
        this.sideSteps = this.sideSteps.bind(this);
    }
    symbol() {
        // return "PAWN";
        // return `../assets/p${this.symbol[0]}.svg`;
        return (this.color === 'white' ? `../assets/pw.svg` : `../assets/pb.svg`);

    }

    moveDirections() {
        return this.fowardSteps().concat(this.sideSteps())
    }
    //Assumption that this.position[1] should return the y-coordinate of the 2d array.
    atStart(){
        return ( this.color === 'white' ? 1 : 6 ) ===  this.position[1]
    }

    fowardDirections(){
        return this.color === 'white' ? 1 : -1
    }

    fowardSteps(){
        let oneStep = [this.position[0] + this.fowardDirections(), this.position[1]];
        let twoStep = [this.position[0] + 2 * this.fowardDirections(), this.position[1]];
        let steps = [];
        if(this.board.isValidPosition(oneStep) && this.board.isEmpty(oneStep)){
            steps.push(oneStep)
            if(this.board.isValidPosition(twoStep) && this.board.isEmpty(twoStep) && this.atStart()){
                steps.push(twoStep)
            }
        }
        return steps
    }

    sideSteps(){
        let oppositeColor = (this.color === 'white' ?  'Black'  : 'white');
        let steps = [];
        let  moves =  [ [this.position[0] + this.fowardDirections,  this.position[1] + 1], [this.position[0] + this.fowardDirections, this.position[1] - 1]];
        for(let i = 0; i < moves.length; i++){
            if(this.board.isValidPosition(moves[i]) && this.board.rows[moves[i]].color === oppositeColor){
                steps.push(moves[i])
            }
        }
        return steps
    }


}

export default Pawn;