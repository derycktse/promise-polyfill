class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}


let a = new Point(1,2)

alert(a.toString())



class Foo extends Point {
  bar() {
    // will throw an error when this method is defined
  }
}