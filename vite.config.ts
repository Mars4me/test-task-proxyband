import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.PROD ? '/test-task-proxyband/' : '/',
    server: {
        port: 3000,
    },
});
