const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getIfUtils = require('webpack-config-utils').getIfUtils

module.exports = env => {
  const { ifProd } = getIfUtils(env)

  const config = {
    context: __dirname,
    entry: {
      app: './js/Client.js'
    },
    devtool: 'cheap-module-source-map',
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    },
    resolve: {
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      },
      extensions: ['.js', '.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          include: [path.resolve(__dirname, 'js'),
            path.resolve(__dirname, 'node_modules/preact-compat/src')],
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'})
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(eot|woff(2)?|ttf)(\?[a-z0-9=&.]+)?$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css',
      'styles.[name].css')),
      new HtmlWebpackPlugin()]
  }

  return config
}
