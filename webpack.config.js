const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".vue", ".js"], //생략할 확장자 작성
    alias: {
      "~": path.resolve(__dirname, "src"),
    }, //별칭 사용, 절대경로로 사용된다.
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/', //index.html에서 절대경로로 js를 찾을 수 있도록 지정
    clean: true,
    filename: "hello.js", //생략하면 entry의 이름으로 저장됨
  },
  module: {
    rules: [
      {
        test: /\.vue$/, //.vue 확장자를 찾는 정규표현식
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: "./src/index.html", //path.resolve를 작성해야하지만 내장되어 있으므로 생략해도 된다.
    }),
  ], //플러그인을 가져와야 제대로 동작된다.
  devServer: { //개발용 서버 설정
    historyApiFallback: true //모든 주소를 index.html로 연결한다.
  }
};
