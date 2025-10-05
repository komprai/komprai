<template>
  <Search :is-open="history.length != 0" :search-id="searchId" :chat-history="history"></Search>
</template>

<script lang="ts" setup>
import { v7 } from 'uuid';

const $route = useRoute();

const searchId = ref<string>($route.params.searchId as string);

const history = ref([
  {
    id: v7(),
    searchId,
    request: {
      prompt: "Historico",
      loading: {
        prompt: false,
        search: false,
        insights: false
      }
    },
    prompt: {
      done: true,
      response: {}
    },
    search: {
      done: true,
      response: {}
    },
    insights: {
      done: true,
      response: {}
    }
  }
])
</script>