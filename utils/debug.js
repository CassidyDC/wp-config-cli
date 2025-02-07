/**
 * @module utils/debug
 */

import chalk from 'chalk';

import { alert } from './alerts.js';
import { cli } from './cli.js';
import { log } from './constants.js';
import { header } from './header.js';
import { label } from './styles.js';

export function debug() {
  if (!cli.flags.debug) {
    return;
  }

  header(cli.flags.clear);
  alert('warning', 'Debugging is active...', 'DEBUG LOG');

  if (cli.input.length > 0) {
    printInput();
  }

  printActiveFlags();
  printAllProperties();

  function printInput() {
    log(label.info(' Input '));
    cli.input.forEach((input) => {
      log(chalk.green(input));
    });
    console.log('');
  }

  function printActiveFlags() {
    log(label.info(' Active Flags '));

    Object.entries(cli.flags).forEach(([key, value]) => {
      if (value) {
        log(`${chalk.green(key)}: ${value}`);
      }
    });
    console.log('');
  }

  function printAllProperties() {
    log(label.info(' All CLI Properties '), cli, '\n');
  }

  process.exit(0);
}
