const OFF = 'off'
const WARN = 'warn'
const ERR = 'error'

module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  rules: {
    'react/jsx-closing-bracket-location': WARN,
    'jsx-quotes': [ERR, 'prefer-single'],
    'react/react-in-jsx-scope': OFF,
    'react/no-array-index-key': WARN,
    'react/jsx-boolean-value': WARN,
    'react-hooks/exhaustive-deps': OFF,
    'no-multi-str': WARN,
    'no-multi-assign': WARN,
    'no-catch-shadow': OFF,
    'prefer-const': WARN,
    'spaced-comment': WARN,
  },
}
