"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _CircularStdBook = _interopRequireDefault(require("./CircularStd/CircularStd-Book.otf"));

var _CircularStdMedium = _interopRequireDefault(require("./CircularStd/CircularStd-Medium.otf"));

var _CircularStdBold = _interopRequireDefault(require("./CircularStd/CircularStd-Bold.otf"));

var _CircularStdBlack = _interopRequireDefault(require("./CircularStd/CircularStd-Black.otf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: \"Circular Std\";\n    font-weight: 400;\n    src: url(", ");\n  }\n  @font-face {\n    font-family: \"Circular Std\";\n    font-weight: 500;\n    src: url(", ");\n  }\n  @font-face {\n    font-family: \"Circular Std\";\n    font-weight: 600;\n    src: url(", ");\n  }\n  @font-face {\n    font-family: \"Circular Std\";\n    font-weight: 800;\n    src: url(", ");\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.css)(_templateObject(), _CircularStdBook["default"], _CircularStdMedium["default"], _CircularStdBold["default"], _CircularStdBlack["default"]);

exports["default"] = _default;