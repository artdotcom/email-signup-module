const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'example')
const SRC_DIR = path.resolve(__dirname, 'lib')

const config = {
  entry: APP_DIR + '/testStub.js',
  
  output: {
    path: APP_DIR,
    filename: 'module.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, include: [SRC_DIR],loader: 'babel-loader',exclude: /node_modules/ },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader?presets[]=react']
       
    },
    {test: /\.json$/, loader: 'json-loader' },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['eslint-loader']
    },
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader'
    },
    {
      test: /\.styl$/,
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },          
          { loader: 'stylus-loader',  options: { sourceMap: true } }
        ]
      }))
    },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'HOSTNAME':  JSON.stringify(process.env.HOSTNAME || 'www.art.com')        
      }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin(`module.css`),//Merge chunks 

  ]
  
}

module.exports = config
