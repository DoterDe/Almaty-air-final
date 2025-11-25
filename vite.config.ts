import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ← измените эту строку

export default defineConfig({
  plugins: [react()],
});