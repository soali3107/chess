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
        return "PAWN";
    }

    moveDirections() {
        return this.fowardSteps().concat(this.sideSteps())
    }

    atStart(){
        return ( this.color === 'White' ? 1 : 6 ) ===  this.position[1]
    }

    fowardDirections(){
        return this.color === 'White' ? 1 : -1
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
        let oppositeColor = (this.color === 'White' ?  'Black'  : 'White');
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