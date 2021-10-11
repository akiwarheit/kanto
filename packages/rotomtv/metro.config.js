/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {extraNodeModules, watchFolders} =
  require('react-native-yarn-workspaces-v2')(__dirname);

module.exports = {
  watchFolders,
  resolver: {
    extraNodeModules,
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
