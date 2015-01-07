describe("Stack", function() {
  it("New stack size should return 0", function() {
    stack = new Stack();
    expect(stack.size()).toEqual(0);
    }
  );
  it("Stack with one item size should return 1", function() {
    stack = new Stack();
    stack.add(3);
    expect(stack.size()).toEqual(1);
    }
  );
});
