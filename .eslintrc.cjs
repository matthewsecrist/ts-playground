module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:perfectionist/recommended-natural',
    'plugin:prettier/recommended',
  ],
  overrides: [
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
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['*.js', '*.cjs', '*.mjs'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: true,
    sourceType: 'module',
    tsConfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'perfectionist'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-console': 'error',
    'no-process-env': 'error',
    'prettier/prettier': 'error',
  },
}
