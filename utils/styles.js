/**
 * @module utils/styles
 */

import chalk from 'chalk';
import figures from 'figures';

export const s = chalk;

export const customColor = {
  orange: '#ffa500',
  purple: '#bd84d7',
};

export const color = {
  error: s.red,
  heading: s.hex(customColor.purple),
  info: s.blue,
  note: s.yellow,
  success: s.green,
  warning: s.hex(customColor.orange),
};

export const label = {
  error: color.error.inverse.bold,
  heading: color.heading.inverse.bold,
  info: color.info.inverse,
  note: color.note.inverse,
  success: color.success.inverse,
  warning: color.warning.inverse,
};

export const symbol = {
  error: color.error(figures.cross),
  heading: color.heading(figures.nodejs),
  info: color.info(figures.info),
  note: color.note(figures.star),
  success: color.success(figures.tick),
  warning: color.warning(figures.warning),
};
