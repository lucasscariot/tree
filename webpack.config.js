// import webpack from 'webpack'
import path from 'path'

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
}

const config = {
  entry: {
    tree: './src/index.js',
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  stats: {
    colors: true,
    warnings: false,
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true,
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
}

export default config
