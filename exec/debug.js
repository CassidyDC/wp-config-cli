/**
 * @module exec/debug
 */

import { argv, clearConsole, cli, color, label, log, printHeader } from '../utils/index.js';

export function execDebug() {
  const title = label.heading(' CLI DEBUG INFO ');
  const subtext = color.heading('This information is for CLI debugging purposes.');

  clearConsole();
  printHeader();
  log(`\n${title} ${subtext}\n`);
  log(label.info(' INPUT '), argv, '\n');
  log(label.info(' CLI '), cli, '\n');
}
