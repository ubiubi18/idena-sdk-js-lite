[**idena-sdk-js-lite**](../README.md)

***

[idena-sdk-js-lite](../README.md) / Transaction

# Class: Transaction

Defined in: [models/transactions/transaction.ts:89](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L89)

## Constructors

### Constructor

> **new Transaction**(`init?`): `Transaction`

Defined in: [models/transactions/transaction.ts:101](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L101)

#### Parameters

##### init?

`Partial`\<\{ `amount`: `string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\>; `epoch`: `number`; `maxFee`: `string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\>; `nonce`: `number`; `payload`: `Uint8Array`\<`ArrayBufferLike`\> \| `number`[]; `tips`: `string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\>; `to`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `type`: [`TransactionTypeValue`](../type-aliases/TransactionTypeValue.md); \}\>

#### Returns

`Transaction`

## Accessors

### amount

#### Get Signature

> **get** **amount**(): `BN` \| `null`

Defined in: [models/transactions/transaction.ts:161](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L161)

##### Returns

`BN` \| `null`

#### Set Signature

> **set** **amount**(`amount`): `void`

Defined in: [models/transactions/transaction.ts:157](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L157)

##### Parameters

###### amount

`string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\> \| `null`

##### Returns

`void`

***

### epoch

#### Get Signature

> **get** **epoch**(): `number`

Defined in: [models/transactions/transaction.ts:135](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L135)

##### Returns

`number`

#### Set Signature

> **set** **epoch**(`epoch`): `void`

Defined in: [models/transactions/transaction.ts:131](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L131)

##### Parameters

###### epoch

`number`

##### Returns

`void`

***

### gas

#### Get Signature

> **get** **gas**(): `number`

Defined in: [models/transactions/transaction.ts:212](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L212)

##### Returns

`number`

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [models/transactions/transaction.ts:193](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L193)

##### Returns

`string`

***

### maxFee

#### Get Signature

> **get** **maxFee**(): `BN` \| `null`

Defined in: [models/transactions/transaction.ts:169](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L169)

##### Returns

`BN` \| `null`

#### Set Signature

> **set** **maxFee**(`maxFee`): `void`

Defined in: [models/transactions/transaction.ts:165](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L165)

##### Parameters

###### maxFee

`string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\> \| `null`

##### Returns

`void`

***

### nonce

#### Get Signature

> **get** **nonce**(): `number`

Defined in: [models/transactions/transaction.ts:127](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L127)

##### Returns

`number`

#### Set Signature

> **set** **nonce**(`nonce`): `void`

Defined in: [models/transactions/transaction.ts:123](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L123)

##### Parameters

###### nonce

`number`

##### Returns

`void`

***

### payload

#### Get Signature

> **get** **payload**(): `Uint8Array`\<`ArrayBufferLike`\> \| `null`

Defined in: [models/transactions/transaction.ts:185](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L185)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `null`

#### Set Signature

> **set** **payload**(`payload`): `void`

Defined in: [models/transactions/transaction.ts:181](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L181)

##### Parameters

###### payload

`Uint8Array`\<`ArrayBufferLike`\> \| `null`

##### Returns

`void`

***

### sender

#### Get Signature

> **get** **sender**(): `string` \| `null`

Defined in: [models/transactions/transaction.ts:197](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L197)

##### Returns

`string` \| `null`

***

### signature

#### Get Signature

> **get** **signature**(): `Uint8Array`\<`ArrayBufferLike`\> \| `null`

Defined in: [models/transactions/transaction.ts:189](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L189)

##### Returns

`Uint8Array`\<`ArrayBufferLike`\> \| `null`

***

### tips

#### Get Signature

> **get** **tips**(): `BN` \| `null`

Defined in: [models/transactions/transaction.ts:177](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L177)

##### Returns

`BN` \| `null`

#### Set Signature

> **set** **tips**(`tips`): `void`

Defined in: [models/transactions/transaction.ts:173](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L173)

##### Parameters

###### tips

`string` \| `number` \| `BN` \| `Uint8Array`\<`ArrayBufferLike`\> \| `null`

##### Returns

`void`

***

### to

#### Get Signature

> **get** **to**(): `string` \| `null`

Defined in: [models/transactions/transaction.ts:153](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L153)

##### Returns

`string` \| `null`

#### Set Signature

> **set** **to**(`to`): `void`

Defined in: [models/transactions/transaction.ts:147](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L147)

##### Parameters

###### to

`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| `null`

##### Returns

`void`

***

### type

#### Get Signature

> **get** **type**(): `number`

Defined in: [models/transactions/transaction.ts:143](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L143)

##### Returns

`number`

#### Set Signature

> **set** **type**(`type`): `void`

Defined in: [models/transactions/transaction.ts:139](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L139)

##### Parameters

###### type

[`TransactionTypeValue`](../type-aliases/TransactionTypeValue.md)

##### Returns

`void`

## Methods

### fromBytes()

> **fromBytes**(`bytes`): `Transaction`

Defined in: [models/transactions/transaction.ts:247](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L247)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Transaction`

***

### fromHex()

> **fromHex**(`hex`): `Transaction`

Defined in: [models/transactions/transaction.ts:243](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L243)

#### Parameters

##### hex

`string`

#### Returns

`Transaction`

***

### fromJson()

> **fromJson**(`jsonTx`): `Transaction`

Defined in: [models/transactions/transaction.ts:267](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L267)

#### Parameters

##### jsonTx

[`JsonTransaction`](JsonTransaction.md)

#### Returns

`Transaction`

***

### sign()

> **sign**(`key`): `Transaction`

Defined in: [models/transactions/transaction.ts:299](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L299)

#### Parameters

##### key

`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| `number`[]

#### Returns

`Transaction`

***

### toBytes()

> **toBytes**(): `Uint8Array`

Defined in: [models/transactions/transaction.ts:290](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L290)

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(`withPrefix?`): `string`

Defined in: [models/transactions/transaction.ts:308](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L308)

#### Parameters

##### withPrefix?

`boolean` = `true`

#### Returns

`string`

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `Transaction`

Defined in: [models/transactions/transaction.ts:239](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L239)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Transaction`

***

### fromHex()

> `static` **fromHex**(`hex`): `Transaction`

Defined in: [models/transactions/transaction.ts:235](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/blob/master/src/models/transactions/transaction.ts#L235)

#### Parameters

##### hex

`string`

#### Returns

`Transaction`
