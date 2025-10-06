export async function useAuthSession() {

  const { $auth } = useNuxtApp()
  
  const ssrCookies = process.server ? useRequestHeaders(['cookie']) : undefined;
  
  return $auth.useSession((url: string, opts: any) =>
    useFetch(url, { ...opts, credentials: 'include', headers: ssrCookies })
  )
  
}
