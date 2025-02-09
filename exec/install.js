/**
 * @module commands/install
 */

import { alert, clearConsole, printHeader, runInstallPrompts } from '../utils/index.js';

/**
 * Runs the installation process.
 *
 * @return {void}
 */
export async function execInstall() {
  clearConsole();
  printHeader();
  alert('heading', 'Running...', 'Install');

  const userInputs = await runInstallPrompts();
  console.log(userInputs);

  return new Promise((resolve, reject) => {
    if (userInputs) {
      resolve(userInputs);
    } else {
      reject(new Error('Failed to load input'));
    }
  });
}
