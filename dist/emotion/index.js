"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = exports.Box = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box = (0, _styled.default)('div')({
  boxSizing: 'border-box'
}, _styledSystem.space, _styledSystem.color, _styledSystem.width, _styledSystem.fontSize, _styledSystem.flex, _styledSystem.order, _styledSystem.alignSelf, function (props) {
  return props.css;
});
exports.Box = Box;
Box.displayName = 'Box';
Box.propTypes = _objectSpread({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes, _styledSystem.width.propTypes, _styledSystem.fontSize.propTypes);
var Flex = (0, _styled.default)(Box)({
  display: 'flex'
}, _styledSystem.flexWrap, _styledSystem.flexDirection, _styledSystem.alignItems, _styledSystem.justifyContent);
exports.Flex = Flex;
Flex.displayName = 'Flex';
Flex.propTypes = _objectSpread({}, _styledSystem.flexWrap.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.justifyContent.propTypes);