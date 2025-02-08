/**
 * @module exec/version
 */

import { cli, label, log } from '../utils/index.js';

/**
 * Prints the CLI version to the console.
 *
 * @return {void}
 */
export function execVersion() {
  const text = ` ${cli.name} version ${cli.version} `;
  log(`\n${label.heading(text)}\n`);
}
