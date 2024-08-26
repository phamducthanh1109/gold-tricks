#! /usr/bin/bash
if [ ! -e "./.husky" ]; then
  npx husky &
  wait
  cp .githooks/commit-msg .husky/
  cp .githooks/pre-commit .husky/
  cp .githooks/pre-push .husky/
fi

if [ ! -e "./.husky/commit-msg" ]; then
  cp .githooks/commit-msg .husky/
fi

if [ ! -e "./.husky/pre-commit" ]; then
  cp .githooks/pre-commit .husky/
fi

if [ ! -e "./.husky/pre-push" ]; then
  cp .githooks/pre-push .husky/
fi