describe("Stack", function() {
  it("New stack size should return 0", function() {
    stack = new Stack();
    expect(stack.size()).toEqual(0);
    }
  );
});
