const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/build/',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};