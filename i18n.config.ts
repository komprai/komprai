import { createI18n } from 'vue-i18n'

export default defineI18nConfig(() => {
    return createI18n({
        legacy: false,
        locale: 'br',
        fallbackLocale: 'en',
        messages: {}
    })
})
