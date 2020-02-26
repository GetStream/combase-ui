"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _listItemInteractions = _interopRequireDefault(require("../../styles/css/listItemInteractions"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 12px 24px;\n    cursor: ", ";\n    border-radius: ", "px;\n    align-items: center;\n    justify-content: center;\n    box-shadow: ", ";\n    background-color: ", ";\n    ", ";\n\n    & > ", " {\n        user-select: none;\n        margin-left: ", "px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius;
}, function (_ref3) {
  var color = _ref3.color,
      disabled = _ref3.disabled,
      flat = _ref3.flat,
      theme = _ref3.theme;
  return !disabled && !flat ? "0px 1px 4px ".concat(theme.colorUtils.fade(theme.colorUtils.darken(theme.color[color], 0.1), 0.4)) : null;
}, function (_ref4) {
  var disabled = _ref4.disabled,
      flat = _ref4.flat,
      color = _ref4.color,
      theme = _ref4.theme;
  return flat ? 'transparent' : disabled ? theme.color.disabled : theme.color[color];
}, function (_ref5) {
  var color = _ref5.color,
      disabled = _ref5.disabled,
      flat = _ref5.flat,
      theme = _ref5.theme;
  return !disabled ? flat ? _listItemInteractions["default"] : "\n            transition: 0.24s background-color ".concat(theme.easing.css(theme.easing.standard), ";\n        &:hover {\n            background-color: ").concat(theme.colorUtils.darken(theme.color[color], 0.05), "\n        }\n        &:active {\n            background-color: ").concat(theme.colorUtils.darken(theme.color[color], 0.15), "\n        }\n    ") : null;
}, _Text["default"], function (_ref6) {
  var hasIcon = _ref6.hasIcon;
  return hasIcon ? 8 : 0;
});

var Button = function Button(_ref7) {
  var className = _ref7.className,
      color = _ref7.color,
      disabled = _ref7.disabled,
      Icon = _ref7.icon,
      flat = _ref7.flat,
      label = _ref7.label,
      onClick = _ref7.onClick,
      type = _ref7.type;
  return _react["default"].createElement(Root, _extends({
    activeColor: color,
    hasIcon: !!Icon,
    onClick: !disabled ? onClick : null
  }, {
    className: className,
    color: color,
    disabled: disabled,
    flat: flat,
    type: type
  }), Icon ? _react["default"].createElement(Icon, {
    color: flat ? color : 'surface'
  }) : null, _react["default"].createElement(_Text["default"], {
    color: flat ? color : 'surface'
  }, label));
};

Button.propTypes = {
  color: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].func,
  flat: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  color: 'primary',
  type: 'button'
};
var _default = Button;
exports["default"] = _default;