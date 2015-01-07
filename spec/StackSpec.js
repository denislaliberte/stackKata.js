describe("Stack", function() {
  var stack;
  beforeEach(function(){
      stack = new Stack();
      immutableStack = new ImmutableStack;
    }
  );
  it("New stack count should return 0", function() {
    expect(immutableStack.count()).toEqual(0);
    }
  );
  it("Stack with one item count should return 1", function() {
    newStack = immutableStack.push(3);
    expect(newStack.count()).toEqual(1);
    }
  );
  it("Incremente count when new item are added", function() {
    newStack = immutableStack.push(3);
    newStack = newStack.push(2);
    newStack = newStack.push(1);
    expect(newStack.count()).toEqual(3);
    }
  );
  it("Decremente count when item are removed", function() {
    newStack = immutableStack.push(3);
    newStack = newStack.push(2);
    newStack = newStack.push(1);
    newStack = newStack.pop();
    expect(newStack.count()).toEqual(2);
    }
  );
  it("return the first item", function() {
    newStack = immutableStack.push(3);
    expect(newStack.peek()).toEqual(3);
    }
  );
  it("return the secon item", function() {
    newStack = immutableStack.push(3);
    newStack = newStack.push(2);
    expect(newStack.peek()).toEqual(2);
    }
  );
  it("return pop two item", function() {
    newStack = immutableStack.push(3);
    newStack = newStack.push(2);
    expect(newStack.peek()).toEqual(2);
    newStack = newStack.pop();
    expect(newStack.peek()).toEqual(3);
    }
  );
  it("peek last item", function() {
    stack.push(3);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    expect(stack.peek()).toEqual(2);
    }
  );
  it("cant pop on empty stack", function() {
    expect(function() { stack.pop(); }).toThrow(new Error("Empty stack"));
    }
  );
  it("cant peek on empty stack", function() {
    expect(function() { stack.peek(); }).toThrow(new Error("Empty stack"));
    }
  );
});
