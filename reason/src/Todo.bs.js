'use strict';

var React = require("react");

function fn1(a, b) {
  return Math.imul(a, b);
}

function fn2(a, b) {
  return Math.imul(a, b);
}

function reducer(_state, action) {
  return /* Loading */1;
}

function Todo(Props) {
  var match = React.useReducer(reducer, /* NoData */0);
  if (match[0]) {
    return React.createElement("div", undefined, "Loading");
  } else {
    return React.createElement("div", undefined, "No Data");
  }
}

var make = Todo;

exports.fn1 = fn1;
exports.fn2 = fn2;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
