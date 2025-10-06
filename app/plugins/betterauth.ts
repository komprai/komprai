import { createAuthClient } from 'better-auth/vue';

export default defineNuxtPlugin(() => {
  const {
    public: { NUXT_PUBLIC_BACKEND_BASE },
  } = useRuntimeConfig();

  const auth = createAuthClient({
    baseURL: NUXT_PUBLIC_BACKEND_BASE as string,         // ← pega do runtime config
    basePath: '/auth',                       // 👈 sem /api

    fetchOptions: { credentials: 'include' } // cookies cross-site
  });

  // disponibiliza como this.$auth / useNuxtApp().$auth
  return {
    provide: { auth },
  };
});
