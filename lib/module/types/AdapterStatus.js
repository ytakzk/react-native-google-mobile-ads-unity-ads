export let InitializationState;

/**
 * An immutable snapshot of a mediation adapter's initialization status.
 */
(function (InitializationState) {
  InitializationState[InitializationState["AdapterInitializationStateNotReady"] = 0] = "AdapterInitializationStateNotReady";
  InitializationState[InitializationState["AdapterInitializationStateReady"] = 1] = "AdapterInitializationStateReady";
})(InitializationState || (InitializationState = {}));
//# sourceMappingURL=AdapterStatus.js.map