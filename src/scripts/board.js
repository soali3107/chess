// import Piece from './piece/piece';

import King from './piece/king';
import Knight from './piece/knight';

import Queen from './piece/Queen';
import Rook from './piece/rook';
import Bishop from './piece/bishop';

import NullPiece from './piece/nullpiece';
import Pawn from './piece/pawn';
import Piece from './piece/piece';


class Board {
    constructor(){
        this.rows = [];
        // this.noPiece = new NullPiece("null", this); 
        for (let i = 0; i < 8; i++){
            this.rows[i] = [];
            for (let j = 0;  j  < 8; j++){
                this.rows[i][j] = new NullPiece("null", this, [i, j]); 
            }
        }
        // Might need to bind "this"

        this.populateBoard = this.populateBoard.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.movePiece  = this.movePiece.bind(this);
        this.position = this.position.bind(this);
        this.populateBoard();
    }

    populateBoard(){
        const color =  ["White", "Black"];
        for(let  i  = 0; i < this.rows.length; i++){
            for(let j = 0; j < this.rows[i].length; j++){
                let position  = [i, j];
                if (i  === 0 || i === 7){
                    // this.rows [position[0]][position[1]] = new (this.backRow(j))(color[i % 2], this, position);
                    const chessPiece = this.backRow(j);
                    this.rows[position[0]][position[1]] = new chessPiece(color[i % 2], this, position);

                }
                else if (i === 1 || i === 6){
                    this.rows[position[0]][position[1]] = new Pawn(color[(i + 1) % 2], this, position);
                }
            }
        }
    }

    backRow(index){
        const backPieces= [Rook, Knight, Bishop, Queen, King];
        return backPieces[index % 5]
    }

    isEmpty(pos) {
        return this.isValidPosition && this.rows[pos].color ===  'null'
    }

    movePiece(turnColor, startPos, endPos){
        piece = this.rows[startPos];
        finalPiece = this.rows[endPos];
        if(piece.color != turnColor && piece.moves.includes(endPos)){
            this.rows[endPos] = piece;
            this.rows[startPos] = new NullPiece("null", this, startPos); 
        }
    }

    isValidPosition(pos){
        let bool = true
        for(let i = 0; i < pos.length ; i++){
            if (pos[i] <  0 ||   pos[i] >  7){
                bool = false;
            }
        }
        return  bool
    }

    //Newmethod
    position(pos){
        this.rows[pos]
    }

    checkMate(){
        false
    }
}

export default Board;