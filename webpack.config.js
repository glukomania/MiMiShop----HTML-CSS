const path = require(`path`);
const webpack = require(`webpack`);


module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1337,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env',
                      '@babel/react',{
                      'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
    }
    ],
  },
  devtool: `source-map`,


  resolve: {
    modules: [
      `node_modules`,
      path.resolve(path.join(__dirname, `public`))
    ],
    extensions: [`.js`, `.jsx`, `.ts`, `.tsx`, `.webm`],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: `react`,
      ReactDOM: `react-dom`,
      cx: `classnames`,
      PropTypes: `prop-types`,
    })
  ]

};