# Gilded Rose Refactoring Kata

This is a TypeScript and Vitest-focused fork of
[Emily Bache's Gilded Rose Refactoring Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata).

The kata requirements are in [GildedRoseRequirements.md](GildedRoseRequirements.md).

## Before you start

Watch Emily Bache's introduction,
[Why Developers LOVE The Gilded Rose Kata](https://youtu.be/Mt4XpGxigT4),
for context on the exercise and what makes it useful.

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

Unit tests cover item behavior, including Conjured items. Approval tests use
Vitest snapshots to check an ordinary item and the inventory over 30 days.

The repository also includes a TextTest golden master. Run it from the root:

```sh
./start_texttest.sh
```

See [texttests/README.md](texttests/README.md) for details.
