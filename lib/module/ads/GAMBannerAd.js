function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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

import React, { createRef } from 'react';
import { findNodeHandle, UIManager } from 'react-native';
import { BaseAd } from './BaseAd';
export class GAMBannerAd extends React.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "ref", /*#__PURE__*/createRef());
  }
  recordManualImpression() {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this.ref.current), 'recordManualImpression', undefined);
  }
  render() {
    return /*#__PURE__*/React.createElement(BaseAd, _extends({
      ref: this.ref
    }, this.props));
  }
}
//# sourceMappingURL=GAMBannerAd.js.map