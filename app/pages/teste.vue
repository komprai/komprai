<script setup lang="ts">
const { $auth } = useNuxtApp();

const { data: session, refresh } = await useAuthSession()

async function testUrl() {
  $fetch('http://localhost:4000/me', { credentials: 'include' })
}

async function login() {
  await $auth.signIn.email({ email: 'inonjs@gmail.com', password: '12345678' });
  await refresh();
}

async function logout() {
  await $auth.signOut();
  await refresh();
}
</script>

<template>
  <div class="pt-40">
    <!-- <pre>{{ session }}</pre>a -->
    <button v-if="!session" @click="login">Entrar</button>
    <button v-else @click="logout">Sair</button>
    <button @click="testUrl">testUrl</button>
  </div>
</template>
