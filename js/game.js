// Constructs a game object to be played
function Game() {

	// initialise the new game with new state empty board configuration
	this.newState = new State();
	//"E" stands for empty board cell
	this.newState.board = ["E", "E", "E",
                  "E", "E", "E",
                  "E", "E", "E"];

    //X plays first
	this.newState.turn = "X";
	this.status = "beginning";

}

// function that advances the game to a new state
// @param _state [State]: the new state to advance the game to
Game.prototype.advanceTo = function(_state) {
	this.newState = _state;
        if(_state.isTerminal()) {
            this.status = "ended";
        }
        else {
             //notify the AI player its turn has come up
            this.ai.notify("O");
            }
};

// start game
Game.prototype.start = function(){
	if(this.status === "beginning") {
            //invoke advanceTo with the initial state
            this.advanceTo(this.newState);
            this.status = "running";
        }
};
