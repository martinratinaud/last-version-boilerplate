const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./_config.base');
const APP_DIR = path.join(__dirname, '..', 'app');

const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"production"',
  ENV: process.env.ENV || JSON.stringify('production')
});

baseConfig.entry = [`${APP_DIR}/index.jsx`];

baseConfig.output = {
  path: path.join(__dirname, '..', 'build'),
  filename: 'bundle.js',
};

baseConfig.plugins = [
  definePlugin
];

module.exports = baseConfig;
