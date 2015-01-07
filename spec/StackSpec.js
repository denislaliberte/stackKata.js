describe("Stack", function() {
  it("New stack count should return 0", function() {
    stack = new Stack();
    expect(stack.count).toEqual(0);
    }
  );
  it("Stack with one item count should return 1", function() {
    stack = new Stack();
    stack.push(3);
    expect(stack.count).toEqual(1);
    }
  );
});
