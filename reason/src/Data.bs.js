'use strict';

var React = require("react");
var User$Reason = require("./User.bs.js");

var dummyFetchedData = {
  user: {
    name: "Hugo",
    age: 13
  },
  articlesCount: 22
};

function Data(Props) {
  return React.createElement(User$Reason.make, {
              user: dummyFetchedData.user
            });
}

var make = Data;

exports.dummyFetchedData = dummyFetchedData;
exports.make = make;
/* react Not a pure module */
