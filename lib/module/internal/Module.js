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

import { getNativeModule } from './registry/nativeModule';
import { SharedEventEmitter } from './SharedEventEmitter';
export class AppModule {
  constructor(app, config) {
    _defineProperty(this, "_app", void 0);
    _defineProperty(this, "_nativeModule", void 0);
    _defineProperty(this, "_config", void 0);
    this._app = app;
    this._nativeModule = null;
    this._config = Object.assign({}, config);
  }
  get app() {
    return this._app;
  }
  get emitter() {
    return SharedEventEmitter;
  }
  eventNameForApp() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return `${this.app.name}-${args.join('-')}`;
  }
  get native() {
    if (this._nativeModule) {
      return this._nativeModule;
    }
    this._nativeModule = getNativeModule(this);
    return this._nativeModule;
  }
}

// Instance of checks don't work once compiled
_defineProperty(AppModule, "__extended__", {});
AppModule.__extended__ = {};
//# sourceMappingURL=Module.js.map