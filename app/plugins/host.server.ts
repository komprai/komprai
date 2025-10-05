import { getHeader } from 'h3'

export default defineNuxtPlugin((nuxtApp) => {
  const event = nuxtApp.ssrContext?.event
  // prioriza proxy, depois host direto; pega só o primeiro se vier "a,b"
  const raw =
    (getHeader(event!, 'x-forwarded-host') || getHeader(event!, 'host') || '') as string
  const host = raw.split(',')[0]?.trim()

  // grava em um state SSR -> vira parte do payload e hidrata no client
  const s = useState<string>('host', () => host)
  s.value = host
})
