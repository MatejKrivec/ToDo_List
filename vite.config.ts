import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'sass:math'; @import '@carbon/styles/scss/styles.scss';`,
      },
    },
  },*/
})
