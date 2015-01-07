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
  it("Incremente count when new item are added", function() {
    stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.count).toEqual(3);
    }
  );
  it("Decremente count when item are removed", function() {
    stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    stack.pop(1);
    expect(stack.count).toEqual(2);
    }
  );
  it("return the first item", function() {
    stack = new Stack();
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    }
  );
  it("return the secon item", function() {
    stack = new Stack();
    stack.push(3);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    }
  );
  it("return pop two item", function() {
    stack = new Stack();
    stack.push(3);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(3);
    }
  );
  it("peek last item", function() {
    stack = new Stack();
    stack.push(3);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    expect(stack.peek()).toEqual(2);
    }
  );
  it("cant pop on empty stack", function() {
    stack = new Stack();
    expect(function() { stack.pop(); }).toThrow(new Error("Empty stack"));
    }
  );
  it("cant peek on empty stack", function() {
    stack = new Stack();
    expect(function() { stack.peek(); }).toThrow(new Error("Empty stack"));
    }
  );
});
