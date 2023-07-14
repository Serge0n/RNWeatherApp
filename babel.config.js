const paths = ['components', 'screens', 'utils', 'navigation', 'api']

const babelModuleResolverAlias = paths.reduce(
  (acc, name) => {
    acc[name] = `./src/${name}`
    acc[`${name}/*`] = `./src/${name}/*`
    return acc
  },
  { src: `./src`, 'src/*': `./src/*` },
)

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: babelModuleResolverAlias,
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    ],
  ],
}
