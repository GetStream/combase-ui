"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  transition: 0.24s background-color\n    ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 * Used for hover & active states of a list item component
 * Falls back to the theme's primary color
 * Optionally pass an 'activeColor' prop with the key name of a color from your theme to customize
 */
var _default = (0, _styledComponents.css)(_templateObject(), function (_ref) {
  var active = _ref.active,
      _ref$activeColor = _ref.activeColor,
      activeColor = _ref$activeColor === void 0 ? "text" : _ref$activeColor,
      theme = _ref.theme;
  return theme.colorUtils.fade(theme.color[activeColor], active ? 0.04 : 0);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.easing.css(theme.easing.standard);
}, function (_ref3) {
  var _ref3$activeColor = _ref3.activeColor,
      activeColor = _ref3$activeColor === void 0 ? "text" : _ref3$activeColor,
      theme = _ref3.theme;
  return theme.colorUtils.fade(theme.color[activeColor], 0.04);
}, function (_ref4) {
  var _ref4$activeColor = _ref4.activeColor,
      activeColor = _ref4$activeColor === void 0 ? "text" : _ref4$activeColor,
      theme = _ref4.theme;
  return theme.colorUtils.fade(theme.color[activeColor], 0.08);
});

exports["default"] = _default;