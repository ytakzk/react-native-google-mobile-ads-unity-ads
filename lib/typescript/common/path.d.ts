/**
 * Returns the next parent of the path e.g. /foo/bar/car -> /foo/bar
 */
export declare function pathParent(path: string): string | null;
/**
 * Joins a parent and a child path
 */
export declare function pathChild(path: string, childPath: string): string;
/**
 * Returns the last component of a path, e.g /foo/bar.jpeg -> bar.jpeg
 */
export declare function pathLastComponent(path: string): string;
/**
 * Returns all none empty pieces of the path
 * @param path
 * @returns {*}
 */
export declare function pathPieces(path: string): string[];
/**
 * Returns whether a given path is empty
 * @param path
 * @returns {boolean}
 */
export declare function pathIsEmpty(path: string): boolean;
/**
 * Converts a given path to a URL encoded string
 * @param path
 * @returns {string|string}
 */
export declare function pathToUrlEncodedString(path: string): string;
export declare const INVALID_PATH_REGEX: RegExp;
/**
 * Ensures a given path is a valid Firebase path
 * @param path
 * @returns {boolean}
 */
export declare function isValidPath(path: unknown): boolean;
/**
 * Converts a file path to a standardized string path
 * @param path
 * @returns {*}
 */
export declare function toFilePath(path: string): string;
//# sourceMappingURL=path.d.ts.map