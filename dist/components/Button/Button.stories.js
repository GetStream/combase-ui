"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flat = exports.Standard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components|Button',
  component: _Button["default"]
};
exports["default"] = _default;

var Standard = function Standard() {
  return _react["default"].createElement(_Button["default"], {
    label: "Click Me",
    onClick: (0, _addonActions.action)('clicked')
  });
};

exports.Standard = Standard;

var Flat = function Flat() {
  return _react["default"].createElement(_Button["default"], {
    flat: true,
    label: "Click Me",
    onClick: (0, _addonActions.action)('clicked')
  });
};

exports.Flat = Flat;