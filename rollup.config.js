// @ts-check

import terser from '@rollup/plugin-terser';
import typescript2 from 'rollup-plugin-typescript2';
import { dts } from 'rollup-plugin-dts';

import pkg from './package.json' with { type: 'json' };

/**
 * Comment with library information to be appended in the generated bundles.
 */
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author.name}
 * Released under the ${pkg.license} License.
 */
`;

/**
 * Creates an output options object for Rollup.js.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
function createOutputOptions(options) {
  return {
    banner,
    name: 'idenaSdkJsLite',
    exports: 'named',
    sourcemap: true,
    ...options,
  };
}

const globalsOutput = {
  globals: {
  '@bufbuild/protobuf': 'protobuf',
  '@bufbuild/protobuf/codegenv2': 'codegenv2',
  'bn.js': 'BN',
  'decimal.js': 'Decimal',
  'secp256k1': 'secp256k1',
  'js-sha3': 'sha3',
  }
}

/**
 * @type {import('rollup').RollupOptions[]}
 */
const options = [{
    input: './src/index.ts',
    external: [
      'js-sha3',
      'bn.js',
      'decimal.js',
      'secp256k1',
      '@bufbuild/protobuf',
      '@bufbuild/protobuf/codegenv2',
    ],
    output: [
      createOutputOptions({
        file: './dist/index.js',
        format: 'commonjs',
        ...globalsOutput,
      }),
      createOutputOptions({
        file: './dist/index.cjs',
        format: 'commonjs',
        ...globalsOutput,
      }),
      createOutputOptions({
        file: './dist/index.mjs',
        format: 'esm',
        ...globalsOutput,
      }),
      createOutputOptions({
        file: './dist/index.esm.js',
        format: 'esm',
        ...globalsOutput,
      }),
      createOutputOptions({
        file: './dist/index.umd.js',
        format: 'umd',
        ...globalsOutput,
      }),
      createOutputOptions({
        file: './dist/index.umd.min.js',
        format: 'umd',
        plugins: [terser()],
        ...globalsOutput,
      }),
    ],
    plugins: [
      typescript2({
        clean: true,
        useTsconfigDeclarationDir: true,
        tsconfig: './tsconfig.bundle.json',
      }),
    ],
  },
  {
    input: './types/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
    },
    plugins: [dts()],
  },
];

export default options;
