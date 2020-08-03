const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      utils: path.resolve(__dirname, 'src/utils/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'library-name',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './package.json', to: path.resolve(__dirname, 'dist') },
        { from: './README.md', to: path.resolve(__dirname, 'dist') }
      ]
    })
  ]
};
