/**
 * @module utils/process
 */

import chalk from 'chalk';

import { alert } from './alerts.js';
import { cli } from './cli.js';
import { header } from './header.js';
import { execInstall, execLaunch } from '../commands/index.js';

export function processArgs() {
  const args = process.argv.slice(2);
  const input = cli.input;

  // Print error if more than one command is provided.
  if (input.length > 1) {
    alert('error', 'Too many commands provided. See `wp-config help` for a list of available commands.');
    process.exit(1);
  }

  // Show Help
  if (args.length === 0 || input.includes('help')) {
    header(cli.flags.clear);
    cli.showHelp(0);
  }

  // Run install command
  (input.includes('install') || input.includes('i')) && execInstall();

  // Run launch command
  (input.includes('launch') || input.includes('l')) && execLaunch();

  // Print warning if flag is provided without a command.
  if (args.includes('--clear') || args.includes('--no-clear')) {
    const command = args.includes('--clear') ? '--clear' : '--no-clear';
    alert(
      'warning',
      `The ${chalk.italic(command)} flag was used without a command. See \`wp-config help\` for a list of available commands.`,
    );
    process.exit(1);
  }

  // Print error if unknown command or unknown standalone flag is provided.
  if (input.length > 0) {
    alert('error', 'Unknown command provided. See `wp-config help` for a list of available commands.');
    process.exit(1);
  } else {
    alert('error', 'Unknown flag provided. See `wp-config help` for a list of available flags.');
    process.exit(1);
  }
}
