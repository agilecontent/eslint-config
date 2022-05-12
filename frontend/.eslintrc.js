module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    // Add extends before this line
    '../.eslintrc.js',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/prefer-stateless-function': 'error',
    'react/jsx-fragments': ['warn', 'element'],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
  },
};
