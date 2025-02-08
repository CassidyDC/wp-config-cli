/**
 * @module utils/header
 */

// External dependencies.
import boxen from 'boxen';

// Internal dependencies.
import { inputFlags, pkgJSON } from './constants.js';
import { log } from './functions.js';
import { color, customColor, label } from './styles.js';

/**
 * Prints the CLI header unless the `--no-header` or `-nh` flag is provided.
 *
 * @return {void}
 */
export function printHeader() {
  const hasHeader = inputFlags.includes('no-header') || inputFlags.includes('nh') ? false : true;
  if (!hasHeader) return;

  const name = label.heading(` ${pkgJSON.name} `);
  const description = color.heading(pkgJSON.description);
  const version = pkgJSON.version;
  const author = pkgJSON.author.name;
  const boxenText = `${description}\n${color.heading.dim(`v${version} by ${author}`)}`;
  const boxenOptions = {
    borderColor: customColor.purple,
    borderStyle: 'round',
    margin: { top: 1 },
    padding: 1,
    title: name,
    titleAlignment: 'center',
    textAlignment: 'center',
  };

  log(boxen(boxenText, boxenOptions));
}
