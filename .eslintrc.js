module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'arrow-body-style': [
      'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral: true,
      },
    ],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    curly: ['warn', 'all'],
  },
};
