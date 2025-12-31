[**idena-sdk-js-lite**](../README.md)

***

[idena-sdk-js-lite](../README.md) / Transaction

# Class: Transaction

Defined in: [models/transactions/transaction.ts:91](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L91)

## Constructors

### Constructor

> **new Transaction**(`init?`): `Transaction`

Defined in: [models/transactions/transaction.ts:103](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L103)

#### Parameters

##### init?

`Partial`\<\{ `amount`: `string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\>; `epoch`: `number`; `maxFee`: `string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\>; `nonce`: `number`; `payload`: `Uint8Array`\<`ArrayBufferLike`\> \| `number`[]; `tips`: `string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\>; `to`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `type`: [`TransactionTypeValue`](../type-aliases/TransactionTypeValue.md); \}\>

#### Returns

`Transaction`

## Accessors

### amount

#### Get Signature

> **get** **amount**(): `BN` \| `null`

Defined in: [models/transactions/transaction.ts:163](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L163)

##### Returns

`BN` \| `null`

#### Set Signature

> **set** **amount**(`amount`): `void`

Defined in: [models/transactions/transaction.ts:159](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L159)

##### Parameters

###### amount

`string` | `number` | `BN` | `Uint8Array`\<`ArrayBufferLike`\> | `null`

##### Returns

`void`

***

### epoch

#### Get Signature

> **get** **epoch**(): `number`

Defined in: [models/transactions/transaction.ts:137](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L137)

##### Returns

`number`

#### Set Signature

> **set** **epoch**(`epoch`): `void`

Defined in: [models/transactions/transaction.ts:133](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L133)

##### Parameters

###### epoch

`number`

##### Returns

`void`

***

### gas

#### Get Signature

> **get** **gas**(): `number`

Defined in: [models/transactions/transaction.ts:214](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L214)

##### Returns

`number`

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [models/transactions/transaction.ts:195](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L195)

##### Returns

`string`

***

### maxFee

#### Get Signature

> **get** **maxFee**(): `BN` \| `null`

Defined in: [models/transactions/transaction.ts:171](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L171)

##### Returns

`BN` \| `null`

#### Set Signature

> **set** **maxFee**(`maxFee`): `void`

Defined in: [models/transactions/transaction.ts:167](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L167)

##### Parameters

###### maxFee

`string` | `number` | `BN` | `Uint8Array`\<`ArrayBufferLike`\> | `null`

##### Returns

`void`

***

### nonce

#### Get Signature

> **get** **nonce**(): `number`

Defined in: [models/transactions/transaction.ts:129](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L129)

##### Returns

`number`

#### Set Signature

> **set** **nonce**(`nonce`): `void`

Defined in: [models/transactions/transaction.ts:125](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L125)

##### Parameters

###### nonce

`number`

##### Returns

`void`

***

### payload

#### Get Signature

> **get** **payload**(): `Uint8Array`\<`ArrayBufferLike`\> \| `null`

Defined in: [models/transactions/transaction.ts:187](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L187)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `null`

#### Set Signature

> **set** **payload**(`payload`): `void`

Defined in: [models/transactions/transaction.ts:183](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L183)

##### Parameters

###### payload

`Uint8Array`\<`ArrayBufferLike`\> | `null`

##### Returns

`void`

***

### sender

#### Get Signature

> **get** **sender**(): `string` \| `null`

Defined in: [models/transactions/transaction.ts:199](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L199)

##### Returns

`string` \| `null`

***

### signature

#### Get Signature

> **get** **signature**(): `Uint8Array`\<`ArrayBufferLike`\> \| `null`

Defined in: [models/transactions/transaction.ts:191](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L191)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `null`

***

### tips

#### Get Signature

> **get** **tips**(): `BN` \| `null`

Defined in: [models/transactions/transaction.ts:179](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L179)

##### Returns

`BN` \| `null`

#### Set Signature

> **set** **tips**(`tips`): `void`

Defined in: [models/transactions/transaction.ts:175](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L175)

##### Parameters

###### tips

`string` | `number` | `BN` | `Uint8Array`\<`ArrayBufferLike`\> | `null`

##### Returns

`void`

***

### to

#### Get Signature

> **get** **to**(): `string` \| `null`

Defined in: [models/transactions/transaction.ts:155](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L155)

##### Returns

`string` \| `null`

#### Set Signature

> **set** **to**(`to`): `void`

Defined in: [models/transactions/transaction.ts:149](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L149)

##### Parameters

###### to

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `null`

##### Returns

`void`

***

### type

#### Get Signature

> **get** **type**(): `number`

Defined in: [models/transactions/transaction.ts:145](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L145)

##### Returns

`number`

#### Set Signature

> **set** **type**(`type`): `void`

Defined in: [models/transactions/transaction.ts:141](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L141)

##### Parameters

###### type

[`TransactionTypeValue`](../type-aliases/TransactionTypeValue.md)

##### Returns

`void`

## Methods

### fromBytes()

> **fromBytes**(`bytes`): `Transaction`

Defined in: [models/transactions/transaction.ts:249](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L249)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Transaction`

***

### fromHex()

> **fromHex**(`hex`): `Transaction`

Defined in: [models/transactions/transaction.ts:245](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L245)

#### Parameters

##### hex

`string`

#### Returns

`Transaction`

***

### fromJson()

> **fromJson**(`jsonTx`): `Transaction`

Defined in: [models/transactions/transaction.ts:269](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L269)

#### Parameters

##### jsonTx

[`JsonTransaction`](JsonTransaction.md)

#### Returns

`Transaction`

***

### sign()

> **sign**(`key`): `Transaction`

Defined in: [models/transactions/transaction.ts:301](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L301)

#### Parameters

##### key

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `number`[]

#### Returns

`Transaction`

***

### toBytes()

> **toBytes**(): `Uint8Array`

Defined in: [models/transactions/transaction.ts:292](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L292)

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(`withPrefix`): `string`

Defined in: [models/transactions/transaction.ts:310](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L310)

#### Parameters

##### withPrefix

`boolean` = `true`

#### Returns

`string`

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `Transaction`

Defined in: [models/transactions/transaction.ts:241](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L241)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Transaction`

***

### fromHex()

> `static` **fromHex**(`hex`): `Transaction`

Defined in: [models/transactions/transaction.ts:237](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L237)

#### Parameters

##### hex

`string`

#### Returns

`Transaction`
