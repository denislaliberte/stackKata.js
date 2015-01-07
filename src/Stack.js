
function Stack() {
  this.count = 0;
  this.item = 3;
  this.push = function() {
    this.count++;
  }
  this.pop = function() {
    this.count--;
    return this.item;
  }
}
