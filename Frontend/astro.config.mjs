// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true
    },
    
    devToolbar: {
        enabled: false
    },
    site: 'https://vincentpiercedev.github.io',
    base: '/TonySpatola',
    output: 'static'
});
