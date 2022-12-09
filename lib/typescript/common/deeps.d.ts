/**
 * Deep get a value from an object.
 * @website https://github.com/Salakar/deeps
 * @param object
 * @param path
 * @param joiner
 * @returns {*}
 */
export declare function deepGet(object: Record<string, unknown>, path: string, joiner?: string): unknown;
/**
 * Deep set a value
 * @param object
 * @param path
 * @param value
 * @param initPaths
 * @param joiner
 */
export declare function deepSet(object: Record<string, unknown>, path: string, value: unknown, initPaths?: boolean, joiner?: string): boolean;
//# sourceMappingURL=deeps.d.ts.map