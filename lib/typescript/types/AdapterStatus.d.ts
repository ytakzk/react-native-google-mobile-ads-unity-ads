export declare enum InitializationState {
    /**
     * The mediation adapter is less likely to fill ad requests.
     */
    AdapterInitializationStateNotReady = 0,
    /**
     * The mediation adapter is ready to service ad requests.
     */
    AdapterInitializationStateReady = 1
}
/**
 * An immutable snapshot of a mediation adapter's initialization status.
 */
export declare type AdapterStatus = {
    name: string;
    description: string;
    status: InitializationState;
};
//# sourceMappingURL=AdapterStatus.d.ts.map