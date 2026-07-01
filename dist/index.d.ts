import { GenMessage, GenFile } from '@bufbuild/protobuf/codegenv2';
import { Message } from '@bufbuild/protobuf';
import BN from 'bn.js';

/**
 * Describes the file models.proto.
 */
declare const file_models: GenFile;
/**
 * @generated from message models.ProtoTransaction
 */
type ProtoTransaction = Message<'models.ProtoTransaction'> & {
    /**
     * @generated from field: models.ProtoTransaction.Data data = 1;
     */
    data?: ProtoTransaction_Data;
    /**
     * @generated from field: bytes signature = 2;
     */
    signature: Uint8Array;
    /**
     * @generated from field: bool useRlp = 3;
     */
    useRlp: boolean;
};
/**
 * Describes the message models.ProtoTransaction.
 * Use `create(ProtoTransactionSchema)` to create a new message.
 */
declare const ProtoTransactionSchema: GenMessage<ProtoTransaction>;
/**
 * @generated from message models.ProtoTransaction.Data
 */
type ProtoTransaction_Data = Message<'models.ProtoTransaction.Data'> & {
    /**
     * @generated from field: uint32 nonce = 1;
     */
    nonce: number;
    /**
     * @generated from field: uint32 epoch = 2;
     */
    epoch: number;
    /**
     * @generated from field: uint32 type = 3;
     */
    type: number;
    /**
     * @generated from field: bytes to = 4;
     */
    to: Uint8Array;
    /**
     * @generated from field: bytes amount = 5;
     */
    amount: Uint8Array;
    /**
     * @generated from field: bytes maxFee = 6;
     */
    maxFee: Uint8Array;
    /**
     * @generated from field: bytes tips = 7;
     */
    tips: Uint8Array;
    /**
     * @generated from field: bytes payload = 8;
     */
    payload: Uint8Array;
};
/**
 * Describes the message models.ProtoTransaction.Data.
 * Use `create(ProtoTransaction_DataSchema)` to create a new message.
 */
declare const ProtoTransaction_DataSchema: GenMessage<ProtoTransaction_Data>;
/**
 * @generated from message models.ProtoFlipPrivateKeys
 */
type ProtoFlipPrivateKeys = Message<'models.ProtoFlipPrivateKeys'> & {
    /**
     * @generated from field: repeated bytes keys = 1;
     */
    keys: Uint8Array[];
};
/**
 * Describes the message models.ProtoFlipPrivateKeys.
 * Use `create(ProtoFlipPrivateKeysSchema)` to create a new message.
 */
declare const ProtoFlipPrivateKeysSchema: GenMessage<ProtoFlipPrivateKeys>;
/**
 * @generated from message models.ProtoPrivateFlipKeysPackage
 */
type ProtoPrivateFlipKeysPackage = Message<'models.ProtoPrivateFlipKeysPackage'> & {
    /**
     * @generated from field: models.ProtoPrivateFlipKeysPackage.Data data = 1;
     */
    data?: ProtoPrivateFlipKeysPackage_Data;
    /**
     * @generated from field: bytes signature = 2;
     */
    signature: Uint8Array;
};
/**
 * Describes the message models.ProtoPrivateFlipKeysPackage.
 * Use `create(ProtoPrivateFlipKeysPackageSchema)` to create a new message.
 */
declare const ProtoPrivateFlipKeysPackageSchema: GenMessage<ProtoPrivateFlipKeysPackage>;
/**
 * @generated from message models.ProtoPrivateFlipKeysPackage.Data
 */
type ProtoPrivateFlipKeysPackage_Data = Message<'models.ProtoPrivateFlipKeysPackage.Data'> & {
    /**
     * @generated from field: bytes package = 1;
     */
    package: Uint8Array;
    /**
     * @generated from field: uint32 epoch = 2;
     */
    epoch: number;
};
/**
 * Describes the message models.ProtoPrivateFlipKeysPackage.Data.
 * Use `create(ProtoPrivateFlipKeysPackage_DataSchema)` to create a new message.
 */
declare const ProtoPrivateFlipKeysPackage_DataSchema: GenMessage<ProtoPrivateFlipKeysPackage_Data>;
/**
 * @generated from message models.ProtoFlipKey
 */
type ProtoFlipKey = Message<'models.ProtoFlipKey'> & {
    /**
     * @generated from field: models.ProtoFlipKey.Data data = 1;
     */
    data?: ProtoFlipKey_Data;
    /**
     * @generated from field: bytes signature = 2;
     */
    signature: Uint8Array;
};
/**
 * Describes the message models.ProtoFlipKey.
 * Use `create(ProtoFlipKeySchema)` to create a new message.
 */
declare const ProtoFlipKeySchema: GenMessage<ProtoFlipKey>;
/**
 * @generated from message models.ProtoFlipKey.Data
 */
type ProtoFlipKey_Data = Message<'models.ProtoFlipKey.Data'> & {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * @generated from field: uint32 epoch = 2;
     */
    epoch: number;
};
/**
 * Describes the message models.ProtoFlipKey.Data.
 * Use `create(ProtoFlipKey_DataSchema)` to create a new message.
 */
declare const ProtoFlipKey_DataSchema: GenMessage<ProtoFlipKey_Data>;
/**
 * @generated from message models.ProtoShortAnswerAttachment
 */
type ProtoShortAnswerAttachment = Message<'models.ProtoShortAnswerAttachment'> & {
    /**
     * @generated from field: bytes answers = 1;
     */
    answers: Uint8Array;
    /**
     * @generated from field: uint64 rnd = 2 [jstype = JS_STRING];
     */
    rnd: string;
    /**
     * @generated from field: uint32 clientType = 3;
     */
    clientType: number;
};
/**
 * Describes the message models.ProtoShortAnswerAttachment.
 * Use `create(ProtoShortAnswerAttachmentSchema)` to create a new message.
 */
declare const ProtoShortAnswerAttachmentSchema: GenMessage<ProtoShortAnswerAttachment>;
/**
 * @generated from message models.ProtoLongAnswerAttachment
 */
type ProtoLongAnswerAttachment = Message<'models.ProtoLongAnswerAttachment'> & {
    /**
     * @generated from field: bytes answers = 1;
     */
    answers: Uint8Array;
    /**
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * @generated from field: bytes key = 3;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes salt = 4;
     */
    salt: Uint8Array;
};
/**
 * Describes the message models.ProtoLongAnswerAttachment.
 * Use `create(ProtoLongAnswerAttachmentSchema)` to create a new message.
 */
declare const ProtoLongAnswerAttachmentSchema: GenMessage<ProtoLongAnswerAttachment>;
/**
 * @generated from message models.ProtoIpfsFlip
 */
type ProtoIpfsFlip = Message<'models.ProtoIpfsFlip'> & {
    /**
     * @generated from field: bytes pubKey = 1;
     */
    pubKey: Uint8Array;
    /**
     * @generated from field: bytes publicPart = 2;
     */
    publicPart: Uint8Array;
    /**
     * @generated from field: bytes privatePart = 3;
     */
    privatePart: Uint8Array;
};
/**
 * Describes the message models.ProtoIpfsFlip.
 * Use `create(ProtoIpfsFlipSchema)` to create a new message.
 */
declare const ProtoIpfsFlipSchema: GenMessage<ProtoIpfsFlip>;
/**
 * @generated from message models.ProtoFlipSubmitAttachment
 */
type ProtoFlipSubmitAttachment = Message<'models.ProtoFlipSubmitAttachment'> & {
    /**
     * @generated from field: bytes cid = 1;
     */
    cid: Uint8Array;
    /**
     * @generated from field: uint32 pair = 2;
     */
    pair: number;
};
/**
 * Describes the message models.ProtoFlipSubmitAttachment.
 * Use `create(ProtoFlipSubmitAttachmentSchema)` to create a new message.
 */
declare const ProtoFlipSubmitAttachmentSchema: GenMessage<ProtoFlipSubmitAttachment>;
/**
 * @generated from message models.ProtoDeleteFlipAttachment
 */
type ProtoDeleteFlipAttachment = Message<'models.ProtoDeleteFlipAttachment'> & {
    /**
     * @generated from field: bytes cid = 1;
     */
    cid: Uint8Array;
};
/**
 * Describes the message models.ProtoDeleteFlipAttachment.
 * Use `create(ProtoDeleteFlipAttachmentSchema)` to create a new message.
 */
declare const ProtoDeleteFlipAttachmentSchema: GenMessage<ProtoDeleteFlipAttachment>;
/**
 * @generated from message models.ProtoOnlineStatusAttachment
 */
type ProtoOnlineStatusAttachment = Message<'models.ProtoOnlineStatusAttachment'> & {
    /**
     * @generated from field: bool online = 1;
     */
    online: boolean;
};
/**
 * Describes the message models.ProtoOnlineStatusAttachment.
 * Use `create(ProtoOnlineStatusAttachmentSchema)` to create a new message.
 */
declare const ProtoOnlineStatusAttachmentSchema: GenMessage<ProtoOnlineStatusAttachment>;
/**
 * @generated from message models.ProtoDeployContractAttachment
 */
type ProtoDeployContractAttachment = Message<'models.ProtoDeployContractAttachment'> & {
    /**
     * @generated from field: bytes CodeHash = 1;
     */
    CodeHash: Uint8Array;
    /**
     * @generated from field: repeated bytes args = 2;
     */
    args: Uint8Array[];
    /**
     * @generated from field: uint32 clientType = 3;
     */
    clientType: number;
};
/**
 * Describes the message models.ProtoDeployContractAttachment.
 * Use `create(ProtoDeployContractAttachmentSchema)` to create a new message.
 */
declare const ProtoDeployContractAttachmentSchema: GenMessage<ProtoDeployContractAttachment>;
/**
 * @generated from message models.ProtoCallContractAttachment
 */
type ProtoCallContractAttachment = Message<'models.ProtoCallContractAttachment'> & {
    /**
     * @generated from field: string method = 1;
     */
    method: string;
    /**
     * @generated from field: repeated bytes args = 2;
     */
    args: Uint8Array[];
    /**
     * @generated from field: uint32 clientType = 3;
     */
    clientType: number;
};
/**
 * Describes the message models.ProtoCallContractAttachment.
 * Use `create(ProtoCallContractAttachmentSchema)` to create a new message.
 */
declare const ProtoCallContractAttachmentSchema: GenMessage<ProtoCallContractAttachment>;
/**
 * @generated from message models.ProtoTerminateContractAttachment
 */
type ProtoTerminateContractAttachment = Message<'models.ProtoTerminateContractAttachment'> & {
    /**
     * @generated from field: repeated bytes args = 1;
     */
    args: Uint8Array[];
    /**
     * @generated from field: uint32 clientType = 2;
     */
    clientType: number;
};
/**
 * Describes the message models.ProtoTerminateContractAttachment.
 * Use `create(ProtoTerminateContractAttachmentSchema)` to create a new message.
 */
declare const ProtoTerminateContractAttachmentSchema: GenMessage<ProtoTerminateContractAttachment>;
/**
 * @generated from message models.ProtoProfile
 */
type ProtoProfile = Message<'models.ProtoProfile'> & {
    /**
     * @generated from field: repeated models.ProtoProfile.ProtoProfileAd ads = 1;
     */
    ads: ProtoProfile_ProtoProfileAd[];
};
/**
 * Describes the message models.ProtoProfile.
 * Use `create(ProtoProfileSchema)` to create a new message.
 */
declare const ProtoProfileSchema: GenMessage<ProtoProfile>;
/**
 * @generated from message models.ProtoProfile.ProtoProfileAd
 */
type ProtoProfile_ProtoProfileAd = Message<'models.ProtoProfile.ProtoProfileAd'> & {
    /**
     * @generated from field: string cid = 1;
     */
    cid: string;
    /**
     * @generated from field: string target = 2;
     */
    target: string;
    /**
     * @generated from field: string contract = 3;
     */
    contract: string;
    /**
     * @generated from field: string author = 4;
     */
    author: string;
};
/**
 * Describes the message models.ProtoProfile.ProtoProfileAd.
 * Use `create(ProtoProfile_ProtoProfileAdSchema)` to create a new message.
 */
declare const ProtoProfile_ProtoProfileAdSchema: GenMessage<ProtoProfile_ProtoProfileAd>;
/**
 * @generated from message models.ProtoAd
 */
type ProtoAd = Message<'models.ProtoAd'> & {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string desc = 2;
     */
    desc: string;
    /**
     * @generated from field: string url = 3;
     */
    url: string;
    /**
     * @generated from field: bytes thumb = 4;
     */
    thumb: Uint8Array;
    /**
     * @generated from field: bytes media = 5;
     */
    media: Uint8Array;
    /**
     * @generated from field: uint32 version = 6;
     */
    version: number;
    /**
     * @generated from field: models.ProtoAdVotingParams votingParams = 7;
     */
    votingParams?: ProtoAdVotingParams;
};
/**
 * Describes the message models.ProtoAd.
 * Use `create(ProtoAdSchema)` to create a new message.
 */
declare const ProtoAdSchema: GenMessage<ProtoAd>;
/**
 * @generated from message models.ProtoAdVotingParams
 */
type ProtoAdVotingParams = Message<'models.ProtoAdVotingParams'> & {
    /**
     * @generated from field: uint32 votingDuration = 1;
     */
    votingDuration: number;
    /**
     * @generated from field: uint32 publicVotingDuration = 2;
     */
    publicVotingDuration: number;
    /**
     * @generated from field: uint32 quorum = 3;
     */
    quorum: number;
    /**
     * @generated from field: uint32 committeeSize = 4;
     */
    committeeSize: number;
};
/**
 * Describes the message models.ProtoAdVotingParams.
 * Use `create(ProtoAdVotingParamsSchema)` to create a new message.
 */
declare const ProtoAdVotingParamsSchema: GenMessage<ProtoAdVotingParams>;
/**
 * @generated from message models.ProtoAdTarget
 */
type ProtoAdTarget = Message<'models.ProtoAdTarget'> & {
    /**
     * @generated from field: string language = 1;
     */
    language: string;
    /**
     * @generated from field: int32 age = 2;
     */
    age: number;
    /**
     * @generated from field: string os = 3;
     */
    os: string;
    /**
     * @generated from field: int32 stake = 4;
     */
    stake: number;
};
/**
 * Describes the message models.ProtoAdTarget.
 * Use `create(ProtoAdTargetSchema)` to create a new message.
 */
declare const ProtoAdTargetSchema: GenMessage<ProtoAdTarget>;
/**
 * @generated from message models.ProtoAdBurnKey
 */
type ProtoAdBurnKey = Message<'models.ProtoAdBurnKey'> & {
    /**
     * @generated from field: string cid = 1;
     */
    cid: string;
    /**
     * @generated from field: string target = 2;
     */
    target: string;
};
/**
 * Describes the message models.ProtoAdBurnKey.
 * Use `create(ProtoAdBurnKeySchema)` to create a new message.
 */
declare const ProtoAdBurnKeySchema: GenMessage<ProtoAdBurnKey>;
/**
 * @generated from message models.ProtoStoreToIpfsAttachment
 */
type ProtoStoreToIpfsAttachment = Message<'models.ProtoStoreToIpfsAttachment'> & {
    /**
     * @generated from field: bytes cid = 1;
     */
    cid: Uint8Array;
    /**
     * @generated from field: uint32 size = 2;
     */
    size: number;
};
/**
 * Describes the message models.ProtoStoreToIpfsAttachment.
 * Use `create(ProtoStoreToIpfsAttachmentSchema)` to create a new message.
 */
declare const ProtoStoreToIpfsAttachmentSchema: GenMessage<ProtoStoreToIpfsAttachment>;
/**
 * @generated from message models.ProtoChangeProfileAttachment
 */
type ProtoChangeProfileAttachment = Message<'models.ProtoChangeProfileAttachment'> & {
    /**
     * @generated from field: bytes cid = 1;
     */
    cid: Uint8Array;
};
/**
 * Describes the message models.ProtoChangeProfileAttachment.
 * Use `create(ProtoChangeProfileAttachmentSchema)` to create a new message.
 */
declare const ProtoChangeProfileAttachmentSchema: GenMessage<ProtoChangeProfileAttachment>;
/**
 * @generated from message models.ProtoBurnAttachment
 */
type ProtoBurnAttachment = Message<'models.ProtoBurnAttachment'> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
};
/**
 * Describes the message models.ProtoBurnAttachment.
 * Use `create(ProtoBurnAttachmentSchema)` to create a new message.
 */
declare const ProtoBurnAttachmentSchema: GenMessage<ProtoBurnAttachment>;

declare class StoreToIpfsAttachment {
    private _size;
    private _cid;
    constructor(init?: Partial<{
        size: number;
        cid: Uint8Array;
    }>);
    set size(size: number);
    get size(): number;
    set cid(cid: Uint8Array);
    get cid(): Uint8Array;
    fromBytes(bytes: Uint8Array): this;
    toBytes(): Uint8Array<ArrayBuffer>;
}

type EmbeddedContractTypeKey = 'TimeLockContract' | 'OracleVotingContract' | 'OracleLockContract' | 'RefundableOracleLockContract' | 'MultisigContract';
type EmbeddedContractTypeValue = 1 | 2 | 3 | 4 | 5;
declare const embeddedContractType: Record<EmbeddedContractTypeKey, EmbeddedContractTypeValue>;
type ContractArgumentFormatKey = 'Default' | 'Byte' | 'Int8' | 'Uint64' | 'Int64' | 'String' | 'Bigint' | 'Hex' | 'Dna';
type ContractArgumentFormatValue = 'default' | 'byte' | 'int8' | 'uint64' | 'int64' | 'string' | 'bigint' | 'hex' | 'dna';
declare const contractArgumentFormat: Record<ContractArgumentFormatKey, ContractArgumentFormatValue>;
interface ContractArgument {
    index: number;
    format: ContractArgumentFormatValue;
    value: any;
}

declare class CallContractAttachment {
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

declare function argumentFromBytes(format: ContractArgumentFormatValue, index: number, bytes: Uint8Array): ContractArgument;
declare function argumentsFromBytes(formats: ContractArgumentFormatValue[], bytes: Uint8Array[]): ContractArgument[];
declare function argumentToBytes(data: ContractArgument): Uint8Array;
declare function argumentsToBytes(args: ContractArgument[]): Uint8Array[];

declare class JsonTransaction {
    hash: string;
    type: string;
    from: string;
    to: string;
    amount: string;
    tips: string;
    maxFee: string;
    nonce: number;
    epoch: number;
    payload: string;
    blockHash: string;
    usedFee: string;
    timestamp: number;
    constructor(hash: string, type: string, from: string, to: string, amount: string, tips: string, maxFee: string, nonce: number, epoch: number, payload: string, blockHash: string, usedFee: string, timestamp: number);
}

type TransactionTypeKey = 'SendTx' | 'ActivationTx' | 'InviteTx' | 'KillTx' | 'SubmitFlipTx' | 'SubmitAnswersHashTx' | 'SubmitShortAnswersTx' | 'SubmitLongAnswersTx' | 'EvidenceTx' | 'OnlineStatusTx' | 'KillInviteeTx' | 'ChangeGodAddressTx' | 'BurnTx' | 'ChangeProfileTx' | 'DeleteFlipTx' | 'DeployContractTx' | 'CallContractTx' | 'TerminateContractTx' | 'DelegateTx' | 'UndelegateTx' | 'KillDelegatorTx' | 'StoreToIpfsTx';
type TransactionTypeValue = 0x0 | 0x1 | 0x2 | 0x3 | 0x4 | 0x5 | 0x6 | 0x7 | 0x8 | 0x9 | 0xa | 0xb | 0xc | 0xd | 0xe | 0xf | 0x10 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15;
declare const transactionType: Record<TransactionTypeKey, TransactionTypeValue>;
declare class Transaction {
    private _nonce;
    private _epoch;
    private _type;
    private _to;
    private _amount;
    private _maxFee;
    private _tips;
    private _payload;
    private _signature;
    constructor(init?: Partial<{
        nonce: number;
        epoch: number;
        type: TransactionTypeValue;
        to: Uint8Array | string;
        amount: Uint8Array | string | number | BN;
        maxFee: Uint8Array | string | number | BN;
        tips: Uint8Array | string | number | BN;
        payload: Uint8Array | number[];
    }>);
    set nonce(nonce: number);
    get nonce(): number;
    set epoch(epoch: number);
    get epoch(): number;
    set type(type: TransactionTypeValue);
    get type(): number;
    set to(to: string | Uint8Array | null);
    get to(): string | null;
    set amount(amount: number | string | BN | Uint8Array | null);
    get amount(): BN | null;
    set maxFee(maxFee: number | string | BN | Uint8Array | null);
    get maxFee(): BN | null;
    set tips(tips: number | string | BN | Uint8Array | null);
    get tips(): BN | null;
    set payload(payload: Uint8Array | null);
    get payload(): Uint8Array | null;
    get signature(): Uint8Array | null;
    get hash(): string;
    get sender(): string | null;
    get gas(): number;
    static fromHex(hex: string): Transaction;
    static fromBytes(bytes: Uint8Array): Transaction;
    fromHex(hex: string): Transaction;
    fromBytes(bytes: Uint8Array): Transaction;
    fromJson(jsonTx: JsonTransaction): Transaction;
    toBytes(): Uint8Array;
    sign(key: string | Uint8Array | number[]): Transaction;
    toHex(withPrefix?: boolean): string;
    private _createProtoTxData;
}

declare function privateKeyToPublicKey(key: Uint8Array | number[] | string, withPrefix?: boolean): string;
declare function publicKeyToAddress(publicKey: Uint8Array | number[] | string, withPrefix?: boolean): string;
declare function privateKeyToAddress(key: Uint8Array | number[] | string, withPrefix?: boolean): string;
declare function sender(data: Uint8Array | number[], signature: Uint8Array | number[], withPrefix?: boolean): string;
declare function sign(data: Uint8Array | number[], key: Uint8Array | number[] | string): Uint8Array;

declare const DNA_BASE = "1000000000000000000";
declare function stripHexPrefix(str: string): string;
declare function hexToUint8Array(hexString: string): Uint8Array;
declare function toHexString(byteArray: Uint8Array | number[], withPrefix?: boolean): string;
declare function floatStringToDna(value: string): BN;
declare function dnaToFloatString(value: BN | string): string;
declare function calculateGasCost(feePerGas: BN | string, gas: number): string;

export { CallContractAttachment, DNA_BASE, JsonTransaction, ProtoAdBurnKeySchema, ProtoAdSchema, ProtoAdTargetSchema, ProtoAdVotingParamsSchema, ProtoBurnAttachmentSchema, ProtoCallContractAttachmentSchema, ProtoChangeProfileAttachmentSchema, ProtoDeleteFlipAttachmentSchema, ProtoDeployContractAttachmentSchema, ProtoFlipKeySchema, ProtoFlipKey_DataSchema, ProtoFlipPrivateKeysSchema, ProtoFlipSubmitAttachmentSchema, ProtoIpfsFlipSchema, ProtoLongAnswerAttachmentSchema, ProtoOnlineStatusAttachmentSchema, ProtoPrivateFlipKeysPackageSchema, ProtoPrivateFlipKeysPackage_DataSchema, ProtoProfileSchema, ProtoProfile_ProtoProfileAdSchema, ProtoShortAnswerAttachmentSchema, ProtoStoreToIpfsAttachmentSchema, ProtoTerminateContractAttachmentSchema, ProtoTransactionSchema, ProtoTransaction_DataSchema, StoreToIpfsAttachment, Transaction, argumentFromBytes, argumentToBytes, argumentsFromBytes, argumentsToBytes, calculateGasCost, contractArgumentFormat, dnaToFloatString, embeddedContractType, file_models, floatStringToDna, hexToUint8Array, privateKeyToAddress, privateKeyToPublicKey, publicKeyToAddress, sender, sign, stripHexPrefix, toHexString, transactionType };
export type { ContractArgument, ContractArgumentFormatKey, ContractArgumentFormatValue, EmbeddedContractTypeKey, EmbeddedContractTypeValue, ProtoAd, ProtoAdBurnKey, ProtoAdTarget, ProtoAdVotingParams, ProtoBurnAttachment, ProtoCallContractAttachment, ProtoChangeProfileAttachment, ProtoDeleteFlipAttachment, ProtoDeployContractAttachment, ProtoFlipKey, ProtoFlipKey_Data, ProtoFlipPrivateKeys, ProtoFlipSubmitAttachment, ProtoIpfsFlip, ProtoLongAnswerAttachment, ProtoOnlineStatusAttachment, ProtoPrivateFlipKeysPackage, ProtoPrivateFlipKeysPackage_Data, ProtoProfile, ProtoProfile_ProtoProfileAd, ProtoShortAnswerAttachment, ProtoStoreToIpfsAttachment, ProtoTerminateContractAttachment, ProtoTransaction, ProtoTransaction_Data, TransactionTypeKey, TransactionTypeValue };
