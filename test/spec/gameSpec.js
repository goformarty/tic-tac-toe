describe("Game", function() {
	it("creates a board and turn", function() {
		var game = new Game();
			expect(game.newState.board).toEqual(["E","E","E",
										"E","E","E",
										"E","E","E"]);
			expect(game.newState.turn).toBe("X");
			expect(game.newState.advanceTurn()).toBe("O");
			expect(game.newState.emptyCells()).toEqual([0,1,2,3,4,5,6,7,8]);
	});
});


