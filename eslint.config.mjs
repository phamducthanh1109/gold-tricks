// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-var-requires': ['warn'],
    '@typescript-eslint/no-explicit-any': ['warn'],
  },
})
