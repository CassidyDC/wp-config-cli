/**
 * @module utils/constants
 */

import { readFile } from 'fs/promises';

const argv = process.argv.slice(2);

const { commands: inputCommands, flags: inputFlags } = sortArgv();

const modes = {
  theme: {
    stylelint: {
      'stylelint-config-cssmodules-order': true,
      'stylelint-declaration-block-no-ignored-properties': true,
      'stylelint-high-performance-animation': true,
      'stylelint-plugin-logical-css': true,
      'stylelint-use-nesting': true,
      stylelint: true,
    },
  },
};
const pkgJSON = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf-8'));

/**
 * Sorts the arguments passed to the CLI into an object containing commands and flags arrays.
 *
 * @return {{ commands: string[], flags: string[] }}
 */
function sortArgv() {
  const commands = [];
  const flags = [];

  argv.forEach((arg) => {
    if (arg.startsWith('--')) {
      flags.push(arg.replace('--', ''));
    } else if (arg.startsWith('-')) {
      flags.push(arg.replace('-', ''));
    } else {
      commands.push(arg);
    }
  });

  return { commands, flags };
}

export { argv, inputCommands, inputFlags, modes, pkgJSON };
