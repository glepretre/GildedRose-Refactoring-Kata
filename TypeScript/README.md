# Gilded Rose

This directory contains the TypeScript implementation and its Vitest tests.

## Setup

```sh
npm install
```

## Commands

```sh
npm test
npm run test:watch
npm run test:coverage
npm run typecheck
```

The starter unit test intentionally contains a `fixme` expectation. Replace it
as part of the kata.

The 30-day fixture can also be run directly:

```sh
npx ts-node test/golden-master-text-test.ts
npx ts-node test/golden-master-text-test.ts 30
```

To compare its output with the TextTest golden master, run
`./start_texttest.sh` from the repository root.
