module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['unused-imports', 'eslint-plugin-import-helpers'],
  rules: {
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    curly: 0,
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'error',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react(-native)?$/', 'module', '/^@iol/', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
