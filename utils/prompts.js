/**
 * @module utils/prompts
 */

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import { log } from './functions.js';
import { color, label } from './styles.js';

const data = {
  configMode: {
    heading: 'Configuration Mode',
    prompts: {
      mode: {
        answer: null,
        ask: 'Select a mode:',
        options: ['plugin', 'server', 'theme'],
        type: 'select',
      },
    },
  },
  envType: {
    heading: 'Environment Type',
    prompts: {
      env: {
        answer: null,
        ask: 'Select an environment type:',
        options: ['development', 'local', 'production', 'staging'],
        type: 'select',
      },
    },
  },
  eslint: {
    heading: 'ESLint',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to use ESLint?',
        type: 'boolean',
      },
    },
  },
  git: {
    heading: 'Git',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to use Git?',
        type: 'boolean',
      },
    },
  },
  markdownlint: {
    heading: 'Markdownlint',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to use Markdownlint?',
        type: 'boolean',
      },
    },
  },
  phpcs: {
    heading: 'PHPCS',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to use PHPCS?',
        type: 'boolean',
      },
    },
  },
  phpstan: {
    heading: 'PHPStan',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to use PHPStan?',
        type: 'boolean',
      },
    },
  },
  prettier: {
    heading: 'Prettier',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to use Prettier?',
        type: 'boolean',
      },
    },
  },
  stylelint: {
    heading: 'Stylelint',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to use Stylelint?',
        type: 'boolean',
      },
    },
  },
  vscodeRecommendations: {
    heading: 'VSCode Extension Recommendations',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to include a VSCode extensions recommendations file?',
        type: 'boolean',
      },
    },
  },
  vscodeSettings: {
    heading: 'VSCode Workspace Settings',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to include a VSCode workspace settings file?',
        type: 'boolean',
      },
    },
  },
  webpack: {
    heading: 'Webpack',
    prompts: {
      confirm: {
        answer: null,
        ask: 'Do you want to use Webpack?',
        type: 'boolean',
      },
    },
  },
  wpAdminUser: {
    heading: 'Create Your WP Admin User',
    prompts: {
      email: {
        answer: null,
        ask: 'Enter an email address:',
        type: 'email',
      },
      password: {
        answer: null,
        ask: 'Enter a password:',
        type: 'password',
      },
      username: {
        answer: null,
        ask: 'Enter a username:',
        type: 'text',
      },
    },
  },
};

export async function runInstallPrompts() {
  const rl = readline.createInterface({ input, output });
  const prompt = async (text) => await rl.question(`${color.info(text)} `);
  const title = (text) => log(label.info(` ${text} `));

  // title(data.wpAdminUser.title);
  // const username = await prompt(data.wpAdminUser.prompt.username.ask);
  // const password = await prompt(data.wpAdminUser.prompt.password.ask);
  // const email = await prompt(data.wpAdminUser.prompt.email.ask);
  // console.log(`Hello, ${username}! Your password is ${password} and your email is ${email}.`);

  const dataTopics = Object.keys(data);

  for (const dataKey of dataTopics) {
    const topicTitle = data[dataKey].heading;
    const topicPrompts = Object.keys(data[dataKey].prompts);

    title(topicTitle);

    for (const promptKey of topicPrompts) {
      const ask = data[dataKey].prompts[promptKey].ask;
      const answer = await prompt(ask);
      data[dataKey].prompts[promptKey].answer = answer;
    }
  }

  rl.close();

  return new Promise((resolve) => {
    rl.on('close', resolve(data));
  });
}
