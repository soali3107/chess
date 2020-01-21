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
        this.currentPlayer = "white";
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
        this.isValidPosition =this.isValidPosition.bind(this);
        this.position = this.position.bind(this);
        this.includesPosition = this.includesPosition.bind(this);
        this.changeCurrentPlayer = this.changeCurrentPlayer.bind(this);
        this.promotion = this.promotion.bind(this);
        this.populateBoard();
    }

    populateBoard(){
        const color =  ["black", "white"];
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

    movePiece(startPos, endPos = []){
        // console.log("movePiece");
        // console.log(turnColor);
        // console.log(startPos);
        // console.log(endPos);
        let piece = this.rows[startPos[0]][startPos[1]];
        // let finalPiece = this.rows[endPos];
        // console.log(this);
        // console.log(this.rows[startPos[0]][s tartPos[1]]);
        // console.log(this.rows[endPos[0]][endPos[1]]);
        // console.log(piece);
        // console.log(piece.color);
        // console.log(this.currentPlayer);
        // console.log(piece.moveDirections());
        // console.log(endPos);
        // console.log(this.includesPosition(piece.moveDirections, endPos));
        if (piece.color === this.currentPlayer && (this.includesPosition(piece.moveDirections(), endPos))){
            // console.log("HELOOOOOO");
            this.rows[endPos[0]][endPos[1]] = piece;
            this.rows[startPos[0]][startPos[1]] = new NullPiece("null", this, startPos); 
            this.changeCurrentPlayer();
            // this.piece.movePosition(endPos);
            this.rows[endPos[0]][endPos[1]].movePosition(endPos);
            // console.log(this.currentPlayer);
        }
    }

    isValidPosition(pos){
        let bool = true
        for(let i = 0; i < pos.length ; i++){
            // debugger
            if (pos[i] <  0 ||   pos[i] >  7 ){
                bool = false;
            }
        }
        // debugger
        return bool && this.rows[pos[0]][pos[1]].color !== this.currentPlayer
    }

    promotion(pos, newPiece){
        let oldPiece = this.rows[pos[0]][pos[1]];
        debugger;
        this.rows[pos[0]][pos[1]] = new newPiece (oldPiece.color, this, oldPiece.position);
    }
    //Newmethod
    position(pos){
        this.rows[pos]
    }

    includesPosition(arr1, arr2) {
        // console.log("includesPosition");
        // console.log(arr1);
        // console.log(arr2);
        for (let i = 0; i < arr1.length; i++) {
            // console.log(arr1[i]);
            if (this.areEqualArrays(arr1[i], arr2)) {
                return true
            }
        }
        return false;
    }

    areEqualArrays(arr1, arr2) {
        let  count = arr2.length;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[i]) {
                count -= 1;
            }
        }
        if (count === 0) {
            return true
        }
        else {
            return false
        }
    }

    changeCurrentPlayer(){
        this.currentPlayer = (this.currentPlayer === "white" ? "black" : "white")
    }

    checkMate(){
        false
    }
}

export default Board;