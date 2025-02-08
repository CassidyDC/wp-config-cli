/**
 * @module exec/help
 */

import { alert, clearConsole, cli, log, printHeader } from '../utils/index.js';

/**
 * Prints help information to the console.
 *
 * @return {void}
 */
export function execHelp() {
  clearConsole();
  printHeader();
  alert('heading', '', 'Help Info');
  log(cli.helpText);
}
