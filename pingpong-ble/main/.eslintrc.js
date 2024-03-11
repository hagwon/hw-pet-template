module.exports = {
  root: true,
  extends: ['@repo/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unstable-nested-components': 'off',
    'no-lonely-if': 'off',
    'no-empty': 'off',
    'no-constant-binary-expression': 'off',
    'no-return-await': 'off',
    'unicorn/prefer-node-protocol': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    'react/jsx-no-useless-fragment': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-param-reassign': 'off',
    'prefer-named-capture-group': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-bitwise': 'off',
  },
}