module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-irregular-whitespace': 'off',
        'no-unexpected-multiline': 'off',
        'semi': 'off',
        'indent': 'off',
        'eol-last': 'off',
        'spaced-comment': 'off',
        'no-trailing-spaces': 'off',
        'comma-spacing': 'off',

    }
}