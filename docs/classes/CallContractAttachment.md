[**idena-sdk-js-lite**](../README.md)

***

[idena-sdk-js-lite](../README.md) / CallContractAttachment

# Class: CallContractAttachment

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:9](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L9)

## Constructors

### Constructor

> **new CallContractAttachment**(`init?`): `CallContractAttachment`

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:13](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L13)

#### Parameters

##### init?

`Partial`\<\{ `args`: `Uint8Array`\<`ArrayBufferLike`\>[]; `method`: `string`; \}\>

#### Returns

`CallContractAttachment`

## Accessors

### args

#### Get Signature

> **get** **args**(): `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:30](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L30)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\>[]

#### Set Signature

> **set** **args**(`args`): `void`

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:26](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L26)

##### Parameters

###### args

`Uint8Array`\<`ArrayBufferLike`\>[]

##### Returns

`void`

***

### method

#### Get Signature

> **get** **method**(): `string`

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:22](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L22)

##### Returns

`string`

#### Set Signature

> **set** **method**(`method`): `void`

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:18](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L18)

##### Parameters

###### method

`string`

##### Returns

`void`

## Methods

### fromBytes()

> **fromBytes**(`bytes`): `CallContractAttachment`

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:43](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L43)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`CallContractAttachment`

***

### getArgs()

> **getArgs**(`formats`): [`ContractArgument`](../interfaces/ContractArgument.md)[]

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:34](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L34)

#### Parameters

##### formats

[`ContractArgumentFormatValue`](../type-aliases/ContractArgumentFormatValue.md)[]

#### Returns

[`ContractArgument`](../interfaces/ContractArgument.md)[]

***

### setArgs()

> **setArgs**(`args`): `CallContractAttachment`

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:38](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L38)

#### Parameters

##### args

[`ContractArgument`](../interfaces/ContractArgument.md)[]

#### Returns

`CallContractAttachment`

***

### toBytes()

> **toBytes**(): `Uint8Array`\<`ArrayBuffer`\>

Defined in: [models/transactions/attachments/contracts/callContractAttachment.ts:55](https://github.com/ubiubi18/idena-sdk-js-lite/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L55)

#### Returns

`Uint8Array`\<`ArrayBuffer`\>
