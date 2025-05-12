import { defineConfig } from 'astro/config';

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
