describe("Game", function() {
	var game;
	beforeEach(function() {
		game = new Game();
	});
	it("creates a board and turn", function() {
		expect(game.newState.board).toEqual(["E","E","E","E","E","E","E","E","E"]);
		expect(game.newState.turn).toBe("X");
	});
	it("advances turn to player O", function() {
		expect(game.newState.advanceTurn()).toBe("O");
	});
	it("enumarates the empty cells and checks if the state is terminal", function() {
		expect(game.newState.emptyCells()).toEqual([0,1,2,3,4,5,6,7,8]);
		expect(game.newState.isTerminal()).toBe(false);
		expect(game.newState.result).toBe("still running");
	});
});


