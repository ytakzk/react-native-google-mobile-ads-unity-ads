export declare function objectKeyValuesAreStrings(object: Record<string, unknown>): boolean;
/**
 * Simple is null check.
 *
 * @param value
 * @returns {boolean}
 */
export declare function isNull(value: unknown): boolean;
/**
 * Simple is object check.
 *
 * @param value
 * @returns {boolean}
 */
export declare function isObject(value: unknown): boolean;
/**
 * Simple is date check
 * https://stackoverflow.com/a/44198641
 * @param value
 * @returns {boolean}
 */
export declare function isDate(value: number): boolean | 0;
/**
 * Simple is function check
 *
 * @param value
 * @returns {*|boolean}
 */
export declare function isFunction(value: unknown): boolean;
/**
 * Simple is string check
 * @param value
 * @return {boolean}
 */
export declare function isString(value: unknown): boolean;
/**
 * Simple is number check
 * @param value
 * @return {boolean}
 */
export declare function isNumber(value: unknown): value is number;
/**
 * Simple finite check
 * @param value
 * @returns {boolean}
 */
export declare function isFinite(value: unknown): boolean;
/**
 * Simple integer check
 * @param value
 * @returns {boolean}
 */
export declare function isInteger(value: unknown): boolean;
/**
 * Simple is boolean check
 *
 * @param value
 * @return {boolean}
 */
export declare function isBoolean(value: unknown): boolean;
/**
 *
 * @param value
 * @returns {arg is Array<unknown>}
 */
export declare function isArray(value: unknown): boolean;
/**
 *
 * @param value
 * @returns {boolean}
 */
export declare function isUndefined(value: unknown): value is undefined;
/**
 * /^[a-zA-Z0-9_]+$/
 *
 * @param value
 * @returns {boolean}
 */
export declare function isAlphaNumericUnderscore(value: string): boolean;
export declare function isValidUrl(url: string): boolean;
/**
 * Array includes
 *
 * @param value
 * @param oneOf
 * @returns {boolean}
 */
export declare function isOneOf(value: unknown, oneOf?: unknown[]): boolean;
export declare function noop(): void;
export declare function validateOptionalNativeDependencyExists(firebaseJsonKey: string, apiName: string, nativeFnExists: boolean): void;
//# sourceMappingURL=validate.d.ts.map