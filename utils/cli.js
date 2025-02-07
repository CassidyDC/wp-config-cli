/**
 * @module utils/cli
 */

import chalk from 'chalk';

import { label } from './styles.js';
import { pkgJSON } from './constants.js';

const { description, version } = pkgJSON;

const commands = {
  help: {
    exec: '',
  },
  install: {
    alias: 'i',
    exec: '',
  },
  launch: {
    alias: 'l',
    exec: '',
  },
};

const flags = {
  debug: {
    alias: 'd',
  },
  help: {
    alias: 'h',
  },
  'no-clear': {
    alias: 'nc',
  },
  'no-header': {
    alias: 'nh',
  },
  version: {
    alias: 'v',
  },
};

const allowedFlags = () => {
  const longFlags = Object.keys(flags).filter(Boolean);
  const shortFlags = longFlags.map((flag) => flags[flag].alias).filter(Boolean);
  return [...longFlags, ...shortFlags];
};

const allowedCommands = () => {
  const longCommands = Object.keys(commands).filter(Boolean);
  const shortCommands = longCommands.map((command) => commands[command].alias).filter(Boolean);
  return [...longCommands, ...shortCommands];
};

const helpText = `${label.heading(` Help `)}

${chalk.bold('Usage:')}
  ${chalk.green('npx wp-config')} ${chalk.yellow('[--option]')} ${chalk.cyan('<command>')}

${chalk.bold('Options:')}
  ${chalk.yellow('-d')},  ${chalk.yellow('--debug')}      Print CLI debug info
  ${chalk.yellow('-h')},  ${chalk.yellow('--help')}       Print this help message
  ${chalk.yellow('-nc')}, ${chalk.yellow('--no-clear')}   Don't clear the console when running a command
  ${chalk.yellow('-nh')}, ${chalk.yellow('--no-header')}  Don't print the CLI header when running a command
  ${chalk.yellow('-v')},  ${chalk.yellow('--version')}    Print the CLI version

${chalk.bold('Commands:')}
  ${chalk.cyan('i')}, ${chalk.cyan('install')}        Install the configuration files with default settings.
  ${chalk.cyan('l')}, ${chalk.cyan('launch')}         Launch the configuration wizard to customize settings.
  ${chalk.cyan('help')}              Print this help message

${chalk.bold('Examples:')}
  ${chalk.green('npx wp-config')} ${chalk.cyan('i')}   Runs the default installation process
  ${chalk.green('npx wp-config')} ${chalk.yellow('-v')}  Prints the CLI version
`;

export const cli = {
  description,
  version,
  commands,
  flags,
  allowedCommands: allowedCommands(),
  allowedFlags: allowedFlags(),
  helpText,
};
