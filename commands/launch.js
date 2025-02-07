/**
 * @module commands/launch
 */

import { cli, color, header, label, log } from '../utils/index.js';

export function execLaunch() {
  const title = `${label.info(' Configuration Wizard ')} ${color.info('Launching...')}\n`;
  header(cli.flags.clear);
  log(title);
  process.exit(0);
}
