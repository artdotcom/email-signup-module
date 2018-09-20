const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, 'lib')
const BUILD_DIR = path.resolve(__dirname,'dist')

const config = {
  target:'node',
  externals:[nodeExternals()],
  entry: './lib/EmailSignup.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'module.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?/, include: [SRC_DIR], loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.js$/, include: [SRC_DIR],loader: 'babel-loader',exclude: /node_modules/ },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'stylus-loader'
          ]
        })
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
    'process.env': {
      'NODE_ENV': JSON.stringify('production')      
    }
    }),
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin(`module.styl`)//Merge chunks 
  ]
  
}

module.exports = config
