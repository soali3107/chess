import Piece from './piece';

class Pawn extends Piece {
    constructor(color, board, position) {
        super(color, board, position);
        this.status = false;

        this.moveDirections = this.moveDirections.bind(this);
        this.direction = this.direction.bind(this);
        this.atStart  = this.atStart.bind(this);
        this.allMoves = this.allMoves.bind(this);

        this.forwardDirections = this.forwardDirections.bind(this);
        this.forwardSteps = this.forwardSteps.bind(this);
        this.sideSteps = this.sideSteps.bind(this);
    }
    symbol() {
        // return "PAWN";
        // return `../assets/p${this.symbol[0]}.svg`;
        return (this.color === 'white' ? `./assets/pw.svg` : `./assets/pb.svg`);

    }

    moveDirections() {
        // console.log("movedPawn");
        // console.log(this.forwardDirections())
        // let mainMove = this.forwardDirections();

        // Consists of forward moves
            //Two Step Forward Moves
        let allMoves = [];
        if (this.forwardDirections().length > 0) {
            // debugger;
            allMoves.push(this.forwardDirections());
            if (allMoves.length > 0 && this.atStart()) {
                allMoves.push([this.direction() + this.forwardDirections()[0], this.forwardDirections()[1]])
            }
        }
        //  Diagonal Moves.
        let diagonalMoves = this.sideSteps();
        for(let i = 0; i < diagonalMoves.length; i++){
            allMoves.push(diagonalMoves[i]);
        }
        return allMoves;
        // if (this.atStart()){
        //     return [mainMove, [this.direction() + mainMove[0], mainMove[1]]]
        // }
        // else{
        //     return [mainMove]
        // }
    }

    direction() {
        return this.color === 'white' ? -1 : 1;
    }

    atStart(){
        return ( this.color === 'white' ? 6 : 1 ) ===  this.position[0]
    }

    allMoves(){
        //Consists of diagonal Killing  Moves
        //Passant
    }

    // Consists of 0-1 Steps Forward
    forwardDirections(){
        let front = this.direction()  + this.position[0];
        let forward =  [];
        if (front  >= 0 && front  < 8){
            forward = [this.direction() + this.position[0], this.position[1]];
        }
        else {
            return [];
        }
        if (this.board.rows[forward[0]][forward[1]].color === 'null'){
            return forward;
        }
        else {
            return [];
        }
    }

    forwardSteps(){
        let oneStep = [this.position[0], this.position[1] + this.forwardDirections()];
        let twoStep = [this.position[0] + 2 * this.forwardDirections(), this.position[1]];
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
        let oppositeColor = (this.color === 'white' ?  'black'  : 'white');
        let forward = [this.direction() + this.position[0], this.position[1]];
        let steps = [];
        let moves = [];
        let left = forward[1] - 1;
        let right = forward[1] + 1;
        if (left >= 0 && left < 8){
            moves.push([forward[0], left]);
        }
        if (right >= 0 && right < 8){
            moves.push([forward[0], right]);
        }
        // let  moves =  [, [forward[0] , forward[1] - 1]];
        // debugger
        for(let i = 0; i < moves.length; i++){
            let coord = moves[i];
            if(this.board.isValidPosition(coord) && this.board.rows[coord[0]][coord[1]].color === oppositeColor){
                steps.push(coord)
            }
        }
        return steps
    }


}

export default Pawn;