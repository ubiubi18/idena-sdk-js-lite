# idena-sdk-js-lite

Lite JavaScript/TypeScript SDK for Idena transactions, contract attachments,
cryptography, and generated protobuf models. It omits the provider integrations
from the full `idena-sdk-js` package.

[![CI](https://github.com/ubiubi18/idena-sdk-js-lite/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ubiubi18/idena-sdk-js-lite/actions/workflows/ci.yml)

## Distribution status

The unscoped npm package [`idena-sdk-js-lite`](https://www.npmjs.com/package/idena-sdk-js-lite)
is owned and published by `n3cr0m4nc3r-dev`. The currently published `0.2.0`
package predates the modernization commits in this branch.

```bash
npm install idena-sdk-js-lite@0.2.0
```

That command installs the upstream npm release, not this fork's current source.
This fork has no npm release. Use a reviewed source commit or wait for a new
upstream package release before depending on these changes in production.

## What was updated

- The native `secp256k1` dependency and its installation/build surface were
  replaced with `@noble/secp256k1` and `@noble/hashes`.
- Key, signature, transaction, and malformed-input behavior has dedicated unit
  and boundary tests.
- Protobuf, Rollup, TypeScript, ESLint, Vitest, documentation, and supporting
  dependencies were refreshed and unnecessary generator packages removed.
- Reproducible CJS, ESM, UMD, minified, source-map, and declaration artifacts
  are generated from one build.
- Development and CI target Node `24.18.0` and npm `11.16.0`; workflows use
  pinned actions, least-privilege permissions, dependency/signature audits,
  CodeQL, and secret-scanning policy.

## Benefits

- No native cryptography compilation during installation.
- Smaller dependency and lifecycle-script surface.
- Browser-friendly cryptography and modern package outputs with broader tests.
- Easier auditing because generated bundles and declarations are checked in and
  can be compared with a local build.

## Risks and tradeoffs

- Replacing a cryptographic implementation is high impact even when vectors
  match. Test address derivation, signing, recovery, and transaction encoding
  against known Idena fixtures before production use.
- The branch is unreleased. Depending on a moving Git branch is not
  reproducible; lock an exact Git commit and retain the resulting integrity
  value if evaluating it downstream.
- Generated files are large and can hide source/build drift. Review source and
  regenerate the bundles instead of reviewing only minified output.
- The Node/npm engine constraint describes the supported build and test
  environment. Browser bundlers and older application stacks may need separate
  compatibility testing.
- Package metadata and type-resolution paths must be verified with `npm pack`
  before any future registry publication.

## Build from source

Requirements:

- Node.js `24.18.0` on the Node 24 LTS line
- npm `11.16.0`
- Git

```bash
npm ci
npm test
npm run build
npm pack --dry-run
```

The build output is written to `dist/`. Run `npm pack --dry-run` and inspect the
file list before publishing or installing a locally packed archive.

## Upstream proposal

The modernization branch is proposed to the package maintainer in
[`N3CR0M4NC3R-dev/idena-sdk-js-lite#1`](https://github.com/N3CR0M4NC3R-dev/idena-sdk-js-lite/pull/1).
