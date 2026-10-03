# Gilded Rose Refactoring Kata

This is a TypeScript and Vitest-focused fork of
[Emily Bache's Gilded Rose Refactoring Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata).

The kata requirements are in [GildedRoseRequirements.md](GildedRoseRequirements.md).

## Setup

Prerequisites: Node.js 24 and Python 3.9 or newer.

```sh
cd TypeScript
npm install
```

## Commands

Run these commands from `TypeScript/`:

```sh
npm test
npm run test:watch
npm run test:coverage
npm run typecheck
```

The starter unit test intentionally contains a `fixme` expectation. Replace it
as part of the kata. The existing approval tests use Vitest snapshots.

The repository also includes a TextTest golden master. Run it from the root:

```sh
./start_texttest.sh
```

See [texttests/README.md](texttests/README.md) for details.
