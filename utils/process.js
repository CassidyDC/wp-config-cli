/**
 * @module utils/process
 */

import { alert } from './alerts.js';
import { cli } from './cli.js';
import { argv, inputCommands, inputFlags, s } from './constants.js';

const commands = cli.commands;
const flags = cli.flags;
const allowedCommands = cli.allowedCommands;
const allowedFlags = cli.allowedFlags;

export function processArgs() {
  // Print help info if help command/flag is provided, or no command/flag is provided.
  if (argv.length === 0 || inputCommands.includes('help') || inputFlags['help'] || inputFlags['h']) {
    flags.help.exec();
  }

  // Print an error if more than one command is provided.
  if (inputCommands.length > 1) {
    alert(
      'error',
      `Too many commands provided. See ${s.green.italic('wp-config help')} for a list of available commands.`,
    );
    process.exit(1);
  }

  // Print an error if an unknown command is provided.
  if (inputCommands.length === 1 && !allowedCommands.includes(inputCommands[0])) {
    alert('error', `Unknown command used. See ${s.green.italic('wp-config help')} for a list of available commands.`);
    process.exit(1);
  }

  // Print an error if an unknown flag is provided.
  if (inputFlags.length > 0) {
    inputFlags.forEach((flag) => {
      if (!allowedFlags.includes(flag)) {
        alert('error', `Unknown flag used. See ${s.green.italic('wp-config help')} for a list of available options.`);
        process.exit(1);
      }
    });
  }

  // Print debug info if a debug flag is provided.
  if (inputFlags.includes('debug') || inputFlags.includes('d')) {
    flags.debug.exec();
    process.exit(0);
  }

  // Execute command if valid.
  if (inputCommands.length === 1 && allowedCommands.includes(inputCommands[0])) {
    const cmd = commands[inputCommands[0]];

    if (cmd) {
      commands[cmd].exec();
    } else {
      // Get command by alias.
      Object.keys(commands).forEach((command) => {
        if (commands[command].alias === inputCommands[0]) {
          commands[command].exec();
        }
      });
    }
    process.exit(0);
  }

  alert('warning', 'Process not caught by any condition.');
  process.exit(1);
}
