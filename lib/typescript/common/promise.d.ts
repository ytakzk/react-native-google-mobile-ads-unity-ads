/**
 *
 */
export declare function promiseDefer(): {
    promise: Promise<unknown> | null;
    resolve: (value: unknown) => void;
    reject: (value: unknown) => void;
};
/**
 * @param promise
 * @param callback
 */
export declare function promiseWithOptionalCallback(promise: Promise<unknown>, callback: (a: unknown, b?: unknown) => void): Promise<unknown>;
//# sourceMappingURL=promise.d.ts.map