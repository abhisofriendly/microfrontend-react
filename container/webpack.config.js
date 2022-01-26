const HtmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

__webpack_base_uri__ = 'http://localhost:8080';
module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new moduleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'myproducts@http://localhost:8081/remoteEntry.js',
        carts: 'cart@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
