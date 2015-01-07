
function Stack() {
  this.count = 0;
  this.item = new Array();
  this.push = function(item) {
    this.count++;
    this.item[this.count] = item;
  }
  this.pop = function() {
    temp = this.item[this.count]
    this.count--;
    return temp;
  }
}
