function ImmutableStack(items, count) {

  var count = (typeof(count) ==='undefined') ? 0 : count;
  var items = (typeof(items) ==='undefined') ? []: items;

  this.count = function() {
    return count;
  }

  this.push = function(item) {
    newItems = items;
    newItems[count + 1] = item;
    return new ImmutableStack(newItems, count + 1);
  }

  this.pop = function() {
    if(count == 0) {
      throw new Error("Empty stack");
    }
    return new ImmutableStack(items, count - 1);
  }

  this.peek = function() {
    if(count == 0) {
      throw new Error("Empty stack");
    }
    return items[count];
  }
}
