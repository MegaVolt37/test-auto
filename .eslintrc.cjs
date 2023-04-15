module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'missing-whitespace-between-attributes': 'off',
    'quotes': ['error', 'single']
  },

  settings: {
    'import/resolver': {
      alias: {
        map: ['@', './src'],
        extensions: ['.js', '.vue'],
      },
    },
  },
}
