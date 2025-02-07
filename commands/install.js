/**
 * @module commands/install
 */

import { cli, color, header, label, log } from '../utils/index.js';

export function execInstall() {
  const title = `${label.info(' Running Installation ')} ${color.info('Installing default settings...')}\n`;
  header(cli.flags.clear);
  log(title);
  process.exit(0);
}
