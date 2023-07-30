const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
          { from: Path.resolve(__dirname, '../public'), to: 'public' },
          { from: Path.resolve(__dirname, '../src/images'), to: 'images' }
      ],
    }),


    new HtmlWebpackPlugin({
      template: Path.join('src', 'pages', 'index.twig'),
      filename: `index.html`
    }),

     new webpack.ProvidePlugin({
       $: 'jquery',
       jQuery: 'jquery',
       'window.jQuery': 'jquery'
    }),

  ],

  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.twig$/,
        use: [
          'raw-loader',
          {
            loader: 'twig-html-loader',
            options: {
              data: {
                config: require("../src/config.json")
              }
            }
          }
        ]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset'
      },
    ],
  },
};




