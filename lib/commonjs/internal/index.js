"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Module: true,
  NativeError: true,
  SharedEventEmitter: true
};
Object.defineProperty(exports, "Module", {
  enumerable: true,
  get: function () {
    return _Module.AppModule;
  }
});
Object.defineProperty(exports, "NativeError", {
  enumerable: true,
  get: function () {
    return _NativeError.NativeError;
  }
});
Object.defineProperty(exports, "SharedEventEmitter", {
  enumerable: true,
  get: function () {
    return _SharedEventEmitter.SharedEventEmitter;
  }
});
var _Module = require("./Module");
var _NativeError = require("./NativeError");
var _nativeModule = require("./registry/nativeModule");
Object.keys(_nativeModule).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _nativeModule[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nativeModule[key];
    }
  });
});
var _SharedEventEmitter = require("./SharedEventEmitter");
//# sourceMappingURL=index.js.map