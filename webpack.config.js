const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./src/index.html"),
  filename: "index.html"
});

module.exports = {
  mode: "development",
  plugins: [htmlPlugin],
  module: {
    rules: [
      { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.ttf|woff|woff2|eot|svg$/, use: "url-loader" },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            }
          },
          "sass-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "./src")
    }
  }
};
