/**
 * @module utils/functions
 */

import { inputFlags } from './constants.js';

/**
 * Clears the console unless the `--no-clear` or `-nc` flag is provided.
 *
 * @return {void}
 */
export const clearConsole = () => {
  const hasClear = inputFlags.includes('no-clear') || inputFlags.includes('nc') ? false : true;
  if (hasClear) process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
};

/**
 * Runs the `console.log` function.
 *
 * @return {void}
 */
export const log = console.log;
