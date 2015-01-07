function Stack() {
  var count = 0;
  this.item = [];

  this.count = function() {
    return count;
  }

  this.push = function(item) {
    count++;
    this.item[count] = item;
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
    return this.item[count];
  }

}
