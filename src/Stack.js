function Stack() {
  var count = 0;
  var item = [];

  this.count = function() {
    return count;
  }

  this.push = function(newItem) {
    count++;
    item[count] = newItem;
  }

  this.pop = function() {
    temp = this.peek();
    count--;
    return temp;
  }

  this.peek = function() {
    if(count ==0) {
      throw new Error("Empty stack");
    }
    return item[count];
  }

}

function ImmutableStack(items,count) {

  var count = (typeof(count)==='undefined') ? 0 : count;
  var item =(typeof(items)==='undefined') ? []: items;

  this.count = function() {
    return count;
  }

  this.push = function(newItem) {
    newCount = count +1;
    newItems = item;
    newItems[newCount] = newItem;
    return new ImmutableStack(newItems,newCount);
  }

  this.pop = function() {
    if(count ==0) {
      throw new Error("Empty stack");
    }
    newCount = count -1
    return new ImmutableStack(item,newCount);
  }

  this.peek = function() {
    if(count ==0) {
      throw new Error("Empty stack");
    }
    return item[count];
  }

}
