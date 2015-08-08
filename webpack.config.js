var webpack = require('webpack');

module.exports = {
  entry: './src/client/client',

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
