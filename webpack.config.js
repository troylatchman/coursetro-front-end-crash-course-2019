const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
