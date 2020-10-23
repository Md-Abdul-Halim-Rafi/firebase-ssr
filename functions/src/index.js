"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var _facts = _interopRequireDefault(require("./facts"));

(0, _facts["default"])().then(function (facts) {
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    facts: facts
  }), document.querySelector("#root"));
});