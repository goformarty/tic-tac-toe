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
}

