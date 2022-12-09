import * as Base64 from './Base64';
export * from './id';
export * from './path';
export * from './promise';
export * from './validate';
export { Base64 };
export { ReferenceBase } from './ReferenceBase';
export declare function getDataUrlParts(dataUrlString: string): {
    base64String: undefined;
    mediaType: undefined;
} | {
    base64String: string;
    mediaType: string;
};
export declare function once<T>(fn: () => void, context: unknown): (this: T, ...args: []) => void;
export declare function isError(value: unknown): boolean;
export declare function hasOwnProperty(target: unknown, property: PropertyKey): boolean;
export declare function isPropertySet(target: unknown, property: PropertyKey): boolean;
/**
 * Remove a trailing forward slash from a string if it exists
 *
 * @param string
 * @returns {*}
 */
export declare function stripTrailingSlash(string: string): string;
export declare const isIOS: boolean;
export declare const isAndroid: boolean;
export declare function tryJSONParse(string: string): any;
export declare function tryJSONStringify(data: unknown): string | null;
//# sourceMappingURL=index.d.ts.map