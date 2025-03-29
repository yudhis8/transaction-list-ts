module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@Constants': ['./src/constants'],
          '@Navigation': ['./src/navigations'],
          '@Screens': ['./src/screens'],
          '@Components': ['./src/components'],
          '@Redux': ['./src/redux'],
          '@Types': ['./src/types'],
          '@src': ['./src'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
