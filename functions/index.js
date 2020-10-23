"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _firebaseFunctions = require("firebase-functions");

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./src/App"));

var _facts = _interopRequireDefault(require("./src/facts"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var app = (0, _express["default"])();

_firebaseAdmin["default"].initializeApp();

var index = _fs["default"].readFileSync(__dirname + "/public/index.html", "utf8");

app.get("**", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var titleRef, title, description, image;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            titleRef = _firebaseAdmin["default"].firestore().doc("title/ZZrGGKXrZzIrGfAB5mcS").get();
            _context.next = 3;
            return titleRef;

          case 3:
            title = _context.sent.data().title;
            _context.next = 6;
            return titleRef;

          case 6:
            description = _context.sent.data().description;
            _context.next = 9;
            return titleRef;

          case 9:
            image = _context.sent.data().image;
            console.log(title, description, image);
            (0, _facts["default"])().then(function (facts) {
              var html = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
                facts: facts
              }));
              var finalHtml = index.replace("<!--APP-->", html).replace("<title>$OG_TITLE</title>", title).replace("$OG_TITLE", title).replace(/\$OG_DESCRIPTION/g, description).replace(/\$OG_IMAGE/g, image).replace(/\$OG_URL/g, req.url);
              res.set("Cache-Control", "public, max-age=600, s-maxage=1200");
              res.send(finalHtml);
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

var ssrapp = _firebaseFunctions.https.onRequest(app);

exports.ssrapp = ssrapp;