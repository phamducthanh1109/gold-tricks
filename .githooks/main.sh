#! /usr/bin/bash
npm run prepare &
wait
cp .githooks/commit-msg .husky/
cp .githooks/pre-commit .husky/
