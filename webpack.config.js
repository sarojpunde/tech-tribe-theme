const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  entry: 'js/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: 'theme.min.js',
    path: path.resolve(__dirname, 'assets'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.SHOPIFY_STORE_DOMAIN': JSON.stringify(process.env.SHOPIFY_STORE_DOMAIN),
      'process.env.SHOPIFY_STOREFRONT_API_KEY': JSON.stringify(process.env.SHOPIFY_STOREFRONT_API_KEY),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  mode: 'development',
};
