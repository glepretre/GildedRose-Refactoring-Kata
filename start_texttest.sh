#!/bin/sh

set -eu

root_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
venv_dir="$root_dir/.venv"

if [ ! -d "$venv_dir" ]; then
    python3 -m venv "$venv_dir"
fi

"$venv_dir/bin/python" -m pip install --disable-pip-version-check -r "$root_dir/requirements.txt"

cd "$root_dir"
exec "$venv_dir/bin/texttest" -d . -con "$@"
