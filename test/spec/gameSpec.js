describe("Position", function() {
	var position, position1;

	beforeEach(function() {
		position = new Position();
	});

	it("creates a board and turn", function() {
		expect(position.board).toEqual(["E","E","E","E","E","E","E","E","E"]);
		expect(position.turn).toBe("X");
	});
	it ("takes two arguments", function(){
		position = new Position(["X","E","E","E","E","E","E","E","E"], "O");
		expect(position.board).toEqual(["X","E","E","E","E","E","E","E","E"]);
		expect(position.turn).toBe("O");
	});
});

describe("move", function(){
	beforeEach(function() {
		position = new Position();
	});

	it("updates board and turn", function(){
		 position1 = new Position(["E","E","E","X","E","E","E","E","E"], "O");
		expect(position.move(3)).toEqual(position1);
	});
});	

describe("possible moves", function(){

	beforeEach(function() {
		position = new Position();
	});

	it("lists indices of empty squares", function(){
		expect(position.move(3).move(5).possibleMoves()).toEqual([0,1,2,4,6,7,8]);
	});
});

describe("isWinFor", function(){

	beforeEach(function() {
		position = new Position();
	});

	it("finds no win", function(){
		expect(position.isWinFor("X")).toBe(false);
	});
	it("finds a win for X on the first row", function(){
		position.board = ["X","X","X","E","E","E","E","E","E"];
		expect(position.isWinFor("X")).toBe(true);
	});
	it("finds a win for X on the second row", function(){
		position.board =["E","E","E","X","X","X","E","E","E"];
		expect(position.isWinFor("X")).toBe(true);
	});
	it("finds a win for O on the second column", function(){
		position.board =["E","O","E","E","O","E","E","O","E"];
		expect(position.isWinFor("O")).toBe(true);
	});
	it("finds a win for O on the diagonal", function(){
		position.board = ["O","E","E","E","O","E","E","E","O"];
		expect(position.isWinFor("O")).toBe(true);
	});
});

describe("minimax", function(){

	beforeEach(function() {
		position = new Position();
	});

	it("calculates a win for X", function(){
		position.board = ["X","X","X","E","E","E","E","E","E"];
		expect(position.minimax()).toEqual(100);
	});
	it("calculates a win for O", function(){
		position.board = ["O","O","O","E","E","E","E","E","E"];
		expect(position.minimax()).toEqual(-100);
	});
	it("calculates a draw", function(){
		position.board = ["O","X","O","O","X","O","X","O","X"];
		expect(position.minimax()).toEqual(0);
	});
	it("calculates a win for X in 1 move", function(){
		position.board = ["X","X","E","E","E","E","E","E","E"];
		expect(position.minimax()).toEqual(99);
	});
	it("calculates a win for O in 1 move", function(){
		position.board = ["O","O","E","E","E","E","E","E","E"];
		position.turn = "O";
		expect(position.minimax()).toEqual(-99);
	});
});

describe("best move", function(){

	beforeEach(function() {
		position = new Position();
	});

	it("finds the best move for x", function(){
		position.board = ["X","X","E","E","E","E","E","E","E"];
		expect(position.bestMove()).toEqual(0);
	});
});
	// it("advances turn to player O", function() {
	// 	expect(game.newState.advanceTurn()).toBe("O");
	// });
	// it("enumarates the empty cells and checks if the state is terminal", function() {
	// 	expect(game.newState.emptyCells()).toEqual([0,1,2,3,4,5,6,7,8]);
	// 	expect(game.newState.isTerminal()).toBe(false);
	// 	expect(game.newState.result).toBe("still running");
	// });



