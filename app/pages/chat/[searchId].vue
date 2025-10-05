<template>
  <Search :is-open="true" :search-id="searchId"></Search>
</template>

<script lang="ts" setup>

const $route = useRoute();

const searchId = ref<string>($route.params.searchId as string);
</script>