import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        host: '0.0.0.0',
    },
    build: {
        "assetsDir": "user/themes/custom/assets",
        "assetsInlineLimit": "0",
        "rollupOptions": {
            "output": {
                "entryFileNames": "user/themes/custom/assets/[name].js",
                "assetFileNames": "user/themes/custom/assets/[name][extname]",
            },
        }
    }
})

