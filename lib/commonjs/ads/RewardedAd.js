"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardedAd = void 0;
var _common = require("../common");
var _MobileAds = require("../MobileAds");
var _validateAdRequestOptions = require("../validateAdRequestOptions");
var _MobileAd = require("./MobileAd");
var _AdEventType = require("../AdEventType");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * A class for interacting and showing Rewarded Ads.
 *
 * An Rewarded advert can be pre-loaded and shown at a suitable point in your apps flow, such as at the end of a level
 * in a game. The content of a rewarded advert can be controlled via your Google Mobile Ads dashboard. Typically users are rewarded
 * after completing a specific advert action (e.g. watching a video or submitting an option via an interactive form).
 * Events (such as the user earning a reward or closing a rewarded advert early) are sent back for you to handle accordingly
 * within your application.
 *
 * #### Example
 *
 * First create a new Rewarded instance, passing in your Ad Unit ID from the Google Mobile Ads configuration console, and any additional
 * request options. The example below will present a test advert, and only request a non-personalized ad.
 *
 * ```js
 * import { RewardedAd, TestIds } from 'react-native-google-mobile-ads';
 *
 * const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED, {
 *     requestNonPersonalizedAdsOnly: true,
 * });
 *  ```
 *
 * Each advert needs to be loaded from Google Mobile Ads before being shown. It is recommended this is performed before the user
 * reaches the checkpoint to show the advert, so it's ready to go. Before loading the advert, we need to setup
 * event listeners to listen for updates from Google Mobile Ads, such as advert loaded or failed to load.
 *
 * Event types match the `AdEventType` or `RewardedAdEventType` interface. The potential user reward for rewarded
 * adverts are passed back to the event handler on advert load and when the user earns the reward.
 *
 * ```js
 * import { RewardedAdEventType } from 'react-native-google-mobile-ads';
 *
 * rewarded.addAdEventListener(RewardedAdEventType.LOADED. () => {
 *   rewarded.show();
 * });
 * rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD. (reward) => {
 *   console.log('User earned reward of ', reward);
 * });
 *
 * rewarded.load();
 *  ```
 *
 * The rewarded advert will be presented to the user, and several more events can be triggered such as the user clicking the
 * advert, closing it or completing the action.
 */
class RewardedAd extends _MobileAd.MobileAd {
  /**
   * Creates a new RewardedAd instance.
   *
   * #### Example
   *
   * ```js
   * import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
   *
   * const rewardedAd = await RewardedAd.createForAdRequest(TestIds.REWARDED, {
   *   requestAgent: 'CoolAds',
   * });
   *
   * rewarded.addAdEventListener(RewardedAdEventType.LOADED. () => {
   *   rewarded.show();
   * });
   * rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD. (reward) => {
   *   console.log('User earned reward of ', reward);
   * });
   *
   * rewardedAd.load();
   * ```
   *
   * @param adUnitId The Ad Unit ID for the Rewarded Ad. You can find this on your Google Mobile Ads dashboard.
   * @param requestOptions Optional RequestOptions used to load the ad.
   */
  static createForAdRequest(adUnitId, requestOptions) {
    if (!(0, _common.isString)(adUnitId)) {
      throw new Error("RewardedAd.createForAdRequest(*) 'adUnitId' expected an string value.");
    }
    let options = {};
    try {
      options = (0, _validateAdRequestOptions.validateAdRequestOptions)(requestOptions);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`RewardedAd.createForAdRequest(_, *) ${e.message}.`);
      }
    }
    const requestId = RewardedAd._rewardedRequest++;
    return new RewardedAd('rewarded', (0, _MobileAds.MobileAds)(), requestId, adUnitId, options);
  }
  addAdEventsListener(listener) {
    return this._addAdEventsListener(listener);
  }
  addAdEventListener(type, listener) {
    if (type === _AdEventType.AdEventType.LOADED) {
      throw new Error('RewardedAd.addAdEventListener(*) use RewardedAdEventType.LOADED instead of AdEventType.LOADED.');
    }
    return this._addAdEventListener(type, listener);
  }
}
exports.RewardedAd = RewardedAd;
_defineProperty(RewardedAd, "_rewardedRequest", 0);
//# sourceMappingURL=RewardedAd.js.map