module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:perfectionist/recommended-natural'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        project: true,
        sourceType: 'module',
        tsConfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      extends: ['plugin:vitest/recommended'],
      files: ['*.test.ts'],
      plugins: ['vitest'],
      rules: {},
      settings: {
        vitest: {
          typecheck: true,
        },
      },
    },
  ],
  plugins: ['perfectionist', 'prettier'],
  root: true,
  rules: {
    'no-console': 'error',
    'no-process-env': 'error',
    'prettier/prettier': 'error',
  },
}
