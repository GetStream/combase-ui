"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    box-shadow: -4px 0px 24px rgba(0, 0, 0, 0.12);\n    border-top-left-radius: ", "px;\n    border-bottom-left-radius: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.css)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.borderRadius;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius;
});

exports["default"] = _default;