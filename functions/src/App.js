"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function App(props) {
  var facts = props.facts.map(function (fact, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, fact.text);
  });
  return /*#__PURE__*/_react["default"].createElement("ul", null, facts);
}

var _default = App;
exports["default"] = _default;