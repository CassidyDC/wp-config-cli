/**
 * @module exec/debug
 */

import { alert, argv, clearConsole, cli, label, log, printHeader } from '../utils/index.js';

/**
 * Prints debug information to the console.
 *
 * @return {void}
 */
export function execDebug() {
  clearConsole();
  printHeader();
  alert('heading', 'This information is for CLI debugging purposes.', 'CLI Debug Info');
  log(label.info(' INPUT '), argv, '\n');
  log(label.info(' CLI '), cli, '\n');
}
