"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  SDK_VERSION: true,
  MobileAds: true,
  AdsConsentDebugGeography: true,
  AdsConsentPurposes: true,
  AdsConsentSpecialFeatures: true,
  AdsConsentStatus: true,
  MaxAdContentRating: true,
  TestIds: true,
  AdEventType: true,
  BannerAdSize: true,
  GAMAdEventType: true,
  RewardedAdEventType: true,
  AdsConsent: true,
  AppOpenAd: true,
  InterstitialAd: true,
  RewardedAd: true,
  RewardedInterstitialAd: true,
  BannerAd: true,
  GAMBannerAd: true,
  GAMInterstitialAd: true,
  useAppOpenAd: true,
  useInterstitialAd: true,
  useRewardedAd: true,
  useRewardedInterstitialAd: true
};
Object.defineProperty(exports, "AdEventType", {
  enumerable: true,
  get: function () {
    return _AdEventType.AdEventType;
  }
});
Object.defineProperty(exports, "AdsConsent", {
  enumerable: true,
  get: function () {
    return _AdsConsent.AdsConsent;
  }
});
Object.defineProperty(exports, "AdsConsentDebugGeography", {
  enumerable: true,
  get: function () {
    return _AdsConsentDebugGeography.AdsConsentDebugGeography;
  }
});
Object.defineProperty(exports, "AdsConsentPurposes", {
  enumerable: true,
  get: function () {
    return _AdsConsentPurposes.AdsConsentPurposes;
  }
});
Object.defineProperty(exports, "AdsConsentSpecialFeatures", {
  enumerable: true,
  get: function () {
    return _AdsConsentSpecialFeatures.AdsConsentSpecialFeatures;
  }
});
Object.defineProperty(exports, "AdsConsentStatus", {
  enumerable: true,
  get: function () {
    return _AdsConsentStatus.AdsConsentStatus;
  }
});
Object.defineProperty(exports, "AppOpenAd", {
  enumerable: true,
  get: function () {
    return _AppOpenAd.AppOpenAd;
  }
});
Object.defineProperty(exports, "BannerAd", {
  enumerable: true,
  get: function () {
    return _BannerAd.BannerAd;
  }
});
Object.defineProperty(exports, "BannerAdSize", {
  enumerable: true,
  get: function () {
    return _BannerAdSize.BannerAdSize;
  }
});
Object.defineProperty(exports, "GAMAdEventType", {
  enumerable: true,
  get: function () {
    return _GAMAdEventType.GAMAdEventType;
  }
});
Object.defineProperty(exports, "GAMBannerAd", {
  enumerable: true,
  get: function () {
    return _GAMBannerAd.GAMBannerAd;
  }
});
Object.defineProperty(exports, "GAMInterstitialAd", {
  enumerable: true,
  get: function () {
    return _GAMInterstitialAd.GAMInterstitialAd;
  }
});
Object.defineProperty(exports, "InterstitialAd", {
  enumerable: true,
  get: function () {
    return _InterstitialAd.InterstitialAd;
  }
});
Object.defineProperty(exports, "MaxAdContentRating", {
  enumerable: true,
  get: function () {
    return _MaxAdContentRating.MaxAdContentRating;
  }
});
Object.defineProperty(exports, "MobileAds", {
  enumerable: true,
  get: function () {
    return _MobileAds.MobileAds;
  }
});
Object.defineProperty(exports, "RewardedAd", {
  enumerable: true,
  get: function () {
    return _RewardedAd.RewardedAd;
  }
});
Object.defineProperty(exports, "RewardedAdEventType", {
  enumerable: true,
  get: function () {
    return _RewardedAdEventType.RewardedAdEventType;
  }
});
Object.defineProperty(exports, "RewardedInterstitialAd", {
  enumerable: true,
  get: function () {
    return _RewardedInterstitialAd.RewardedInterstitialAd;
  }
});
exports.SDK_VERSION = void 0;
Object.defineProperty(exports, "TestIds", {
  enumerable: true,
  get: function () {
    return _TestIds.TestIds;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _MobileAds.default;
  }
});
Object.defineProperty(exports, "useAppOpenAd", {
  enumerable: true,
  get: function () {
    return _useAppOpenAd.useAppOpenAd;
  }
});
Object.defineProperty(exports, "useInterstitialAd", {
  enumerable: true,
  get: function () {
    return _useInterstitialAd.useInterstitialAd;
  }
});
Object.defineProperty(exports, "useRewardedAd", {
  enumerable: true,
  get: function () {
    return _useRewardedAd.useRewardedAd;
  }
});
Object.defineProperty(exports, "useRewardedInterstitialAd", {
  enumerable: true,
  get: function () {
    return _useRewardedInterstitialAd.useRewardedInterstitialAd;
  }
});
var _version = require("./version");
var _MobileAds = _interopRequireWildcard(require("./MobileAds"));
var _AdsConsentDebugGeography = require("./AdsConsentDebugGeography");
var _AdsConsentPurposes = require("./AdsConsentPurposes");
var _AdsConsentSpecialFeatures = require("./AdsConsentSpecialFeatures");
var _AdsConsentStatus = require("./AdsConsentStatus");
var _MaxAdContentRating = require("./MaxAdContentRating");
var _TestIds = require("./TestIds");
var _AdEventType = require("./AdEventType");
var _BannerAdSize = require("./BannerAdSize");
var _GAMAdEventType = require("./GAMAdEventType");
var _RewardedAdEventType = require("./RewardedAdEventType");
var _AdsConsent = require("./AdsConsent");
var _AppOpenAd = require("./ads/AppOpenAd");
var _InterstitialAd = require("./ads/InterstitialAd");
var _RewardedAd = require("./ads/RewardedAd");
var _RewardedInterstitialAd = require("./ads/RewardedInterstitialAd");
var _BannerAd = require("./ads/BannerAd");
var _GAMBannerAd = require("./ads/GAMBannerAd");
var _GAMInterstitialAd = require("./ads/GAMInterstitialAd");
var _useAppOpenAd = require("./hooks/useAppOpenAd");
var _useInterstitialAd = require("./hooks/useInterstitialAd");
var _useRewardedAd = require("./hooks/useRewardedAd");
var _useRewardedInterstitialAd = require("./hooks/useRewardedInterstitialAd");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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

// import { SDK_VERSION } from 'react-native-google-mobile-ads';
const SDK_VERSION = _version.version;
exports.SDK_VERSION = SDK_VERSION;
//# sourceMappingURL=index.js.map