'use strict';


const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractText('bundle.css'),
  ],
  sassLoader: {
    includePaths: `${__dirname}/app/scss/lib`,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass!'),
      },
    ],
  },
};
