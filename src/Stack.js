
function Stack() {
  this.count = 0;
  this.push = function() {
    this.count++
  }
  this.pop = function() {
    this.count--
  }
}
