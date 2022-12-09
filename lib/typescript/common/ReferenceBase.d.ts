export declare class ReferenceBase {
    path: string;
    constructor(_path: string);
    /**
     * The last part of a Reference's path (after the last '/')
     * The key of a root Reference is null.
     * @type {String}
     * {@link https://firebase.google.com/docs/reference/js/firebase.database.Reference#key}
     */
    get key(): string | null;
}
//# sourceMappingURL=ReferenceBase.d.ts.map