const HtmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederation = require('webpack/lib/container/ModuleFederationPlugin');

__webpack_base_uri__ = 'http://localhost:8082';
module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new moduleFederation({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/bootstrap',
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
