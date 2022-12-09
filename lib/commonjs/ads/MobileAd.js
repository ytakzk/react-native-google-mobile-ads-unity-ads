"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileAd = void 0;
var _common = require("../common");
var _NativeError = require("../internal/NativeError");
var _AdEventType = require("../AdEventType");
var _RewardedAdEventType = require("../RewardedAdEventType");
var _GAMAdEventType = require("../GAMAdEventType");
var _validateAdShowOptions = require("../validateAdShowOptions");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class MobileAd {
  constructor(type, googleMobileAds, requestId, adUnitId, requestOptions) {
    _defineProperty(this, "_type", void 0);
    _defineProperty(this, "_googleMobileAds", void 0);
    _defineProperty(this, "_requestId", void 0);
    _defineProperty(this, "_adUnitId", void 0);
    _defineProperty(this, "_requestOptions", void 0);
    _defineProperty(this, "_loaded", void 0);
    _defineProperty(this, "_isLoadCalled", void 0);
    _defineProperty(this, "_adEventsListeners", void 0);
    _defineProperty(this, "_adEventListenersMap", void 0);
    _defineProperty(this, "_adEventsListenerId", void 0);
    _defineProperty(this, "_adEventListenerId", void 0);
    _defineProperty(this, "_nativeListener", void 0);
    this._type = type;
    this._googleMobileAds = googleMobileAds;
    this._requestId = requestId;
    this._adUnitId = adUnitId;
    this._requestOptions = requestOptions;
    this._loaded = false;
    this._isLoadCalled = false;
    this._adEventsListeners = new Map();
    this._adEventListenersMap = new Map();
    Object.values({
      ..._AdEventType.AdEventType,
      ..._RewardedAdEventType.RewardedAdEventType,
      ..._GAMAdEventType.GAMAdEventType,
      _: _AdEventType.AdEventType.LOADED // since AdEventType.LOADED is overwritten by RewardedAdEventType.LOADED
    }).forEach(type => {
      this._adEventListenersMap.set(type, new Map());
    });
    this._adEventListenerId = 0;
    this._adEventsListenerId = 0;
    this._nativeListener = googleMobileAds.emitter.addListener(`google_mobile_ads_${type}_event:${adUnitId}:${requestId}`, this._handleAdEvent.bind(this));
  }
  _handleAdEvent(event) {
    const {
      type,
      error,
      data
    } = event.body;
    if (type === _AdEventType.AdEventType.LOADED || type === _RewardedAdEventType.RewardedAdEventType.LOADED) {
      this._loaded = true;
    }
    if (type === _AdEventType.AdEventType.CLOSED) {
      this._loaded = false;
      this._isLoadCalled = false;
    }
    if (type === _AdEventType.AdEventType.ERROR) {
      this._loaded = false;
      this._isLoadCalled = false;
    }
    let payload = data;
    if (error) {
      payload = _NativeError.NativeError.fromEvent(error, 'googleMobileAds');
    }
    this._adEventsListeners.forEach(listener => {
      listener({
        type,
        payload
      });
    });
    this._getAdEventListeners(type).forEach(listener => {
      listener(payload);
    });
  }
  _addAdEventsListener(listener) {
    if (!(0, _common.isFunction)(listener)) {
      throw new Error(`${this._className}.addAdEventsListener(*) 'listener' expected a function.`);
    }
    const id = this._adEventsListenerId++;
    this._adEventsListeners.set(id, listener);
    return () => {
      this._adEventsListeners.delete(id);
    };
  }
  _addAdEventListener(type, listener) {
    if (!((0, _common.isOneOf)(type, Object.values(_AdEventType.AdEventType)) || (0, _common.isOneOf)(type, Object.values(_RewardedAdEventType.RewardedAdEventType)) && (this._type === 'rewarded' || this._type === 'rewarded_interstitial'))) {
      throw new Error(`${this._className}.addAdEventListener(*) 'type' expected a valid event type value.`);
    }
    if (!(0, _common.isFunction)(listener)) {
      throw new Error(`${this._className}.addAdEventListener(_, *) 'listener' expected a function.`);
    }
    const id = this._adEventListenerId++;
    this._getAdEventListeners(type).set(id, listener);
    return () => {
      this._getAdEventListeners(type).delete(id);
    };
  }
  _getAdEventListeners(type) {
    return this._adEventListenersMap.get(type);
  }
  get _className() {
    return this.constructor.name;
  }
  get _camelCaseType() {
    let type;
    if (this._type === 'app_open') {
      type = 'appOpen';
    } else if (this._type === 'rewarded_interstitial') {
      type = 'rewardedInterstitial';
    } else {
      type = this._type;
    }
    return type;
  }
  load() {
    // Prevent multiple load calls
    if (this._loaded || this._isLoadCalled) {
      return;
    }
    this._isLoadCalled = true;
    const load = this._googleMobileAds.native[`${this._camelCaseType}Load`];
    load(this._requestId, this._adUnitId, this._requestOptions);
  }
  show(showOptions) {
    if (!this._loaded) {
      throw new Error(`${this._className}.show() The requested ${this._className} has not loaded and could not be shown.`);
    }
    let options;
    try {
      options = (0, _validateAdShowOptions.validateAdShowOptions)(showOptions);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`${this._className}.show(*) ${e.message}.`);
      } else {
        throw e;
      }
    }
    const show = this._googleMobileAds.native[`${this._camelCaseType}Show`];
    return show(this._requestId, this._adUnitId, options);
  }
  removeAllListeners() {
    this._adEventsListeners.clear();
    this._adEventListenersMap.forEach((_, type, map) => {
      map.set(type, new Map());
    });
  }
  get adUnitId() {
    return this._adUnitId;
  }
  get loaded() {
    return this._loaded;
  }
}
exports.MobileAd = MobileAd;
//# sourceMappingURL=MobileAd.js.map