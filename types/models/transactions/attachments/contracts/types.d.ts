export type EmbeddedContractTypeKey = 'TimeLockContract' | 'OracleVotingContract' | 'OracleLockContract' | 'RefundableOracleLockContract' | 'MultisigContract';
export type EmbeddedContractTypeValue = 1 | 2 | 3 | 4 | 5;
export declare const embeddedContractType: Record<EmbeddedContractTypeKey, EmbeddedContractTypeValue>;
export type ContractArgumentFormatKey = 'Default' | 'Byte' | 'Int8' | 'Uint64' | 'Int64' | 'String' | 'Bigint' | 'Hex' | 'Dna';
export type ContractArgumentFormatValue = 'default' | 'byte' | 'int8' | 'uint64' | 'int64' | 'string' | 'bigint' | 'hex' | 'dna';
export declare const contractArgumentFormat: Record<ContractArgumentFormatKey, ContractArgumentFormatValue>;
export interface ContractArgument {
    index: number;
    format: ContractArgumentFormatValue;
    value: any;
}
//# sourceMappingURL=types.d.ts.map