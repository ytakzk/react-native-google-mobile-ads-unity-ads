/**
 * Generate a firebase id - for use with ref().push(val, cb) - e.g. -KXMr7k2tXUFQqiaZRY4'
 * @param serverTimeOffset - pass in server time offset from native side
 * @returns {string}
 */
export declare function generateDatabaseId(serverTimeOffset?: number): string;
/**
 * Generate a firestore auto id for use with collection/document .add()
 * @return {string}
 */
export declare function generateFirestoreId(): string;
//# sourceMappingURL=id.d.ts.map