const path = require('path')
const conditionalLoader = require('./src')

module.exports = {
  entry: {
    'env-var-truthy': './test/test-files/env-var-truthy.js',
    'env-var-falsey': './test/test-files/env-var-falsey.js',
    'local-var-truthy': './test/test-files/local-var-truthy.js',
    'local-var-falsey': './test/test-files/local-var-falsey.js',
    'posix-falsey': './test/test-files/posix-falsey.js',
    'posix-truthy': './test/test-files/posix-truthy.js',
    'windows-falsey': './test/test-files/windows-falsey.js',
    'windows-truthy': './test/test-files/windows-truthy.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolveLoader: {
    alias: {
      'conditional-loader': path.join(__dirname, './src')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'conditional-loader',
        options: {
          localVar: {
            truthy: true,
            falsey: false
          }
        }
      }]
    }]
  }
}
