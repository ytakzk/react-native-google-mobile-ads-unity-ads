import { Module } from './internal';
import { validateAdRequestConfiguration } from './validateAdRequestConfiguration';
import { version } from './version';
const namespace = 'google_mobile_ads';
const nativeModuleName = ['RNGoogleMobileAdsModule', 'RNGoogleMobileAdsAppOpenModule', 'RNGoogleMobileAdsInterstitialModule', 'RNGoogleMobileAdsRewardedModule', 'RNGoogleMobileAdsRewardedInterstitialModule'];
class MobileAdsModule extends Module {
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
      config = validateAdRequestConfiguration(requestConfiguration);
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
  version: version,
  namespace,
  nativeModuleName,
  nativeEvents: ['google_mobile_ads_app_open_event', 'google_mobile_ads_interstitial_event', 'google_mobile_ads_rewarded_event', 'google_mobile_ads_rewarded_interstitial_event']
});
export const MobileAds = () => {
  return MobileAdsInstance;
};
export default MobileAds;
//# sourceMappingURL=MobileAds.js.map