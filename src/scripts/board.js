// import Piece from './piece/piece';

import King from './piece/king';
import Knight from './piece/knight';

import Queen from './piece/Queen';
import Rook from './piece/rook';
import Bishop from './piece/bishop';

import NullPiece from './piece/nullpiece';
import Pawn from './piece/pawn';
import Piece from './piece/piece';

import Display from './display';

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

        this.currentPlayer = "white";
    }

    populateBoard(){
        const color =  ["white", "black"];
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
        const backPieces= [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];
        return backPieces[index]
    }

    isEmpty(pos) {
        return this.isValidPosition && this.rows[pos[0]][pos[1]].color ===  'null'
    }

    movePiece(startPos, endPos){
        console.log("movePiece");
        // console.log(turnColor);
        // console.log(startPos);
        // console.log(endPos);
        let piece = this.rows[startPos[0]][startPos[1]];
        // let finalPiece = this.rows[endPos];
        // console.log(this);
        // console.log(this.rows[startPos[0]][startPos[1]]);
        // console.log(this.rows[endPos[0]][endPos[1]]);
        console.log(piece);
        console.log(piece.color);
        console.log(this.currentPlayer);
        console.log(piece.moveDirections());
        // if(piece.color === this.currentPlayer && (piece.moveDirections()).includes(endPos)){
            console.log("HELOOOOOO");
            this.rows[endPos[0]][endPos[1]] = piece;
            this.rows[startPos[0]][startPos[1]] = new NullPiece("null", this, startPos); 
            this.currentPlayer = (this.currentPlayer === "white" ? "black" : "white");
        // }
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