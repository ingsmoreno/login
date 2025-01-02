module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended', // Deshabilitado temporalmente
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'space-in-parens': ['error', 'always'], // Espacio dentro de paréntesis
    'array-bracket-spacing': ['error', 'always'], // Espacio dentro de corchetes
    'object-curly-spacing': ['error', 'always'], // Espacio dentro de llaves
    "comma-spacing": ["error", { "before": false, "after": true }], // Espacios después de comas
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }], // Espacios en objetos
    "semi-spacing": ["error", { "before": false, "after": true }], // Espacios después de punto y coma
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }, // Línea antes de return
      { blankLine: 'always', prev: 'block-like', next: '*' }, // Línea después de bloques
      { blankLine: 'always', prev: 'directive', next: '*' }, // Línea después de "use strict"
      { blankLine: 'any', prev: 'import', next: 'import' }, 
    ],
  },
};
