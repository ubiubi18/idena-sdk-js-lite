import type { ContractArgument, ContractArgumentFormatValue } from './types';
export declare class CallContractAttachment {
    private _method;
    private _args;
    constructor(init?: Partial<{
        method: string;
        args: Uint8Array[];
    }>);
    set method(method: string);
    get method(): string;
    set args(args: Uint8Array[]);
    get args(): Uint8Array[];
    getArgs(formats: ContractArgumentFormatValue[]): ContractArgument[];
    setArgs(args: ContractArgument[]): this;
    fromBytes(bytes: Uint8Array): this;
    toBytes(): Uint8Array<ArrayBuffer>;
}
//# sourceMappingURL=callContractAttachment.d.ts.map