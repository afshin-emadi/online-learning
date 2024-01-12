import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "src/config/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@stores": path.resolve(__dirname, "src/stores/"),
      "@utilities": path.resolve(__dirname, "src/utilities/"),
    },
  },
  plugins: [react()],
});