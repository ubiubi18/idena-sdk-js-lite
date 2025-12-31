import type { GenFile, GenMessage } from '@bufbuild/protobuf/codegenv2';
import type { Message } from '@bufbuild/protobuf';
/**
 * Describes the file models.proto.
 */
export declare const file_models: GenFile;
/**
 * @generated from message models.ProtoTransaction
 */
export type ProtoTransaction = Message<'models.ProtoTransaction'> & {
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
export declare const ProtoTransactionSchema: GenMessage<ProtoTransaction>;
/**
 * @generated from message models.ProtoTransaction.Data
 */
export type ProtoTransaction_Data = Message<'models.ProtoTransaction.Data'> & {
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
export declare const ProtoTransaction_DataSchema: GenMessage<ProtoTransaction_Data>;
/**
 * @generated from message models.ProtoFlipPrivateKeys
 */
export type ProtoFlipPrivateKeys = Message<'models.ProtoFlipPrivateKeys'> & {
    /**
     * @generated from field: repeated bytes keys = 1;
     */
    keys: Uint8Array[];
};
/**
 * Describes the message models.ProtoFlipPrivateKeys.
 * Use `create(ProtoFlipPrivateKeysSchema)` to create a new message.
 */
export declare const ProtoFlipPrivateKeysSchema: GenMessage<ProtoFlipPrivateKeys>;
/**
 * @generated from message models.ProtoPrivateFlipKeysPackage
 */
export type ProtoPrivateFlipKeysPackage = Message<'models.ProtoPrivateFlipKeysPackage'> & {
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
export declare const ProtoPrivateFlipKeysPackageSchema: GenMessage<ProtoPrivateFlipKeysPackage>;
/**
 * @generated from message models.ProtoPrivateFlipKeysPackage.Data
 */
export type ProtoPrivateFlipKeysPackage_Data = Message<'models.ProtoPrivateFlipKeysPackage.Data'> & {
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
export declare const ProtoPrivateFlipKeysPackage_DataSchema: GenMessage<ProtoPrivateFlipKeysPackage_Data>;
/**
 * @generated from message models.ProtoFlipKey
 */
export type ProtoFlipKey = Message<'models.ProtoFlipKey'> & {
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
export declare const ProtoFlipKeySchema: GenMessage<ProtoFlipKey>;
/**
 * @generated from message models.ProtoFlipKey.Data
 */
export type ProtoFlipKey_Data = Message<'models.ProtoFlipKey.Data'> & {
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
export declare const ProtoFlipKey_DataSchema: GenMessage<ProtoFlipKey_Data>;
/**
 * @generated from message models.ProtoShortAnswerAttachment
 */
export type ProtoShortAnswerAttachment = Message<'models.ProtoShortAnswerAttachment'> & {
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
export declare const ProtoShortAnswerAttachmentSchema: GenMessage<ProtoShortAnswerAttachment>;
/**
 * @generated from message models.ProtoLongAnswerAttachment
 */
export type ProtoLongAnswerAttachment = Message<'models.ProtoLongAnswerAttachment'> & {
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
export declare const ProtoLongAnswerAttachmentSchema: GenMessage<ProtoLongAnswerAttachment>;
/**
 * @generated from message models.ProtoIpfsFlip
 */
export type ProtoIpfsFlip = Message<'models.ProtoIpfsFlip'> & {
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
export declare const ProtoIpfsFlipSchema: GenMessage<ProtoIpfsFlip>;
/**
 * @generated from message models.ProtoFlipSubmitAttachment
 */
export type ProtoFlipSubmitAttachment = Message<'models.ProtoFlipSubmitAttachment'> & {
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
export declare const ProtoFlipSubmitAttachmentSchema: GenMessage<ProtoFlipSubmitAttachment>;
/**
 * @generated from message models.ProtoDeleteFlipAttachment
 */
export type ProtoDeleteFlipAttachment = Message<'models.ProtoDeleteFlipAttachment'> & {
    /**
     * @generated from field: bytes cid = 1;
     */
    cid: Uint8Array;
};
/**
 * Describes the message models.ProtoDeleteFlipAttachment.
 * Use `create(ProtoDeleteFlipAttachmentSchema)` to create a new message.
 */
export declare const ProtoDeleteFlipAttachmentSchema: GenMessage<ProtoDeleteFlipAttachment>;
/**
 * @generated from message models.ProtoOnlineStatusAttachment
 */
export type ProtoOnlineStatusAttachment = Message<'models.ProtoOnlineStatusAttachment'> & {
    /**
     * @generated from field: bool online = 1;
     */
    online: boolean;
};
/**
 * Describes the message models.ProtoOnlineStatusAttachment.
 * Use `create(ProtoOnlineStatusAttachmentSchema)` to create a new message.
 */
export declare const ProtoOnlineStatusAttachmentSchema: GenMessage<ProtoOnlineStatusAttachment>;
/**
 * @generated from message models.ProtoDeployContractAttachment
 */
export type ProtoDeployContractAttachment = Message<'models.ProtoDeployContractAttachment'> & {
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
export declare const ProtoDeployContractAttachmentSchema: GenMessage<ProtoDeployContractAttachment>;
/**
 * @generated from message models.ProtoCallContractAttachment
 */
export type ProtoCallContractAttachment = Message<'models.ProtoCallContractAttachment'> & {
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
export declare const ProtoCallContractAttachmentSchema: GenMessage<ProtoCallContractAttachment>;
/**
 * @generated from message models.ProtoTerminateContractAttachment
 */
export type ProtoTerminateContractAttachment = Message<'models.ProtoTerminateContractAttachment'> & {
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
export declare const ProtoTerminateContractAttachmentSchema: GenMessage<ProtoTerminateContractAttachment>;
/**
 * @generated from message models.ProtoProfile
 */
export type ProtoProfile = Message<'models.ProtoProfile'> & {
    /**
     * @generated from field: repeated models.ProtoProfile.ProtoProfileAd ads = 1;
     */
    ads: ProtoProfile_ProtoProfileAd[];
};
/**
 * Describes the message models.ProtoProfile.
 * Use `create(ProtoProfileSchema)` to create a new message.
 */
export declare const ProtoProfileSchema: GenMessage<ProtoProfile>;
/**
 * @generated from message models.ProtoProfile.ProtoProfileAd
 */
export type ProtoProfile_ProtoProfileAd = Message<'models.ProtoProfile.ProtoProfileAd'> & {
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
export declare const ProtoProfile_ProtoProfileAdSchema: GenMessage<ProtoProfile_ProtoProfileAd>;
/**
 * @generated from message models.ProtoAd
 */
export type ProtoAd = Message<'models.ProtoAd'> & {
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
export declare const ProtoAdSchema: GenMessage<ProtoAd>;
/**
 * @generated from message models.ProtoAdVotingParams
 */
export type ProtoAdVotingParams = Message<'models.ProtoAdVotingParams'> & {
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
export declare const ProtoAdVotingParamsSchema: GenMessage<ProtoAdVotingParams>;
/**
 * @generated from message models.ProtoAdTarget
 */
export type ProtoAdTarget = Message<'models.ProtoAdTarget'> & {
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
export declare const ProtoAdTargetSchema: GenMessage<ProtoAdTarget>;
/**
 * @generated from message models.ProtoAdBurnKey
 */
export type ProtoAdBurnKey = Message<'models.ProtoAdBurnKey'> & {
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
export declare const ProtoAdBurnKeySchema: GenMessage<ProtoAdBurnKey>;
/**
 * @generated from message models.ProtoStoreToIpfsAttachment
 */
export type ProtoStoreToIpfsAttachment = Message<'models.ProtoStoreToIpfsAttachment'> & {
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
export declare const ProtoStoreToIpfsAttachmentSchema: GenMessage<ProtoStoreToIpfsAttachment>;
/**
 * @generated from message models.ProtoChangeProfileAttachment
 */
export type ProtoChangeProfileAttachment = Message<'models.ProtoChangeProfileAttachment'> & {
    /**
     * @generated from field: bytes cid = 1;
     */
    cid: Uint8Array;
};
/**
 * Describes the message models.ProtoChangeProfileAttachment.
 * Use `create(ProtoChangeProfileAttachmentSchema)` to create a new message.
 */
export declare const ProtoChangeProfileAttachmentSchema: GenMessage<ProtoChangeProfileAttachment>;
/**
 * @generated from message models.ProtoBurnAttachment
 */
export type ProtoBurnAttachment = Message<'models.ProtoBurnAttachment'> & {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
};
/**
 * Describes the message models.ProtoBurnAttachment.
 * Use `create(ProtoBurnAttachmentSchema)` to create a new message.
 */
export declare const ProtoBurnAttachmentSchema: GenMessage<ProtoBurnAttachment>;
//# sourceMappingURL=models_pb.d.ts.map