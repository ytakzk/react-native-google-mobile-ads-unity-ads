"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdsConsentDebugGeography = void 0;
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
/**
 * AdsConsentDebugGeography enum.
 *
 * Used to set a mock location when testing the `AdsConsent` helper.
 */
let AdsConsentDebugGeography;
exports.AdsConsentDebugGeography = AdsConsentDebugGeography;
(function (AdsConsentDebugGeography) {
  AdsConsentDebugGeography[AdsConsentDebugGeography["DISABLED"] = 0] = "DISABLED";
  AdsConsentDebugGeography[AdsConsentDebugGeography["EEA"] = 1] = "EEA";
  AdsConsentDebugGeography[AdsConsentDebugGeography["NOT_EEA"] = 2] = "NOT_EEA";
})(AdsConsentDebugGeography || (exports.AdsConsentDebugGeography = AdsConsentDebugGeography = {}));
//# sourceMappingURL=AdsConsentDebugGeography.js.map