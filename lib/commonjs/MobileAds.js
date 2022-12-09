"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MobileAds = void 0;
var _internal = require("./internal");
var _validateAdRequestConfiguration = require("./validateAdRequestConfiguration");
var _version = require("./version");
const namespace = 'google_mobile_ads';
const nativeModuleName = ['RNGoogleMobileAdsModule', 'RNGoogleMobileAdsAppOpenModule', 'RNGoogleMobileAdsInterstitialModule', 'RNGoogleMobileAdsRewardedModule', 'RNGoogleMobileAdsRewardedInterstitialModule'];
class MobileAdsModule extends _internal.Module {
  constructor(app, config) {
    super(app, config);
    this.emitter.addListener('google_mobile_ads_app_open_event', event => {
      this.emitter.emit(`google_mobile_ads_app_open_event:${event.adUnitId}:${event.requestId}`, event);
    });
    this.emitter.addListener('google_mobile_ads_interstitial_event', event => {
      this.emitter.emit(`google_mobile_ads_interstitial_event:${event.adUnitId}:${event.requestId}`, event);
    });
    this.emitter.addListener('google_mobile_ads_rewarded_event', event => {
      this.emitter.emit(`google_mobile_ads_rewarded_event:${event.adUnitId}:${event.requestId}`, event);
    });
    this.emitter.addListener('google_mobile_ads_rewarded_interstitial_event', event => {
      this.emitter.emit(`google_mobile_ads_rewarded_interstitial_event:${event.adUnitId}:${event.requestId}`, event);
    });
  }
  initialize() {
    return this.native.initialize();
  }
  setRequestConfiguration(requestConfiguration) {
    let config;
    try {
      config = (0, _validateAdRequestConfiguration.validateAdRequestConfiguration)(requestConfiguration);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`googleMobileAds.setRequestConfiguration(*) ${e.message}`);
      }
    }
    return this.native.setRequestConfiguration(config);
  }
  openAdInspector() {
    return this.native.openAdInspector();
  }
}
const MobileAdsInstance = new MobileAdsModule({
  name: 'AppName'
}, {
  version: _version.version,
  namespace,
  nativeModuleName,
  nativeEvents: ['google_mobile_ads_app_open_event', 'google_mobile_ads_interstitial_event', 'google_mobile_ads_rewarded_event', 'google_mobile_ads_rewarded_interstitial_event']
});
const MobileAds = () => {
  return MobileAdsInstance;
};
exports.MobileAds = MobileAds;
var _default = MobileAds;
exports.default = _default;
//# sourceMappingURL=MobileAds.js.map