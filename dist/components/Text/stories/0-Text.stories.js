"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components|Text',
  component: _Text["default"],
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var asOptions = {
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: "h4",
  h5: 'h5',
  h6: "h6"
};
var weightOptions = {
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
  900: '900'
};

var Paragraph = function Paragraph() {
  return _react["default"].createElement(_Text["default"], {
    color: "",
    as: (0, _addonKnobs.select)('as', asOptions, 'p'),
    size: (0, _addonKnobs.number)('size', 16),
    faded: (0, _addonKnobs["boolean"])('faded', false),
    weight: (0, _addonKnobs.select)('weight', weightOptions, '400')
  }, "Hey There! Play around with my props in the Knobs tab.");
};

exports.Paragraph = Paragraph;