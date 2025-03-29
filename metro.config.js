const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      '@Constants': path.resolve(__dirname, 'src/constants'),
      '@Navigation': path.resolve(__dirname, 'src/navigations'),
      '@Screens': path.resolve(__dirname, 'src/screens'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Redux': path.resolve(__dirname, 'src/redux'),
      '@Types': path.resolve(__dirname, 'src/types'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, 'src')],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
