const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-lines-per-function': ['error', { max: 150 }],
    'max-len': ['error', { code: 150 }],
    camelcase: 'off',
    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'operator-linebreak': ['error', 'after'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', path.resolve(__dirname, 'src')]],
      },
    },
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
