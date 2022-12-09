"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppOpenAd = void 0;
var _common = require("../common");
var _MobileAds = require("../MobileAds");
var _validateAdRequestOptions = require("../validateAdRequestOptions");
var _MobileAd = require("./MobileAd");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class AppOpenAd extends _MobileAd.MobileAd {
  static createForAdRequest(adUnitId, requestOptions) {
    if (!(0, _common.isString)(adUnitId)) {
      throw new Error("AppOpenAd.createForAdRequest(*) 'adUnitId' expected an string value.");
    }
    let options = {};
    try {
      options = (0, _validateAdRequestOptions.validateAdRequestOptions)(requestOptions);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`AppOpenAd.createForAdRequest(_, *) ${e.message}.`);
      }
    }
    const requestId = AppOpenAd._appOpenRequest++;
    return new AppOpenAd('app_open', (0, _MobileAds.MobileAds)(), requestId, adUnitId, options);
  }
  addAdEventsListener(listener) {
    return this._addAdEventsListener(listener);
  }
  addAdEventListener(type, listener) {
    return this._addAdEventListener(type, listener);
  }
}
exports.AppOpenAd = AppOpenAd;
_defineProperty(AppOpenAd, "_appOpenRequest", 0);
//# sourceMappingURL=AppOpenAd.js.map