const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //mode: "production",
  mode: "development",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  entry: {
    lazyimport_sync: [
      "webpack-dev-server/client?http://localhost:3001/",
      "webpack/hot/dev-server",
      path.resolve(__dirname, "./src/lazyimport_sync.tsx")
    ],
    lazyimport_concurrent: [
      "webpack-dev-server/client?http://localhost:3001/",
      "webpack/hot/dev-server",
      path.resolve(__dirname, "./src/lazyimport_concurrent.tsx")
    ],
    suspenselist_sync: [
      "webpack-dev-server/client?http://localhost:3001/",
      "webpack/hot/dev-server",
      path.resolve(__dirname, "./src/suspenselist_sync.tsx")
    ],
    suspenselist_concurrent: [
      "webpack-dev-server/client?http://localhost:3001/",
      "webpack/hot/dev-server",
      path.resolve(__dirname, "./src/suspenselist_concurrent.tsx")
    ],
    suspenselist_concurrent_partial_implement: [
      "webpack-dev-server/client?http://localhost:3001/",
      "webpack/hot/dev-server",
      path.resolve(
        __dirname,
        "./src/suspenselist_concurrent_partial_implement.tsx"
      )
    ],
    case3: [
      "webpack-dev-server/client?http://localhost:3001/",
      "webpack/hot/dev-server",
      path.resolve(__dirname, "./src/index3.tsx")
    ],
    case3x: [
      "webpack-dev-server/client?http://localhost:3001/",
      "webpack/hot/dev-server",
      path.resolve(__dirname, "./src/index3x.tsx")
    ]
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
  ],
  output: {
    filename: "[name].js",
    publicPath: "/"
  }
};
