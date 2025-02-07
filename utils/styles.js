/**
 * @module utils/styles
 */

import chalk from "chalk";
import figures from "figures";

const orange = "#ffa500";

export const color = {
  error: chalk.red,
  info: chalk.blue,
  note: chalk.yellow,
  success: chalk.green,
  warning: chalk.hex(orange),
};

export const label = {
  error: color.error.inverse.bold,
  info: color.info.inverse,
  note: color.note.inverse,
  success: color.success.inverse,
  warning: color.warning.inverse,
};

export const symbol = {
  error: color.error(figures.cross),
  info: color.info(figures.info),
  note: color.note(figures.star),
  success: color.success(figures.tick),
  warning: color.warning(figures.warning),
};
