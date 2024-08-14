module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-empty': [1, 'never'],
		'scope-empty': [1, 'never'],
		'subject-empty': [1, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'bugFix',
				'hotFix',
				'feat',
				'refactor',
				'revert',
				'style',
				'docs',
				'config',
				'package',
			],
		],
		'scope-case': [2, 'always', 'kebab-case'],
		'subject-case': [2, 'always', ['lower-case']],
		'scope-min-length': [2, 'always', 0],
		'scope-max-length': [2, 'always', 20],
		'subject-max-length': [2, 'always', 60],
		'subject-full-stop': [2, 'always', '.'],
	},
};
