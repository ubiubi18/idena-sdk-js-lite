import { readFile, writeFile } from 'node:fs/promises';

const files = [
  'dist/index.js',
  'dist/index.cjs',
  'dist/index.mjs',
  'dist/index.esm.js',
  'dist/index.umd.js',
];

await Promise.all(
  files.map(async file => {
    const before = await readFile(file, 'utf8');
    const after = before.replace(/[ \t]+$/gm, '');
    if (after !== before) {
      await writeFile(file, after);
    }
  }),
);
