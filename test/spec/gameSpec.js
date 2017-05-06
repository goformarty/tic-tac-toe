describe("Game", function() {
	it("creates a board and turn", function() {
		var game = new Game();
			expect(game.board).toEqual(["E","E","E","E","E","E","E","E","E"]);
	});
});


