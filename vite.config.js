import { defineConfig } from 'vite'
import path from 'path';

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
            "input": {
                'index': 'index.html',
                'error-404-v2': 'erreur-404-v2.html',
                'article': 'article.html',
                'blog': 'blog.html',
                'alternative': 'alternative.html',
                'alternatives': 'alternatives.html'
            },
            "output": {
                "entryFileNames": "wp-content/themes/chloecorfmat/assets/[name].js",
                "assetFileNames": "wp-content/themes/chloecorfmat/assets/[name][extname]"
            },
        },
        minify: false
    }
    
})

