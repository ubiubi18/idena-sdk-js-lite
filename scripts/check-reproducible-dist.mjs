#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

function snapshot(directory) {
  const result = new Map();
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isSymbolicLink() || !entry.isFile()) {
      throw new Error(
        `Distribution contains a non-regular entry: ${entry.name}`,
      );
    }
    result.set(
      entry.name,
      crypto
        .createHash('sha256')
        .update(fs.readFileSync(filePath))
        .digest('hex'),
    );
  }
  return result;
}

function differences(before, after) {
  const names = new Set([...before.keys(), ...after.keys()]);
  return [...names]
    .filter((name) => before.get(name) !== after.get(name))
    .sort();
}

const before = snapshot(dist);
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const build = spawnSync(npm, ['run', 'build'], {
  cwd: root,
  env: process.env,
  shell: process.platform === 'win32',
  stdio: 'inherit',
});
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status || 1);

const changed = differences(before, snapshot(dist));
if (changed.length > 0) {
  throw new Error(
    `Committed distribution is not reproducible: ${changed.join(', ')}`,
  );
}

console.log(`Reproducible distribution check passed (${before.size} files)`);
