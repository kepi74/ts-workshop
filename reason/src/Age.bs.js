'use strict';

var React = require("react");

function Age(Props) {
  var age = Props.age;
  return React.createElement("div", undefined, String(age));
}

var make = Age;

exports.make = make;
/* react Not a pure module */
