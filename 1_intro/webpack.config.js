const path = require('path');

module.exports = {
  entry: './src/teste.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: "development"
}