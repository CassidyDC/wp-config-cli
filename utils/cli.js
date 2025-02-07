/**
 * @module utils/cli
 */

import chalk from 'chalk';
import meow from 'meow';

import { label } from './styles.js';

const options = {
  importMeta: import.meta,
  description: false,
  input: ['install', 'launch'],
  flags: {
    clear: {
      type: 'boolean',
      default: true,
      shortFlag: 'c',
    },
    debug: {
      type: 'boolean',
      shortFlag: 'd',
    },
    help: {
      type: 'boolean',
      shortFlag: 'h',
    },
    version: {
      type: 'boolean',
      shortFlag: 'v',
    },
  },
};

const helpText = `
${label.info(` Help `)}

${chalk.bold('Usage:')}
  ${chalk.green('npx wp-config')} ${chalk.yellow('[--option]')} ${chalk.cyan('<command>')}

${chalk.bold('Options:')}
  ${chalk.yellow('-h')}, ${chalk.yellow('--help')}      Print this help message
  ${chalk.yellow('-v')}, ${chalk.yellow('--version')}   Print the wp-config version
  ${chalk.yellow('--clear')}         Clear the console before running the command ${chalk.dim('(default: true)')}
  ${chalk.yellow('--no-clear')}      Don't clear the console before running the command

${chalk.bold('Commands:')}
  ${chalk.cyan('help')}            Print this help message
  ${chalk.cyan('i')}, ${chalk.cyan('install')}      Install the configurations files with default settings.
  ${chalk.cyan('l')}, ${chalk.cyan('launch')}       Launch the configuration wizard to customize settings.

${chalk.bold('Examples:')}
  ${chalk.green('npx wp-config')} ${chalk.cyan('i')}   Runs the default installation process
  ${chalk.green('npx wp-config')} ${chalk.yellow('-v')}  Prints the wp-config version
`;

export const cli = meow(helpText, options);
