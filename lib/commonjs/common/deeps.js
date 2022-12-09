"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepGet = deepGet;
exports.deepSet = deepSet;
var _validate = require("./validate");
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
 * Deep get a value from an object.
 * @website https://github.com/Salakar/deeps
 * @param object
 * @param path
 * @param joiner
 * @returns {*}
 */
function deepGet(object, path) {
  let joiner = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
  if (!(0, _validate.isObject)(object) && !Array.isArray(object)) {
    return undefined;
  }
  const keys = path.split(joiner);
  let i = 0;
  let value;
  const len = keys.length;
  while (i < len) {
    const key = keys[i++];
    if (!object || !Object.hasOwnProperty.call(object, key)) {
      return undefined;
    }
    value = object[key];
  }
  return value;
}

/**
 * Deep set a value
 * @param object
 * @param path
 * @param value
 * @param initPaths
 * @param joiner
 */
function deepSet(object, path, value) {
  let initPaths = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  let joiner = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.';
  if (!(0, _validate.isObject)(object)) {
    return false;
  }
  const keys = path.split(joiner);
  let i = 0;
  let _object = object;
  const len = keys.length - 1;
  while (i < len) {
    const key = keys[i++];
    if (initPaths && !Object.hasOwnProperty.call(object, key)) {
      _object[key] = {};
    }
    _object = _object[key];
  }
  if ((0, _validate.isObject)(_object) || (0, _validate.isArray)(_object) && !Number.isNaN(keys[i])) {
    _object[keys[i]] = value;
  } else {
    return false;
  }
  return true;
}
//# sourceMappingURL=deeps.js.map