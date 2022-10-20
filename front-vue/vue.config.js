/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/

module.exports = {
  // outputDir은 npm run build로 빌드 시 파일이 생성되는 위치
  outputDir: "../src/main/resources/static",

  transpileDependencies: true,
  lintOnSave : false,

  devServer: {             
    port: 3000,
    proxy: {
      '/api': {
        // '/api' 로 들어오면 포트 8080(스프링 서버)로 보낸다
        target: 'http://localhost:8080',
        changeOrigin: true // cross origin 허용.
      }
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
};
