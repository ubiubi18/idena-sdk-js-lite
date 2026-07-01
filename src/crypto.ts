import sha3 from 'js-sha3';
import * as secp256k1 from '@noble/secp256k1';
import { hmac } from '@noble/hashes/hmac.js';
import { sha256 } from '@noble/hashes/sha2.js';
import { hexToUint8Array, toHexString } from './utils';

secp256k1.hashes.hmacSha256 = (key, message) => hmac(sha256, key, message);
secp256k1.hashes.sha256 = sha256;

function getKeyArray(key: Uint8Array | number[] | string): Uint8Array {
  return typeof key === 'string' ? hexToUint8Array(key) : new Uint8Array(key);
}

export function privateKeyToPublicKey(
  key: Uint8Array | number[] | string,
  withPrefix = false,
) {
  const pubKey = secp256k1.getPublicKey(getKeyArray(key), false);
  return toHexString(pubKey, withPrefix);
}

export function publicKeyToAddress(
  publicKey: Uint8Array | number[] | string,
  withPrefix = true,
) {
  return toHexString(
    sha3.keccak_256.array(getKeyArray(publicKey).slice(1)).slice(12),
    withPrefix,
  );
}

export function privateKeyToAddress(
  key: Uint8Array | number[] | string,
  withPrefix = true,
) {
  if (!key) {
    return '0x0000000000000000000000000000000000000000';
  }

  const pubKey = secp256k1.getPublicKey(getKeyArray(key), false);

  return publicKeyToAddress(pubKey, withPrefix);
}

export function sender(
  data: Uint8Array | number[],
  signature: Uint8Array | number[],
  withPrefix = true,
) {
  const hash = sha3.keccak_256.array(data);
  const compactSignature = new Uint8Array(signature).slice(0, -1);
  const recovery = Number(signature[signature.length - 1]);
  const pubKey = secp256k1.recoverPublicKey(
    new Uint8Array([recovery, ...compactSignature]),
    new Uint8Array(hash),
    { prehash: false },
  );

  return publicKeyToAddress(
    secp256k1.Point.fromBytes(pubKey).toBytes(false),
    withPrefix,
  );
}

export function sign(
  data: Uint8Array | number[],
  key: Uint8Array | number[] | string,
): Uint8Array {
  const hash = sha3.keccak_256.array(data);
  const signature = secp256k1.sign(
    new Uint8Array(hash),
    typeof key === 'string' ? hexToUint8Array(key) : new Uint8Array(key),
    { format: 'recovered', prehash: false },
  );
  const recovery = signature[0];
  if (recovery === undefined) {
    throw new Error('Failed to generate recoverable signature');
  }

  return new Uint8Array([...signature.slice(1), recovery]);
}
