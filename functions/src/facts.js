"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFacts;

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function getFacts() {
  return (0, _isomorphicFetch["default"])("https://ssr-react.firebaseio.com/facts.json").then(function (res) {
    return res.json();
  });
}