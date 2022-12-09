"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMobileAdsNativeEventEmitter = void 0;
var _reactNative = require("react-native");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const {
  RNAppModule
} = _reactNative.NativeModules;
class GANativeEventEmitter extends _reactNative.NativeEventEmitter {
  constructor() {
    super(RNAppModule);
    _defineProperty(this, "ready", void 0);
    this.ready = false;
  }
  addListener(eventType, listener, context) {
    if (!this.ready) {
      RNAppModule.eventsNotifyReady(true);
      this.ready = true;
    }
    RNAppModule.eventsAddListener(eventType);
    const subscription = super.addListener(`rnapp_${eventType}`, listener, context);

    // React Native 0.65+ altered EventEmitter:
    // - removeSubscription is gone
    // - addListener returns an unsubscriber instead of a more complex object with eventType etc

    // make sure eventType for backwards compatibility just in case
    subscription.eventType = `rnapp_${eventType}`;

    // New style is to return a remove function on the object, just in csae people call that,
    // we will modify it to do our native unsubscription then call the original
    const originalRemove = subscription.remove;
    const newRemove = () => {
      RNAppModule.eventsRemoveListener(eventType, false);
      if (super.removeSubscription != null) {
        // This is for RN <= 0.64 - 65 and greater no longer have removeSubscription
        super.removeSubscription(subscription);
      } else if (originalRemove != null) {
        // This is for RN >= 0.65
        originalRemove();
      }
    };
    subscription.remove = newRemove;
    return subscription;
  }
  removeAllListeners(eventType) {
    RNAppModule.eventsRemoveListener(eventType, true);
    super.removeAllListeners(`rnapp_${eventType}`);
  }

  // This is likely no longer ever called, but it is here for backwards compatibility with RN <= 0.64
  removeSubscription(subscription) {
    RNAppModule.eventsRemoveListener(subscription.eventType.replace('rnapp_', ''), false);
    if (super.removeSubscription != null) {
      super.removeSubscription(subscription);
    }
  }
}
const GoogleMobileAdsNativeEventEmitter = new GANativeEventEmitter();
exports.GoogleMobileAdsNativeEventEmitter = GoogleMobileAdsNativeEventEmitter;
//# sourceMappingURL=GoogleMobileAdsNativeEventEmitter.js.map