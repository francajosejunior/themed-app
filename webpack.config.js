const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {
  console.log('REACT_APP_THEME: ', env.REACT_APP_THEME);
  console.log('REACT_APP_DEBUG: ', env.REACT_APP_DEBUG);
  console.log('REACT_APP_ENV: ', env.REACT_APP_ENV);

  return {
    devServer: {
      inline: true,
      port: 3000
    },
    devtool: 'source-map',
    mode: 'development',
    entry: ['@babel/polyfill', path.join(__dirname, 'src', 'index')],

    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].[contenthash].js'
      // publicPath: '/'
    },
    resolve: {
      alias: {}
    },
    plugins: [
      new CleanWebpackPlugin(['build']),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new WebpackNotifierPlugin({
        title: 'NEW_CRM',
        skipFirstNotification: true,
        alwaysNotify: false
      }),
      new webpack.DefinePlugin({
        REACT_APP_ENV: JSON.stringify(env.REACT_APP_ENV),
        REACT_APP_DEBUG: JSON.stringify(env.REACT_APP_DEBUG),
        REACT_APP_THEME: JSON.stringify(env.REACT_APP_THEME)
        // ENVIRONMENT: JSON.stringify(env.REACT_APP_THEME)
      }),
      new CopyWebpackPlugin(['src/assets'])
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          exclude: /node_modules/,
          include: /src/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.(scss|css|woff2)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[local]--[name].[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(jpe?g|png|gif|eot|woff2?|ttf|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: { name: 'assets/[name].[hash].[ext]' }
            }
          ]
        }
      ]
    }
  };
};
