"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getDataUrlParts: true,
  once: true,
  isError: true,
  hasOwnProperty: true,
  isPropertySet: true,
  stripTrailingSlash: true,
  isIOS: true,
  isAndroid: true,
  tryJSONParse: true,
  tryJSONStringify: true,
  Base64: true,
  ReferenceBase: true
};
exports.Base64 = void 0;
Object.defineProperty(exports, "ReferenceBase", {
  enumerable: true,
  get: function () {
    return _ReferenceBase.ReferenceBase;
  }
});
exports.getDataUrlParts = getDataUrlParts;
exports.hasOwnProperty = hasOwnProperty;
exports.isAndroid = void 0;
exports.isError = isError;
exports.isIOS = void 0;
exports.isPropertySet = isPropertySet;
exports.once = once;
exports.stripTrailingSlash = stripTrailingSlash;
exports.tryJSONParse = tryJSONParse;
exports.tryJSONStringify = tryJSONStringify;
var _reactNative = require("react-native");
var Base64 = _interopRequireWildcard(require("./Base64"));
exports.Base64 = Base64;
var _validate = require("./validate");
Object.keys(_validate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _validate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validate[key];
    }
  });
});
var _id = require("./id");
Object.keys(_id).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _id[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _id[key];
    }
  });
});
var _path = require("./path");
Object.keys(_path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _path[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _path[key];
    }
  });
});
var _promise = require("./promise");
Object.keys(_promise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _promise[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _promise[key];
    }
  });
});
var _ReferenceBase = require("./ReferenceBase");
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

function getDataUrlParts(dataUrlString) {
  const isBase64 = dataUrlString.includes(';base64');
  let [mediaType, base64String] = dataUrlString.split(',');
  if (!mediaType || !base64String) {
    return {
      base64String: undefined,
      mediaType: undefined
    };
  }
  mediaType = mediaType.replace('data:', '').replace(';base64', '');
  if (base64String && base64String.includes('%')) {
    base64String = decodeURIComponent(base64String);
  }
  if (!isBase64) {
    base64String = Base64.btoa(base64String);
  }
  return {
    base64String,
    mediaType
  };
}
function once(fn, context) {
  let onceResult;
  let ranOnce = false;
  return function onceInner() {
    if (!ranOnce) {
      ranOnce = true;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      onceResult = fn.apply(context || this, args);
    }
    return onceResult;
  };
}
function isError(value) {
  if (Object.prototype.toString.call(value) === '[object Error]') {
    return true;
  }
  return value instanceof Error;
}
function hasOwnProperty(target, property) {
  return Object.hasOwnProperty.call(target, property);
}
function isPropertySet(target, property) {
  return hasOwnProperty(target, property) && !(0, _validate.isUndefined)(target[property]);
}

/**
 * Remove a trailing forward slash from a string if it exists
 *
 * @param string
 * @returns {*}
 */
function stripTrailingSlash(string) {
  if (!(0, _validate.isString)(string)) {
    return string;
  }
  return string.endsWith('/') ? string.slice(0, -1) : string;
}
const isIOS = _reactNative.Platform.OS === 'ios';
exports.isIOS = isIOS;
const isAndroid = _reactNative.Platform.OS === 'android';
exports.isAndroid = isAndroid;
function tryJSONParse(string) {
  try {
    return string && JSON.parse(string);
  } catch (jsonError) {
    return string;
  }
}
function tryJSONStringify(data) {
  try {
    return JSON.stringify(data);
  } catch (jsonError) {
    return null;
  }
}
//# sourceMappingURL=index.js.map