import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    app: {
        head: {
            meta: [
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                // valores possíveis: 'default', 'black', 'black-translucent'
                // { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
                // (opcional) cor da barra do navegador (Android/Chrome e alguns iOS)
                { name: 'theme-color', content: '#ff9933' }
            ],
            link: [
                // (opcional) ícone para “Adicionar à Tela Inicial”
                // { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }
            ],
            script: [
                // {
                //     textContent: `
                //     const kompraiOpts = {
                //         projectId: 'seu-id',
                //         position: 'bottom-right',
                //         buttonText: 'Kompr.ai'
                //     };
                //     // load kompr.ai agent
                //     (function load() { const s = document.createElement('script'); s.src = 'http://localhost:3000/plugins/agent.js'; s.async = true; s.onload = function () { window.PlugChatVue.init(kompraiOpts); }; document.head.appendChild(s); })();`
                // }
            ]
        }
    },

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