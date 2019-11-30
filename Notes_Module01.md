##Console
Typing node gets you into Node's repl(read-eval-print loop). You can type commands in the same fashion as in browser console. ctrl-c to exit

ctrl-k clear

## Running and Loading

Run script in node: node myScript.js

## Variables and Statements

Code blocks`{}` don't need semi colon after

var and let can be updated, const cannot

`'use strict';` at the top of your script will keep you from declaring variables without var, let, or const

var is function scoped, let and const are block scoped

variables only start with cap when a class, $ and _ are legal, but used mainly in jquery and lodash

camelCase, UpperCamelCase, snake_case, kebab-case(not allowed in js)

## Code Quality Tooling

ESLint: eslint.org/demo - Finds potential code issues
Prettier - Formats code
