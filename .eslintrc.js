module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        'prettier/prettier': ['warn', {
            tabWidth: 4,
            endOfLine: 'auto',
            printWidth: 80,
            semi: true,
            singleQuote: false,
        }],
    },
    env: {
        node: true,
        es6: true,
    },
};
