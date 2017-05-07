function State(oldState) {
	
    //player who has the turn 
    this.turn = "";

    //number of moves of the AI player
    this.oMovesCount = 0;

    //result of the game in this State
    this.result = "still running";

    //board configuration in this state
    this.board = [];

    // if the state is constructed using a copy of old state
    if(typeof oldState !== "undefined") {
    	var oldLength = old.board.length;
    	this.board = new Array(oldLength);

    	for(var i = 0; i < oldLength; i++) {
    		this.board[i] = old.board[i];
    	}

    	this.oMovesCount = old.oMovesCount;
    	this.result = old.result;
    	this.turn = old.turn;
    }
}

State.prototype.advanceTurn = function() {
	this.turn = this.turn === "X" ? "O" : "X";
	return this.turn;
};

State.prototype.emptyCells = function() {
	var indices = [];
	for(var i = 0; i < 9 ; i++) {
		if(this.board[i] === "E") {
			indices.push(i);
		}
	}
	return indices;
};

State.prototype.isTerminal = function() {
	return false;
};





