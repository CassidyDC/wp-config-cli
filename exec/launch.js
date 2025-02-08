/**
 * @module commands/launch
 */

import { alert, clearConsole, printHeader } from '../utils/index.js';

/**
 * Runs the configuration wizard.
 *
 * @return {void}
 */
export function execLaunch() {
  clearConsole();
  printHeader();
  alert('heading', 'Running...', 'Configuration Wizard');
}
