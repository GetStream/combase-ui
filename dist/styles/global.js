"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _fonts = _interopRequireDefault(require("./fonts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  \n  * {\n    outline: none;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n  }\n  \n  html {\n    height: 100%;\n    overflow: hidden;\n  }\n  \n  body {\n    display: flex;\n    background-color: ", ";\n    margin: 0;\n    height: 100vh;\n    overflow: hidden;\n    font-family: \"Circular Std\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  img {\n    user-select: none;\n  }\n\n  #root {\n    position: relative;\n    display: flex;\n    align-items: flex-start;\n    overflow: hidden;\n    flex: 1;\n    height: 100%;\n  }\n\n  div, form {\n    position: relative;\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  button {\n    font-family: inherit;\n    border: 0;\n    outline: 0;\n    margin: 0;\n    padding: 0;\n    background: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n  }\n  \n  h1, h2, h3,\n  h4, h5, h6 {\n    margin: 0;\n  }\n  \n  p,\n  label {\n    margin: 0;\n  }\n  \n  ul, ol {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  input, textarea {\n    border: 0;\n    background: none;\n    font-size: 16px;\n    font-family: \"Circular Std\", sans-serif;\n\n    &::-webkit-input-placeholder {\n        color: ", ";\n        font-weight: 500;\n    }\n\n    &:focus {\n      outline-offset: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint no-unused-expressions: 0 */
var _default = (0, _styledComponents.createGlobalStyle)(_templateObject(), _fonts["default"], function (_ref) {
  var theme = _ref.theme;
  return theme.color.surface;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.gray;
});

exports["default"] = _default;