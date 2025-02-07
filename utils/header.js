/**
 * @module utils/header
 */

// External dependencies
import boxen from 'boxen';

// Internal dependencies
import { pkgJSON } from './constants.js';
import { clearConsole, log } from './functions.js';
import { color, customColor, label, symbol } from './styles.js';

// CLI Header
export const header = (clear) => {
  clear = clear ?? true;

  if (clear) {
    clearConsole();
  }

  const name = label.heading(` ${pkgJSON.name} `);
  const description = color.heading(pkgJSON.description);
  const version = pkgJSON.version;
  const author = pkgJSON.author.name;
  const boxenText = `${description}\n${color.heading.dim(`v${version} by ${author}`)}`;
  const boxenOptions = {
    borderColor: customColor.purple,
    borderStyle: 'round',
    margin: 1,
    padding: 1,
    title: name,
    titleAlignment: 'center',
    textAlignment: 'center',
  };

  log(boxen(boxenText, boxenOptions));
};
