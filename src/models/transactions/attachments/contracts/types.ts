export type EmbeddedContractTypeKey =
  | 'TimeLockContract'
  | 'OracleVotingContract'
  | 'OracleLockContract'
  | 'RefundableOracleLockContract'
  | 'MultisigContract';

export type EmbeddedContractTypeValue = 1 | 2 | 3 | 4 | 5;
export const embeddedContractType: Record<
  EmbeddedContractTypeKey,
  EmbeddedContractTypeValue
> = {
  TimeLockContract: 1,
  OracleVotingContract: 2,
  OracleLockContract: 3,
  RefundableOracleLockContract: 4,
  MultisigContract: 5,
};

export type ContractArgumentFormatKey =
  | 'Default'
  | 'Byte'
  | 'Int8'
  | 'Uint64'
  | 'Int64'
  | 'String'
  | 'Bigint'
  | 'Hex'
  | 'Dna';

export type ContractArgumentFormatValue =
  | 'default'
  | 'byte'
  | 'int8'
  | 'uint64'
  | 'int64'
  | 'string'
  | 'bigint'
  | 'hex'
  | 'dna';
export const contractArgumentFormat: Record<
  ContractArgumentFormatKey,
  ContractArgumentFormatValue
> = {
  Default: 'default',
  Byte: 'byte',
  Int8: 'int8',
  Uint64: 'uint64',
  Int64: 'int64',
  String: 'string',
  Bigint: 'bigint',
  Hex: 'hex',
  Dna: 'dna',
};

export interface ContractArgument {
  index: number;
  format: ContractArgumentFormatValue;
  value: any;
}
