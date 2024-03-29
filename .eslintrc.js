module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'plugin:nuxt/recommended'
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      'quotes': ['error', 'double', { avoidEscape: true }],
      'max-len': ['error', { code: 100 }]
    }
  };
  