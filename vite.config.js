import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: ['electron', 'node-json-db', 'path', 'url', 'fs', 'fs/promises'],
        },
    },
    // Ignorer main.js dans le build de Vite
    ssr: {
        noExternal: true,
    },
});