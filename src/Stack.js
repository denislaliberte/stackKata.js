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
