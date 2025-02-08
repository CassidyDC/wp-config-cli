/**
 * @module commands/install
 */

import { alert, clearConsole, printHeader } from '../utils/index.js';

/**
 * Runs the installation process.
 *
 * @return {void}
 */
export function execInstall() {
  clearConsole();
  printHeader();
  alert('heading', 'Running...', 'Installation');
}
