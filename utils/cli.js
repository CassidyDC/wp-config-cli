/**
 * @module utils/cli
 */

import { execDebug, execHelp, execInstall, execLaunch, execRawVersion, execVersion } from '../exec/index.js';
import { pkgJSON } from './constants.js';
import { label, s } from './styles.js';

const { description, name, version } = pkgJSON;

const commands = {
  help: {
    alias: null,
    exec: null,
  },
  install: {
    alias: 'i',
    exec: execInstall,
  },
  launch: {
    alias: 'l',
    exec: execLaunch,
  },
};

const flags = {
  debug: {
    alias: 'd',
    exec: execDebug,
  },
  help: {
    alias: 'h',
    exec: execHelp,
  },
  'no-clear': {
    alias: 'nc',
    exec: null,
    dep: true,
  },
  'no-header': {
    alias: 'nh',
    exec: null,
    dep: true,
  },
  'raw-version': {
    alias: null,
    exec: execRawVersion,
  },
  version: {
    alias: 'v',
    exec: execVersion,
  },
};

/**
 * Returns an array of allowed flags and flag aliases.
 *
 * @return {string[]}
 */
const allowedFlags = () => {
  const longFlags = Object.keys(flags);
  const shortFlags = longFlags.map((flag) => flags[flag].alias).filter(Boolean);
  return [...longFlags, ...shortFlags];
};

/**
 * Returns an array of allowed commands and command aliases.
 *
 * @return {string[]}
 */
const allowedCommands = () => {
  const longCommands = Object.keys(commands);
  const shortCommands = longCommands.map((command) => commands[command].alias).filter(Boolean);
  return [...longCommands, ...shortCommands];
};

/**
 * Returns an array of flags that are dependent on other arguments.
 *
 * @return {string[]}
 */
const depFlags = () => {
  const longDepFlags = Object.keys(flags).filter((flag) => flags[flag].dep);
  const shortDepFlags = longDepFlags.map((flag) => flags[flag].alias).filter(Boolean);
  return [...longDepFlags, ...shortDepFlags];
};

const helpText = `  ${s.bold('Usage:')}
    ${s.green('npx wp-config')} ${s.yellow('[--option]')} ${s.cyan('<command>')}

  ${s.bold('Options:')}
    ${s.yellow('-d')},  ${s.yellow('--debug')}      Print CLI debug info
    ${s.yellow('-h')},  ${s.yellow('--help')}       Print this help message
    ${s.yellow('-nc')}, ${s.yellow('--no-clear')}   Don't clear the console when running a command ${s.dim('(dep flag)')}
    ${s.yellow('-nh')}, ${s.yellow('--no-header')}  Don't print the CLI header when running a command ${s.dim('(dep flag)')}
    ${s.yellow('-v')},  ${s.yellow('--version')}    Print the CLI version ${s.dim('(styled)')}
    ${s.yellow('--raw-version')}     Print the CLI version ${s.dim('(plain text)')}

  ${s.bold('Commands:')}
    ${s.cyan('i')}, ${s.cyan('install')}        Install the configuration files with default settings.
    ${s.cyan('l')}, ${s.cyan('launch')}         Launch the configuration wizard to customize settings.
    ${s.cyan('help')}              Print this help message

  ${s.bold('Examples:')}
    ${s.green('npx wp-config')} ${s.cyan('i')}   Runs the default installation process
    ${s.green('npx wp-config')} ${s.yellow('-v')}  Prints the CLI version
`;

export const cli = {
  name,
  description,
  version,
  commands,
  flags,
  allowedCommands: allowedCommands(),
  allowedFlags: allowedFlags(),
  depFlags: depFlags(),
  helpText,
};
