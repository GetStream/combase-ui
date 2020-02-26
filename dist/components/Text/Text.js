"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", "px;\n  color: ", ";\n  font-weight: ", ";\n  opacity: ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = _styledComponents["default"].p(_templateObject(), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return theme.color[color];
}, function (_ref3) {
  var weight = _ref3.weight;
  return weight;
}, function (_ref4) {
  var faded = _ref4.faded;
  return faded ? 0.72 : 1;
}, function (_ref5) {
  var line = _ref5.line;
  return !!line ? "line-height: ".concat(line, "px") : null;
});

Text.defaultProps = {
  color: "text",
  size: 16,
  weight: "400"
};
var _default = Text;
exports["default"] = _default;