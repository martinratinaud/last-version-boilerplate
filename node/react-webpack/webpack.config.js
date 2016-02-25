var path = require('path');

// Do not parse react
var node_modules_dir = path.join(__dirname, 'node_modules');

var deps = [
  'react/dist/react.min.js'
  // 'react-router/dist/react-router.min.js',
  // 'moment/min/moment.min.js',
  // 'underscore/underscore-min.js',
];


var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
  resolve: {
    alias: {}
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      query: {
        presets: [ "es2015", "react" ]
      }
    }],
    noParse: []
  },
  modulesDirectories: [
    'node_modules'
  ]
};

// https://christianalfoni.github.io/react-webpack-cookbook/Optimizing-development
// Run through deps and extract the first part of the path,
// as that is what you use to require the actual node modules
// in your code. Then use the complete path to point to the correct
// file and make sure webpack does not try to parse it
deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
