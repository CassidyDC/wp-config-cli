/**
 * @module exec/help
 */

import { clearConsole, cli, log, printHeader } from '../utils/index.js';

export function execHelp() {
  clearConsole();
  printHeader();
  log(cli.helpText);
}
