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
            NUXT_PUBLIC_BACKEND_BASE: process.env.NUXT_PUBLIC_BACKEND_BASE,
            I18N_MODE: 'prefix',
            BASE_URL: 'http://kompr.ai.local'
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
            // cookieDomain: 'komprai.local',
            redirectOn: 'no prefix',
            // alwaysRedirect: true,
            // cookieSecure: false, // útil se estiver testando em http, não https
        },
        strategy: 'prefix_except_default',
        seo: true
    }

})