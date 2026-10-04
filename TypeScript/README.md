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

Unit tests cover item behavior, including Conjured items. Approval tests use
Vitest snapshots to check an ordinary item and the inventory over 30 days.

The 30-day fixture can also be run directly:

```sh
npx ts-node test/golden-master-text-test.ts
npx ts-node test/golden-master-text-test.ts 30
```

To compare its output with the TextTest golden master, run
`./start_texttest.sh` from the repository root.
