<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div>Redirecionando para... {{ id }}</div>
  </div>
</template>

<script lang="ts" setup>
const $route = useRoute();
const id = ref<string>($route.params.id as string);
</script>