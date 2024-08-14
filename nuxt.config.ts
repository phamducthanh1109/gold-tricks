export default defineNuxtConfig({
	ssr: false,
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	typescript: {
		typeCheck: true,
	},
	build: {
		transpile: ['vuetify'],
	},
	eslint: {
		config: {
			stylistic: true,
		},
		checker: false,
	},
	modules: ['@nuxt/eslint', '@nuxt/ui'],
	colorMode: {
		preference: 'light',
	},
});
