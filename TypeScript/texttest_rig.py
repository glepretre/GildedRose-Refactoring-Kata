#!/usr/bin/env python
"""
This script uses npx to execute the TextTest Fixture for TypeScript.
It is designed to be used by TextTest and specified in the file 'texttests/config.gr' in this repo.
It is more convenient for TextTest to use since npx needs
several arguments in addition to the one the TextTest fixture needs.
"""
import os
import subprocess
import sys

texttest_home = os.environ.get("TEXTTEST_HOME", os.getcwd())
fixture = os.path.join(texttest_home, "TypeScript", "test", "golden-master-text-test.ts")
ts_node = os.path.join(texttest_home, "TypeScript", "node_modules", ".bin", "ts-node")

subprocess.run([ts_node, fixture, *sys.argv[1:]], check=True)
