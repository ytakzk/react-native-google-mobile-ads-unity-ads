"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAd = BannerAd;
var _react = _interopRequireDefault(require("react"));
var _BaseAd = require("./BaseAd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function BannerAd(_ref) {
  let {
    size,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_BaseAd.BaseAd, _extends({
    sizes: [size]
  }, props));
}
//# sourceMappingURL=BannerAd.js.map