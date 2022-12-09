"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseAd = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _common = require("../common");
var _NativeError = require("../internal/NativeError");
var _BannerAdSize = require("../BannerAdSize");
var _validateAdRequestOptions = require("../validateAdRequestOptions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react/prop-types */
/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

const sizeRegex = /([0-9]+)x([0-9]+)/;
const BaseAd = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    unitId,
    sizes,
    requestOptions,
    manualImpressionsEnabled,
    ...props
  } = _ref;
  const [dimensions, setDimensions] = (0, _react.useState)([0, 0]);
  (0, _react.useEffect)(() => {
    if (!unitId) {
      throw new Error("BannerAd: 'unitId' expected a valid string unit ID.");
    }
  }, [unitId]);
  (0, _react.useEffect)(() => {
    if (sizes.length === 0 || !sizes.every(size => size in _BannerAdSize.BannerAdSize || sizeRegex.test(size))) {
      throw new Error("BannerAd: 'size(s)' expected a valid BannerAdSize or custom size string.");
    }
  }, [sizes]);
  const parsedRequestOptions = JSON.stringify(requestOptions);
  (0, _react.useEffect)(() => {
    if (requestOptions) {
      try {
        (0, _validateAdRequestOptions.validateAdRequestOptions)(requestOptions);
      } catch (e) {
        if (e instanceof Error) {
          throw new Error(`BannerAd: ${e.message}`);
        }
      }
    }
  }, [parsedRequestOptions]);
  function onNativeEvent(_ref2) {
    let {
      nativeEvent
    } = _ref2;
    const {
      type
    } = nativeEvent;
    if (type !== 'onSizeChange' && (0, _common.isFunction)(props[type])) {
      let eventHandler, eventPayload;
      switch (type) {
        case 'onAdLoaded':
          eventPayload = {
            width: nativeEvent.width,
            height: nativeEvent.height
          };
          if (eventHandler = props[type]) eventHandler(eventPayload);
          break;
        case 'onAdFailedToLoad':
          eventPayload = _NativeError.NativeError.fromEvent(nativeEvent, 'googleMobileAds');
          if (eventHandler = props[type]) eventHandler(eventPayload);
          break;
        case 'onAppEvent':
          eventPayload = {
            name: nativeEvent.name,
            data: nativeEvent.data
          };
          if (eventHandler = props[type]) eventHandler(eventPayload);
          break;
        default:
          if (eventHandler = props[type]) eventHandler();
      }
    }
    if (type === 'onAdLoaded' || type === 'onSizeChange') {
      const {
        width,
        height
      } = nativeEvent;
      if (width && height) setDimensions([width, height]);
    }
  }
  const style = sizes.includes(_BannerAdSize.BannerAdSize.FLUID) ? {
    width: '100%',
    height: dimensions[1]
  } : {
    width: dimensions[0],
    height: dimensions[1]
  };
  return /*#__PURE__*/_react.default.createElement(GoogleMobileAdsBannerView, {
    ref: ref,
    sizes: sizes,
    style: style,
    unitId: unitId,
    request: (0, _validateAdRequestOptions.validateAdRequestOptions)(requestOptions),
    manualImpressionsEnabled: !!manualImpressionsEnabled,
    onNativeEvent: onNativeEvent
  });
});
exports.BaseAd = BaseAd;
BaseAd.displayName = 'BaseAd';
const GoogleMobileAdsBannerView = (0, _reactNative.requireNativeComponent)('RNGoogleMobileAdsBannerView');
//# sourceMappingURL=BaseAd.js.map