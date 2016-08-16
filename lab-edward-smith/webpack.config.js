'use strict';

const ExtractText = require('extract-text-webpack-plugin');

module.exports = exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractText('bunde.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass!'),
      },
    ],
 },
};
