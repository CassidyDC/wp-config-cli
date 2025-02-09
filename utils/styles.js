/**
 * @module utils/styles
 */

import chalk from 'chalk';
import figures from 'figures';

const s = chalk;

const customColor = {
  orange: '#ffa500',
  purple: '#bd84d7',
};

const color = {
  error: s.red,
  heading: s.hex(customColor.purple),
  info: s.blue,
  note: s.yellow,
  success: s.green,
  warning: s.hex(customColor.orange),
};

const figure = {
  error: figures.cross,
  heading: figures.nodejs,
  info: figures.info,
  note: figures.star,
  success: figures.tick,
  warning: figures.warning,
};

const label = createLabels();

const icon = createIcons();

/**
 * Creates label styles from each color key.
 */
function createLabels() {
  const labels = {};

  Object.keys(color).forEach((key) => {
    labels[key] = color[key].inverse;
  });

  return labels;
}

/**
 * Creates icon styles from each matching color and figure key.
 */
function createIcons() {
  const icons = {};
  const matchingKeys = Object.keys(color).filter((key) => figure.hasOwnProperty(key));

  matchingKeys.forEach((key) => {
    icons[key] = color[key](figure[key]);
  });

  return icons;
}

export { color, customColor, figure, icon, label, s };
