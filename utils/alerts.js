/**
 * @module utils/alerts
 */

import { log } from './functions.js';
import { color, label, symbol } from './styles.js';

/**
 * Prints an alert message in the console.
 *
 * @param {string} type - The type of alert to print.
 * @param {string} msg - The message to print.
 * @param {string} title - The title to print (default: [type]).
 * @return {void}
 */
export function alert(type, msg, title = '') {
  const types = Object.keys(label);

  if (!types.includes(type)) {
    throw new Error('Invalid alert type.');
  }

  const icon = symbol[type];

  title = title ? title.toUpperCase() : type.toUpperCase();
  title = label[type](` ${title} `);

  msg = color[type](msg);

  log(`\n${icon} ${title} ${msg}\n`);
}
