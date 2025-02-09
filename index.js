#!/usr/bin/env node

/**
 * WP Config CLI
 *
 * A simple CLI for adding development configuration files to a WordPress project.
 *
 * @author Jacob Cassidy <https://cassidydc.com>
 */

import { alert, argv, cli, inputCommands, inputFlags, s } from './utils/index.js';

/**
 * Processes the arguments provided to the CLI
 *
 * @return {void}
 */
(async function processArgs() {
  const commands = cli.commands;
  const flags = cli.flags;
  const allowedCommands = cli.allowedCommands;
  const allowedFlags = cli.allowedFlags;
  const depFlags = cli.depFlags;

  // Run through the process conditions.
  displayDebug();
  displayHelp();
  errorLoneDepFlag();
  errorMultiCommands();
  errorUnknownCommand();
  errorUnknownFlag();
  await runCommand();
  runFlag();
  notCaught();

  /**
   * Prints debug information if a debug flag is provided.
   */
  function displayDebug() {
    if (inputFlags.includes('debug') || inputFlags.includes('d')) {
      flags.debug.exec();
      process.exit(0);
    }
  }

  /**
   * Prints help information if the help command or flag is provided, or if no argument is provided.
   */
  function displayHelp() {
    if (argv.length === 0 || inputCommands.includes('help') || inputFlags['help'] || inputFlags['h']) {
      flags.help.exec();
      process.exit(0);
    }
  }

  /**
   * Prints an error alert if a dependent flag is provided without a companion argument.
   */
  function errorLoneDepFlag() {
    const hasDepFlag = inputFlags.some((flag) => depFlags.includes(flag));
    const hasNonDepFlag = inputFlags.some((flag) => !depFlags.includes(flag));
    const hasCommand = inputCommands.length > 0;

    if (hasDepFlag && !hasNonDepFlag && !hasCommand) {
      alert(
        'error',
        `Dependent flags require a companion argument. See ${s.green.italic('wp-config help')} for a list of available arguments.`,
      );
      process.exit(1);
    }
  }

  /**
   * Prints an error alert if more than one command is provided.
   */
  function errorMultiCommands() {
    if (inputCommands.length > 1) {
      alert(
        'error',
        `Too many commands provided. See ${s.green.italic('wp-config help')} for a list of available commands.`,
      );
      process.exit(1);
    }
  }

  /**
   * Prints an error alert if an unknown command is provided.
   */
  function errorUnknownCommand() {
    if (inputCommands.length === 1 && !allowedCommands.includes(inputCommands[0])) {
      alert('error', `Unknown command used. See ${s.green.italic('wp-config help')} for a list of available commands.`);
      process.exit(1);
    }
  }

  /**
   * Prints an error alert if an unknown flag is provided.
   */
  function errorUnknownFlag() {
    if (inputFlags.length > 0) {
      inputFlags.forEach((flag) => {
        if (!allowedFlags.includes(flag)) {
          alert('error', `Unknown flag used. See ${s.green.italic('wp-config help')} for a list of available options.`);
          process.exit(1);
        }
      });
    }
  }

  /**
   * Runs a single valid command if provided.
   */
  async function runCommand() {
    if (inputCommands.length === 1 && allowedCommands.includes(inputCommands[0])) {
      let cmd = commands[inputCommands[0]];

      // Get command by alias.
      if (!cmd) {
        const cmdKey = Object.keys(commands).find((command) => commands[command].alias === inputCommands[0]);
        cmd = commands[cmdKey];
      }

      await cmd.exec();
      process.exit(0);
    }
  }

  /**
   * Runs a valid flag without a command if provided.
   */
  function runFlag() {
    if (inputFlags.length > 0) {
      inputFlags.forEach((flag) => {
        // Execute first flag function found.
        if (flags[flag] && flags[flag].exec) {
          flags[flag].exec();
          process.exit(0);
        } else {
          // Get flag by alias.
          Object.keys(flags).forEach((flagKey) => {
            if (flags[flagKey].alias === flag && flags[flagKey].exec) {
              flags[flagKey].exec();
              process.exit(0);
            }
          });
        }
      });
    }
  }

  /**
   * Prints a warning and exits if no process conditions are met.
   */
  function notCaught() {
    alert('warning', 'Process not caught by any condition.');
    process.exit(1);
  }

  alert('error', 'END OF THE UNIVERSE.');
})();
