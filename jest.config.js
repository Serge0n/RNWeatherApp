module.exports = {
  preset: 'react-native',
  setupFiles: ['./src/jestSetup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
}
