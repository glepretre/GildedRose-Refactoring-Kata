# TextTest regression test

This directory contains the approved output for the 30-day TypeScript fixture.
It uses [TextTest](https://texttest.org/) to compare the current output with the
golden master in `ThirtyDays/stdout.gr`.

## Run

Python 3.9 or newer is required.

Install the Node dependencies first:

```sh
cd TypeScript
npm install
cd ..
```

Then run TextTest from the repository root:

```sh
./start_texttest.sh
```

The script creates a local Python virtual environment, installs the pinned
TextTest dependency, and runs the suite in console mode.
