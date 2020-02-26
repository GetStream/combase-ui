"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 14px;\n    padding: 12px;\n\n    &:-webkit-autofill,\n    &:-webkit-autofill:hover,\n    &:-webkit-autofill:focus,\n    &:-webkit-autofill:active {\n        -webkit-text-fill-color: ", " !important;\n        -webkit-box-shadow: 0 0 0 30px ", "\n            inset !important;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.css)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.alt_text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.alt_text;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.surface;
});

exports["default"] = _default;