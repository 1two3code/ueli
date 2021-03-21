const path = require("path");
const webpack = require("webpack");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const devtool =
  process.env.NODE_ENV === "production" ? undefined : "source-map";

console.log(`Using "${mode}" mode for webpack bundles`);
const { VueLoaderPlugin } = require("vue-loader");

const mainConfig = {
  entry: path.join(__dirname, "src", "main", "main.ts"),
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "bundle")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  mode,
  target: "electron-main",
  node: false,
  devtool
};

const rendererConfig = {
  entry: path.join(__dirname, "src", "renderer", "renderer.ts"),
  output: {
    filename: "renderer.js",
    path: path.join(__dirname, "bundle"),
    devtoolModuleFilenameTemplate: info => {
      if (info.allLoaders === "") {
        // when allLoaders is an empty string the file is the original source
        // file and will be prefixed with src:// to provide separation from
        // modules transpiled via webpack
        const filenameParts = ["src://"];
        if (info.namespace) {
          filenameParts.push(`${info.namespace}/`);
        }
        filenameParts.push(info.resourcePath.replace(/^\.\//, ""));
        return filenameParts.join("");
      }
      // otherwise we have a webpack module
      const filenameParts = ["webpack://"];
      if (info.namespace) {
        filenameParts.push(`${info.namespace}/`);
      }
      filenameParts.push(info.resourcePath.replace(/^\.\//, ""));
      const isVueScript =
        info.resourcePath.match(/\.vue$/) &&
        info.query.match(/\btype=script\b/) &&
        !info.allLoaders.match(/\bts-loader\b/);
      if (!isVueScript) {
        filenameParts.push(`?${info.hash}`);
      }
      return filenameParts.join("");
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: [".ts", ".js", ".vue"]
  },
  mode,
  target: "electron-renderer",
  node: false,
  devtool
};

module.exports = [mainConfig, rendererConfig];
