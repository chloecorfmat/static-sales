import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        host: '0.0.0.0',
    },
    /** For Grav CMS **/
    /**build: {
        "assetsDir": "user/themes/custom/assets",
        "assetsInlineLimit": "0",
        "rollupOptions": {
            "output": {
                "entryFileNames": "user/themes/custom/assets/[name].js",
                "assetFileNames": "user/themes/custom/assets/[name][extname]",
            },
        }
    }**/

    /** For WordPress **/
    build: {
        "assetsDir": "wp-content/themes/chloecorfmat/assets",
        "assetsInlineLimit": "0",
        "rollupOptions": {
            "output": {
                "entryFileNames": "wp-content/themes/chloecorfmat/assets/[name].js",
                "assetFileNames": "wp-content/themes/chloecorfmat/assets/[name][extname]",
            },
        },
        minify: false
    }
    
})

