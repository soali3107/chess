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
        this.findKing = this.findKing.bind(this);
        this.check = this.check.bind(this);
        this.checkmate = this.checkmate.bind(this);
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
        // old isValidPosition
        return this.isOnBoard() && this.rows[pos[0]][pos[1]].color ===  'null'
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
        console.log(this.checkmate('black'))
        // debugger
    }

    findKing(inputColor){
        const king = (inputColor === 'white' ? `./assets/kw.svg` : `./assets/kb.svg`)
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if (this.rows[i][j].symbol() == king && this.rows[i][j].color == inputColor ){
                    return [i, j]
                }
            }
        }
    }

    check(inputColor){
        const kingPosition = this.findKing(inputColor)
        const oppColor = (inputColor == 'white' ? 'black' : 'white')
        for(let i = 0; i  < 8; i++){
            for(let j = 0; j  < 8; j++){
                if(this.rows[i][j].color == oppColor && this.includesPosition(this.rows[i][j].moveDirections(), kingPosition )){
                    return true
                }
            }
        }
        return false
    }
    
    checkmate(inputColor){
        const kingPosition = this.findKing(inputColor)
        const oppColor = (inputColor == 'white' ? 'black' : 'white')
        let bool = false
        if (this.check(inputColor)){
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if (this.rows[i][j].color == inputColor){
                        let piece = this.rows[i][j]
                        let moves = piece.moveDirections()
                        let k = 0
                        while (k < moves.length){
                            let x = moves[k][0]
                            let y = moves[k][1]
                            let temp = this.rows[x][y]
                            this.rows[x][y] = piece
                            this.rows[i][j] = new NullPiece("null", this, [i, j])
                            if(!this.check(inputColor)){
                                this.rows[i][j] = piece
                                this.rows[x][y] = temp
                                return false    
                            }
                            this.rows[i][j] = piece
                            this.rows[x][y] = temp
                            k +=  1
                        }
                    }
                }
            } 
        }
        else{
            return false
        }
        return true
    }

    isOnBoard(pos) {
        if (pos[0] < 8 && pos[0] >= 0 && pos[1] < 8 && pos[1] >= 0) {
            return true
        }
        return false
    }

    isValidPosition(pos, color){
        let bool = true
        return this.isOnBoard(pos) && this.rows[pos[0]][pos[1]].color !== color
    }

    promotion(pos, newPiece){
        let oldPiece = this.rows[pos[0]][pos[1]];
        // debugger;
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

}

export default Board;