import globals from 'globals';
import js from '@eslint/js';
import wordPress from '@wordpress/eslint-plugin';

export default [
	js.configs.recommended,
	...wordPress.configs.flat.recommended,
	{ ignores: [ '**/.dev-assets/', '**/build/', '**/*.min.js' ] },
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'prettier/prettier': [ 'warn', { printWidth: 120 } ],
			yoda: [ 'warn', 'never' ],
		},
	},
];
