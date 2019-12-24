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
        return (this.color === 'white' ? `./assets/pw.svg` : `./assets/pb.svg`);

    }

    moveDirections() {
        // console.log("movedPawn");
        // console.log(this.fowardDirections())
        return [this.fowardDirections()]
    }
    //Assumption that this.position[1] should return the y-coordinate of the 2d array.
    atStart(){
        return ( this.color === 'white' ? 1 : 6 ) ===  this.position[1]
    }


    fowardDirections(){
        let direction = this.color === 'white' ? -1 : 1;
        return [direction + this.position[0], this.position[1]]
    }

    fowardSteps(){
        let oneStep = [this.position[0], this.position[1] + this.fowardDirections()];
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
        console.log(this.position);
        let direction = this.fowardDirections();
        let  moves =  [ [this.position[0] + direction,  this.position[1] + 1], [this.position[0] + direction, this.position[1] - 1]];
        for(let i = 0; i < moves.length; i++){
            let coord = moves[i];
            console.log(coord);
            if(this.board.isValidPosition(moves[i]) && this.board.rows[coord[0]][coord[1]].color === oppositeColor){
                steps.push(moves[i])
            }
        }
        return steps
    }


}

export default Pawn;