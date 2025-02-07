/**
 * @module utils/alerts
 */

import { log } from "./constants.js";
import { color, label, symbol } from "./styles.js";

/**
 * Display an alert message in the console.
 *
 * @param {string} type - The type of alert to display [error, info, note, success, warning].
 * @param {string} msg - The message to display.
 * @param {string} title - The title of the alert message (defaults to type name).
 */
export function alert(type, msg, title = "") {
  const types = ["error", "info", "note", "success", "warning"];

  if (!types.includes(type)) {
    throw new Error("Invalid alert type.");
  }

  const icon = symbol[type];

  title = title ? title.toUpperCase() : type.toUpperCase();
  title = label[type](` ${title} `);

  msg = color[type](msg);

  log(`\n${icon} ${title} ${msg}\n`);
}
