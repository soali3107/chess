import Board from './board';
import Player from './player';

class Game {
    constructor(){
        this.board = new Board;
        // this.display = new this.display(this.board);
        this.players = {
            "white": new Player("white", this.display),
            "black": new Player("black", this.display)
        }
        this.currentPlayer = "white";

        this.play = this.play.bind(this);
        this.notify = this.notify.bind(this);
    }

    play(){
        while(!this.board.checkmate(this.player)){
            //something
        }
        
        // next color  wins(ternary)

    }

    notify(){
        if(this.board.inCheck(this.currentPlayer)){}

    }
    
    nextTurn(){
        this.currentPlayer = (this.currentPlayer  === "white"  ? "black" : "white")
    }






}