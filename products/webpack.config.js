const HtmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederation = require('webpack/lib/container/ModuleFederationPlugin');

__webpack_base_uri__ = 'http://localhost:8081';
module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new moduleFederation({
      name: 'myproducts',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap',
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
