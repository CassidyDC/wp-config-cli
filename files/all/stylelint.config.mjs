export default {
	extends: [ '@wordpress/stylelint-config/scss-stylistic', 'stylelint-config-cssmodules-order' ],
	ignoreFiles: [ '**/*.min.js', '**/*.min.css', 'build/**' ],
	plugins: [
		'stylelint-declaration-block-no-ignored-properties', // Prevents the use of ignored properties within declaration blocks.
		'stylelint-high-performance-animation', // Prevents the use of low performance animation and transition properties.
		'stylelint-plugin-logical-css', // Enforce the use of logical CSS properties, values and units.
		'stylelint-use-nesting', // Enforces nesting when it is possible in CSS
	],
	rules: {
		'@stylistic/declaration-colon-newline-after': null,
		'@stylistic/function-comma-space-after': 'always-single-line',
		'@stylistic/function-parentheses-space-inside': 'never-single-line',
		'@stylistic/indentation': [ 'tab', { ignore: [ 'inside-parens' ] } ],
		'@stylistic/max-line-length': 120,
		'at-rule-empty-line-before': [
			'always',
			{
				except: [ 'blockless-after-same-name-blockless', 'first-nested' ],
				ignore: [ 'after-comment' ],
			},
		],
		'comment-empty-line-before': [
			'always',
			{
				except: [ 'first-nested' ],
				ignore: [ 'stylelint-commands' ],
				ignoreComments: [ 'prettier-ignore' ],
			},
		],
		'csstools/use-nesting': 'always',
		'no-descending-specificity': [ true, { ignore: [ 'selectors-within-list' ] } ],
		'plugin/declaration-block-no-ignored-properties': true,
		'plugin/no-low-performance-animation-properties': [
			true,
			{
				ignoreProperties: [ 'background-color', 'border-color', 'color' ],
			},
		],
		'plugin/use-logical-properties-and-values': [ true, { severity: 'warning' } ],
		'plugin/use-logical-units': [ true, { severity: 'warning' } ],
		'rule-empty-line-before': [ 'always', { except: [ 'after-single-line-comment', 'first-nested' ] } ],
		'scss/operator-no-newline-after': null,
		'selector-class-pattern': [
			'^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
			{
				message: 'Expected BEM naming convention for class.',
			},
		],
	},
};
