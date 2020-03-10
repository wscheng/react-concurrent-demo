const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // mode: "production",
  mode: "development",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  entry: {
    case1: "./src/index1.tsx",
    case2: "./src/index2.tsx"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  // output: {
  //   path: "./dist"
  // },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/case1.html",
    //   filename: "case1.html",
    //   inject: true,
    //   chunk: ["case1"]
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./src/case2.html",
    //   filename: "case2.html",
    //   inject: true,
    //   chunk: ["case2"]
    // }),
    //    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ["**/*", "!*html"]
    })
  ]
};
