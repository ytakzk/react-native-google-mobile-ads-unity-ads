"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNativeModule = getNativeModule;
var _reactNative = require("react-native");
var _NativeError = require("../NativeError");
var _GoogleMobileAdsNativeEventEmitter = require("../GoogleMobileAdsNativeEventEmitter");
var _SharedEventEmitter = require("../SharedEventEmitter");
var _common = require("../../common");
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

const NATIVE_MODULE_REGISTRY = {};
const NATIVE_MODULE_EVENT_SUBSCRIPTIONS = {};
function nativeModuleKey(module) {
  return `${module._customUrlOrRegion || ''}:${module.app.name}:${module._config.namespace}`;
}

/**
 * Wraps a native module method to provide
 * auto prepended args and custom Error classes.
 *
 * @param namespace
 * @param method
 * @param argToPrepend
 * @returns {Function}
 */
function nativeModuleMethodWrapped(namespace, method, argToPrepend) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const possiblePromise = method(...[...argToPrepend, ...args]);

    // @ts-ignore -- return type is Promise, so tsc infers we *know* it is a promise and .then always exists, but
    //  but the typing is actually speculative, we do need to test it
    if (possiblePromise && possiblePromise.then) {
      const jsStack = new Error().stack || '';
      return possiblePromise.catch(nativeError => Promise.reject(new _NativeError.NativeError(nativeError, jsStack, namespace)));
    }
    return possiblePromise;
  };
}

/**
 * Prepends all arguments in prependArgs to all native method calls
 *
 * @param namespace
 * @param NativeModule
 * @param argToPrepend
 */
function nativeModuleWrapped(namespace, NativeModule, argToPrepend) {
  const native = {};
  if (!NativeModule) {
    return NativeModule;
  }
  const properties = Object.keys(NativeModule);
  for (let i = 0, len = properties.length; i < len; i++) {
    const property = properties[i];
    if ((0, _common.isFunction)(NativeModule[property])) {
      native[property] = nativeModuleMethodWrapped(namespace, NativeModule[property], argToPrepend);
    } else {
      native[property] = NativeModule[property];
    }
  }
  return native;
}

/**
 * Initialises and wraps all the native module methods.
 *
 * @param module
 * @returns {*}
 */
function initialiseNativeModule(module) {
  const config = module._config;
  const key = nativeModuleKey(module);
  const {
    namespace,
    nativeEvents,
    nativeModuleName
  } = config;
  const multiModuleRoot = {};
  const multiModule = Array.isArray(nativeModuleName);
  const nativeModuleNames = multiModule ? nativeModuleName : [nativeModuleName];
  for (let i = 0; i < nativeModuleNames.length; i++) {
    const nativeModule = _reactNative.NativeModules[nativeModuleNames[i]];

    // only error if there's a single native module
    // as multi modules can mean some are optional
    if (!multiModule && !nativeModule) {
      throw new Error(getMissingModuleHelpText(namespace));
    }
    if (multiModule) {
      multiModuleRoot[nativeModuleNames[i]] = !!nativeModule;
    }
    Object.assign(multiModuleRoot, nativeModuleWrapped(namespace, nativeModule, []));
  }
  if (nativeEvents && nativeEvents.length) {
    for (let i = 0, len = nativeEvents.length; i < len; i++) {
      subscribeToNativeModuleEvent(nativeEvents[i]);
    }
  }
  Object.freeze(multiModuleRoot);
  NATIVE_MODULE_REGISTRY[key] = multiModuleRoot;
  return NATIVE_MODULE_REGISTRY[key];
}

/**
 * Subscribe to a native event for js side distribution by appName
 *    React Native events are hard set at compile - cant do dynamic event names
 *    so we use a single event send it to js and js then internally can prefix it
 *    and distribute dynamically.
 *
 * @param eventName
 * @private
 */
function subscribeToNativeModuleEvent(eventName) {
  if (!NATIVE_MODULE_EVENT_SUBSCRIPTIONS[eventName]) {
    _GoogleMobileAdsNativeEventEmitter.GoogleMobileAdsNativeEventEmitter.addListener(eventName, event => {
      if (event.appName) {
        // native event has an appName property - auto prefix and internally emit
        _SharedEventEmitter.SharedEventEmitter.emit(`${event.appName}-${eventName}`, event);
      } else {
        // standard event - no need to prefix
        _SharedEventEmitter.SharedEventEmitter.emit(eventName, event);
      }
    });
    NATIVE_MODULE_EVENT_SUBSCRIPTIONS[eventName] = true;
  }
}

/**
 * Help text for integrating the native counter parts for each module.
 *
 * @param namespace
 * @returns {string}
 */
function getMissingModuleHelpText(namespace) {
  const snippet = `${namespace}()`;
  const nativeModule = namespace.charAt(0).toUpperCase() + namespace.slice(1);
  if (_reactNative.Platform.OS === 'ios') {
    return `You attempted to use a module that's not installed natively on your iOS project by calling ${snippet}.` + '\r\n\r\nEnsure you have either linked the module or added it to your projects Podfile.' + '\r\n\r\nSee http://invertase.link/ios for full setup instructions.';
  }
  const rnPackage = `'io.invertase.${namespace}.ReactNative${nativeModule}Package'`;
  const newInstance = `'new ReactNative${nativeModule}Package()'`;
  return `You attempted to use a module that's not installed on your Android project by calling ${snippet}.` + `\r\n\r\nEnsure you have:\r\n\r\n1) imported the ${rnPackage} module in your 'MainApplication.java' file.\r\n\r\n2) Added the ` + `${newInstance} line inside of the RN 'getPackages()' method list.` + '\r\n\r\nSee http://invertase.link/android for full setup instructions.';
}

/**
 * Gets a wrapped native module instance for the provided module.
 * Will attempt to create a new instance if non previously created.
 *
 * @param module
 * @returns {*}
 */
function getNativeModule(module) {
  const key = nativeModuleKey(module);
  if (NATIVE_MODULE_REGISTRY[key]) {
    return NATIVE_MODULE_REGISTRY[key];
  }
  return initialiseNativeModule(module);
}
//# sourceMappingURL=nativeModule.js.map