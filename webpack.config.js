var path = require('path');

module.exports = options => {
    return {
      entry: './index.js',
      output: {
        path: path.join(__dirname, "lib"),
        filename: 'bundle.[hash].js',
      },
      module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
      }
    }
  }
