import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    devtools: {
        enabled: false
    },

    css: ['~/assets/css/tailwind.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    modules: ['shadcn-nuxt', '@nuxt/image', '@nuxt/icon', '@nuxtjs/i18n'],


    shadcn: {
        prefix: '',
        componentDir: './app/components/ui'
    },

    runtimeConfig: {
        public: {
            I18N_MODE: 'prefix',
            BASE_URL: 'http://komprai.local'
        }
    },

    i18n: {
        locales: [
            // { code: 'es', iso: 'pt-BR', name: 'Português (BR)', file: 'br.json' },
            { code: 'br', iso: 'pt-BR', name: 'Português (BR)', file: 'br.json' },
            { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales',
        // baseUrl: process.env.BASE_URL,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            // cookieDomain: '.komprai.local',
            redirectOn: 'root'
            // redirectOn: 'no prefix'
        },
        strategy: 'prefix_except_default',
        seo: true
    }

})