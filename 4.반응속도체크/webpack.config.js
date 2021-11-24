// node의 모듈을 만들었다.
// webpack이 webpack처리를 할 때 사용: 웹패킹
// webpack 설정은 크게 4개가 있다. (entry, module, plugins, output)
// webpack 쓰는 이유: script가 너무 많아져서 하나로 합쳐 사용하기 위해
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path'); // 노드가 만들어준 스크립트

module.exports = {
  mode: 'development', // 개발모드
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'], // 확장자 처리
  },
  entry: {
    app: path.join(__dirname, 'main.js'), // 스크립트를 하나로 합쳐줄 main.js (여러개의 스크립트 중 가장 중요한 파일)
  },
  module: {
    rules: [{
      test: /\.vue$/, // .vue로 끝나는 파일
      loader: 'vue-loader', // npm i vue-loader -D
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js', // app.js
    // 폴더 경로(app.js가 최종 결과물로 나온다. cdm을 사용하지 않아도 된다.)
    // 절대경로 자동 생성
    path: path.join(__dirname, 'dist'),
  },
};
