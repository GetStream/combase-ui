"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var light = _objectSpread({}, _base["default"], {
  color: _objectSpread({}, _colors["default"], {
    primary: _colors["default"].blue,
    background: _colors["default"].off_white,
    surface: _colors["default"].white,
    error: _colors["default"].red,
    disabled: _colors["default"].gray,
    light_text: _colors["default"].light_gray,
    shadow: _colors["default"].black,
    border: _colors["default"].light_gray,
    text: _colors["default"].black,
    alt_text: _colors["default"].slate,
    undersheet: _base["default"].colorUtils.fade(_colors["default"].black, 0.64),
    placeholder: _colors["default"].light_gray,
    placeholder_shimmer: _base["default"].colorUtils.lighten(_colors["default"].light_gray, .64)
  })
});

exports.light = light;

var dark = _objectSpread({}, _base["default"], {
  color: _objectSpread({}, _colors["default"], {
    primary: _colors["default"].blue,
    background: _base["default"].colorUtils.darken(_colors["default"].black, 0.2),
    surface: _colors["default"].black,
    error: _colors["default"].red,
    disabled: _colors["default"].gray,
    light_text: _base["default"].colorUtils.fade(_colors["default"].white, 0.32),
    shadow: _colors["default"].black,
    border: _base["default"].colorUtils.fade(_colors["default"].white, 0.05),
    text: _colors["default"].white,
    alt_text: _base["default"].colorUtils.fade(_colors["default"].white, 0.8),
    undersheet: _base["default"].colorUtils.fade(_colors["default"].black, 0.64),
    placeholder: _base["default"].colorUtils.darken(_colors["default"].black, .2),
    placeholder_shimmer: _base["default"].colorUtils.darken(_colors["default"].black, .1)
  })
});

exports.dark = dark;