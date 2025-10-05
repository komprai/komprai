<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div>Redirecionando para... {{ url }}</div>
    <div>Redirecionando para... {{ storeId }}</div>
  </div>
</template>

<script lang="ts" setup>
const $route = useRoute();
const url = ref<string>($route.query.url as string);
const storeId = ref<string>($route.params.storeId as string);
</script>