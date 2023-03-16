import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from "vite-plugin-cesium";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium()
  ],
  server: {
    open: false,
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://services.arcgisonline.com',
        secure: true,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
