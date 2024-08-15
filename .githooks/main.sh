#! /usr/bin/bash
if [ ! -e "./.husky" ]; then
  npx husky &
  wait
  cp .githooks/commit-msg .husky/
  cp .githooks/pre-commit .husky/
fi
