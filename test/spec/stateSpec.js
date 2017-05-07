describe("State", function() {
	var state;
	beforeEach(function() {
		state = new State();
	});

	// checking if the state is terminal;
	it("checks for rows", function() {
		state.board = ["X", "X", "X", "O", "O", "E", "E", "E", "E"];
		expect(state.isTerminal()).toBe(true);
		expect(state.result).toBe("X-won");
	});
	it("checks for rows", function() {
		state.board = ["X", "E", "X", "X", "E", "E", "O", "O", "O"];
		expect(state.isTerminal()).toBe(true);
		expect(state.result).toBe("O-won");
	});
	it("checks for columns", function() {
		state.board = ["X", "E", "X", "X", "O", "O", "X", "E", "O"];
		expect(state.isTerminal()).toBe(true);
		expect(state.result).toBe("X-won");
	});
	it("checks for columns", function() {
		state.board = ["X", "O", "E", "E", "O", "X", "X", "O", "X"];
		expect(state.isTerminal()).toBe(true);
		expect(state.result).toBe("O-won");
	});
	it("checks for diagonals", function() {
		state.board = ["X", "O", "E", "E", "X", "E", "X", "O", "X"];
		expect(state.isTerminal()).toBe(true);
		expect(state.result).toBe("X-won");
	});
	it("checks for diagonals", function() {
		state.board = ["X", "E", "O", "X", "O", "X", "O", "E", "X"];
		expect(state.isTerminal()).toBe(true);
		expect(state.result).toBe("O-won");
	});
	it("checks for a draw", function() {
		state.board = ["X", "O", "O", "O", "X", "X", "X", "O", "O"];
		expect(state.isTerminal()).toBe(true);
		expect(state.result).toBe("draw");
	});
	it("expects the game to be still running", function() {
		state.board = ["X", "O", "E", "E", "E", "E", "E", "E", "E"];
		expect(state.isTerminal()).toBe(false);
		expect(state.result).toBe("still running");
	});
});