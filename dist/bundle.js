(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  Point.prototype.toString = function toString() {
    return '(' + this.x + ', ' + this.y + ')';
  };

  return Point;
}();

var a = new Point(1, 2);

alert(a.toString());

var Foo = function (_Point) {
  _inherits(Foo, _Point);

  function Foo() {
    _classCallCheck(this, Foo);

    return _possibleConstructorReturn(this, _Point.apply(this, arguments));
  }

  Foo.prototype.bar = function bar() {
    // will throw an error when this method is defined
  };

  return Foo;
}(Point);

})));
