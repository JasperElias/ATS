/*
  Configuration file for Babel. Plugins are used specifically to implement features for 
  the drawer navigator.
  
  Docs: 
    React Native Paper: https://callstack.github.io/react-native-paper/getting-started.html
    React Native Reanimated: https://reactnative.dev/docs/animated 
*/

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // 'babel-preset-expo', 
    plugins: ['react-native-paper/babel', [
      "module-resolver",
      {
        extensions: [".tsx", ".ts", ".js", ".json"],
      },
    ], 'react-native-reanimated/plugin']
  };
};
