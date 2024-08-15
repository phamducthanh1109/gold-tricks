// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'@stylistic/no-tabs': 'off',
		'@stylistic/indent': 'off',
		'@stylistic/semi': 'off',
		'@stylistic/quotes': ['error', 'single'],
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'vue/script-indent': 'off',
		'vue/html-indent': 'off',
		'vue/max-attributes-per-line': 'off',
	},
});
