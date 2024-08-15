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
	css: ['@/assets/css/main.css', '@/assets/scss/global.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/_mixins.scss" as *;',
				},
			},
		},
	},
});
