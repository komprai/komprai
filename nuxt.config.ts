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

    modules: ['shadcn-nuxt', '@nuxt/image', '@nuxt/icon'],


    shadcn: {
        prefix: '',
        componentDir: './app/components/ui'
    },
})