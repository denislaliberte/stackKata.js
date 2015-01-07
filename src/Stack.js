function Stack() {
  this.count = 0;
  this.item = [];

  this.push = function(item) {
    this.count++;
    this.item[this.count] = item;
  }

  this.pop = function() {
    temp = this.peek();
    this.count--;
    return temp;
  }

  this.peek = function() {
    if(this.count ==0) {
      throw new Error("Empty stack");
    }
    return this.item[this.count];
  }

}
