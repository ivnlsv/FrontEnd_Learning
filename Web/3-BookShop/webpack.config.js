var path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry: path.resolve(__dirname, 'js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './index.pug',
        filename: 'index.html',
        
      })
    ],
    module: {
        rules: [
          { test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {test: /\.pug$/,
           use: '@webdiscus/pug-loader'
          },
          {
            test: /\.(ico|png|jp?g|svg)$/,
            type: 'icons',
            generator: {
              filename: 'icons/[name].[hash:8][ext][query]',
            },
          },    
        ]
      },
      optimization: {
        minimize: true,
        minimizer: [
          `...`,
          new CssMinimizerPlugin(),
        ]
      },
     mode: 'development'
}