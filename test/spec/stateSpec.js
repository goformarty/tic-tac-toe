describe("State", function() {
	var state;
	beforeEach(function() {
		state = new State();
	});

	it("advances the turn in a state", function() {
		state.board = ["X", "X", "X", "O", "O", "E", "E", "E", "E"];
		expect(state.isTerminal()).toBe(true);
	});
});