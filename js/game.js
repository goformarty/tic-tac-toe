function Position(board, turn) {
    this.board = board || ["E","E","E","E","E","E","E","E","E"];
    this.turn = turn || "X";
    this.won = "";
}

Position.prototype.move = function(idx){
    var position = new Position(this.board, this.turn === "X" ? "O" : "X");
    position.board[idx] = this.turn;
    return position;
};

Position.prototype.possibleMoves = function(){
    var indices = [];
 for(var i = 0; i < 9 ; i++) {
     if(this.board[i] === "E") {
         indices.push(i);
     }
 }
 return indices;
};

Position.prototype.isWinFor = function(turn) {
    var B = this.board;

        //check rows
        for(var i = 0; i <= 6; i = i + 3) {
         if(B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
                this.won = B[i];
                return true;
            }
        }
        //check columns
        for(i = 0; i <= 2 ; i++) {
         if(B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
                this.won = B[i];
                return true;
            }
        }

        //check diagonals
        for( i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
         if(B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2*j]) {
                this.won = B[i];
                return true;
            }
        }
    return false;
};

Position.cache = {};

Position.prototype.minimax = function(depth){

    if(Position.cache[this.board]) { return Position.cache[this.board]}
    
    depth = depth || 0;

    if (this.isWinFor() === true) {
        if(this.won === "X"){
            return 100 - depth;
        }
        else {
            return -100 + depth; 
        }
    }

    // to check if there are any empty squares
    var pMoves = this.possibleMoves();
    if(pMoves.length === 0) {
        return 0;
    }

    var pNextMoves = pMoves.map(function(idx) {
            return  position.move(idx).minimax(depth + 1);
        });
    if (this.turn === "X") {     
        var largest = Math.max.apply(Math, pNextMoves);
        Position.cache[this.board] = largest; 
        return largest;

    }
    if (this.turn === "O") {    
        var smallest  = Math.min.apply(Math, pNextMoves);
        Position.cache[this.board] = smallest; 
        return smallest;
        
    }
};

Position.prototype.bestMove = function() {
    var bMove = Math.max.apply(Math, function(idx){
        return position.move(idx).minimax();
    });
};



// function State(oldState) {
	
//     //player who has the turn 
//     this.turn = "";

//     //number of moves of the AI player
//     this.oMovesCount = 0;

//     //result of the game in this State
//     this.result = "still running";

//     //board configuration in this state
//     this.board = [];

//     // if the state is constructed using a copy of old state
//     if(typeof oldState !== "undefined") {
//     	var oldLength = old.board.length;
//     	this.board = new Array(oldLength);

//     	for(var i = 0; i < oldLength; i++) {
//     		this.board[i] = old.board[i];
//     	}

//     	this.oMovesCount = old.oMovesCount;
//     	this.result = old.result;
//     	this.turn = old.turn;
//     }
// }

// State.prototype.advanceTurn = function() {
// 	this.turn = this.turn === "X" ? "O" : "X";
// 	return this.turn;
// };

// State.prototype.emptyCells = function() {
// 	var indices = [];
// 	for(var i = 0; i < 9 ; i++) {
// 		if(this.board[i] === "E") {
// 			indices.push(i);
// 		}
// 	}
// 	return indices;
// };

// State.prototype.isTerminal = function() {
// 	var B = this.board;

//         //check rows
//         for(var i = 0; i <= 6; i = i + 3) {
//         	if(B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
//                 this.result = B[i] + "-won"; //update the state result
//                 return true;
//             }
//         }

//         //check columns
//         for(i = 0; i <= 2 ; i++) {
//         	if(B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
//                 this.result = B[i] + "-won"; //update the state result
//                 return true;
//             }
//         }

//         //check diagonals
//         for( i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
//         	if(B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2*j]) {
//                 this.result = B[i] + "-won"; //update the state result
//                 return true;
//             }
//         }

//         var available = this.emptyCells();
//         if(available.length === 0) {
//             //the game is draw
//             this.result = "draw"; //update the state result
//             return true;
//         }
//         else {
//         	return false;
//         }
//     };





