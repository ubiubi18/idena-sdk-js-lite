#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lock = JSON.parse(
  fs.readFileSync(path.join(root, 'compatibility', 'stack-lock.json'), 'utf8'),
);
const pkg = JSON.parse(
  fs.readFileSync(path.join(root, 'package.json'), 'utf8'),
);
const expectedCommit =
  lock.consumerPins?.['idena-social-ui']?.['idena-sdk-js-lite'];
const component = (lock.components || []).find(
  (item) => item.name === 'idena-sdk-js-lite',
);

if (
  lock.schema !== 1 ||
  lock.status !== 'candidate' ||
  lock.chainInvariants?.consensusChangesAllowed !== false
) {
  throw new Error('Unexpected compatibility lock identity');
}
if (
  !/^[0-9a-f]{40}$/.test(expectedCommit || '') ||
  component?.commit !== expectedCommit
) {
  throw new Error('SDK component and consumer commits do not match');
}
if (pkg.name !== 'idena-sdk-js-lite' || pkg.version !== '0.2.0') {
  throw new Error('Unexpected SDK package identity');
}
if (pkg.engines?.node !== '>=24.18.0 <25' || pkg.engines?.npm !== '>=11.16.0') {
  throw new Error('SDK toolchain range drifted from the reviewed release');
}

console.log('SDK compatibility lock passed');
