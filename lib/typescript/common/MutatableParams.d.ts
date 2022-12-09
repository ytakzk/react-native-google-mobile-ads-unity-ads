export declare class MutatableParams {
    _mutatableParams: Record<string, unknown>;
    _parentInstance: MutatableParams;
    constructor(parentInstance: MutatableParams);
    set(param: string, value: unknown): MutatableParams;
    get(param: string): unknown;
    toJSON(): Record<string, unknown>;
    validate(): void;
}
//# sourceMappingURL=MutatableParams.d.ts.map