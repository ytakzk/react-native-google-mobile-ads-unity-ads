"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitializationState = void 0;
let InitializationState;
/**
 * An immutable snapshot of a mediation adapter's initialization status.
 */
exports.InitializationState = InitializationState;
(function (InitializationState) {
  InitializationState[InitializationState["AdapterInitializationStateNotReady"] = 0] = "AdapterInitializationStateNotReady";
  InitializationState[InitializationState["AdapterInitializationStateReady"] = 1] = "AdapterInitializationStateReady";
})(InitializationState || (exports.InitializationState = InitializationState = {}));
//# sourceMappingURL=AdapterStatus.js.map