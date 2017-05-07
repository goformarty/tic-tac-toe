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
	var B = this.board;

        //check rows
        for(var i = 0; i <= 6; i = i + 3) {
        	if(B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
                this.result = B[i] + "-won"; //update the state result
                return true;
            }
        }

        //check columns
        for(i = 0; i <= 2 ; i++) {
        	if(B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
                this.result = B[i] + "-won"; //update the state result
                return true;
            }
        }

        //check diagonals
        for( i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
        	if(B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2*j]) {
                this.result = B[i] + "-won"; //update the state result
                return true;
            }
        }

        var available = this.emptyCells();
        if(available.length === 0) {
            //the game is draw
            this.result = "draw"; //update the state result
            return true;
        }
        else {
        	return false;
        }
    };





