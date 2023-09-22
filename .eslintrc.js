module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'key-spacing': 0,
    indent: 0,
    'no-multiple-empty-lines': 0,
    'no-tabs': 'off',
    semi: 0,
    quotes: 'off',
    'no-undef': 0,
    camelcase: 'off',
    'no-unused-vars': 0,
    'prefer-promise-reject-errors': 0,
    'handle-callback-err': 0,
    'no-self-assign': 0,
    'standard/no-callback-literal': 0,
    eqeqeq: 0,
    'comma-spacing': 0,
    'keyword-spacing': 0,
    'object-curly-spacing': 0,
    'padded-blocks': 0,
    'space-infix-ops': 0,
    curly: 0,
    'spaced-comment': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
