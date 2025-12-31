import { type ContractArgument, type ContractArgumentFormatValue } from './types';
export declare function argumentFromBytes(format: ContractArgumentFormatValue, index: number, bytes: Uint8Array): ContractArgument;
export declare function argumentsFromBytes(formats: ContractArgumentFormatValue[], bytes: Uint8Array[]): ContractArgument[];
export declare function argumentToBytes(data: ContractArgument): Uint8Array;
export declare function argumentsToBytes(args: ContractArgument[]): Uint8Array[];
//# sourceMappingURL=utils.d.ts.map