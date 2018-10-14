var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              },
            'postcss-loader'
            ]
          })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
plugins: [
  new ExtractTextPlugin({ filename: 'styles.css', allChunks: true, disable: process.env.NODE_ENV !== 'production' }),
]  
};
