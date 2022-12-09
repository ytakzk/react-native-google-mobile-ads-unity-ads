"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = void 0;
var _nativeModule = require("./registry/nativeModule");
var _SharedEventEmitter = require("./SharedEventEmitter");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class AppModule {
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
    return _SharedEventEmitter.SharedEventEmitter;
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
    this._nativeModule = (0, _nativeModule.getNativeModule)(this);
    return this._nativeModule;
  }
}

// Instance of checks don't work once compiled
exports.AppModule = AppModule;
_defineProperty(AppModule, "__extended__", {});
AppModule.__extended__ = {};
//# sourceMappingURL=Module.js.map