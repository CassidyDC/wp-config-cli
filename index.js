#!/usr/bin/env node

/**
 * WP Config CLI
 *
 * A simple CLI for adding development configuration files to a WordPress project.
 *
 * @author Jacob Cassidy <https://cassidydc.com>
 */

import { processArgs } from './utils/index.js';

(async () => {
  processArgs();
})();
