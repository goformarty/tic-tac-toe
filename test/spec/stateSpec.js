describe("State", function() {
	var state;

beforeEach(function() {
		state = new State();
	});

	it('should be able to add a contact', function() {
		addressBook.addContact(thisContact);
		expect(addressBook.getContact(0)).toBe(thisContact);
	});

});