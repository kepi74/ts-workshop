'use strict';

var React = require("react");
var Age$Reason = require("./Age.bs.js");

function User(Props) {
  var user = Props.user;
  return React.createElement(Age$Reason.make, {
              age: user.age
            });
}

var make = User;

exports.make = make;
/* react Not a pure module */
