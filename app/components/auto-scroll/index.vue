<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
let observer: MutationObserver | null = null

const scrollToBottom = () => {
  if (containerRef.value) {
    console.log(containerRef.value.scrollTop, containerRef.value.scrollHeight);
    
    containerRef.value.scrollTop = containerRef.value.scrollHeight
    if((containerRef.value.scrollHeight - containerRef.value.scrollTop) < 400) {
    }
  }
}

onMounted(() => {
  const el = containerRef.value
  if (!el) return

  // Cria observador de mudanças de tamanho no elemento
  observer = new MutationObserver(async () => {
    // Espera o Vue renderizar novos elementos
    await nextTick()
    scrollToBottom()
  })

  observer.observe(el, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div ref="containerRef" class="h-[85vh] lg:h-[90vh] w-full overflow-y-auto scroll-smooth">
    <!-- Conteúdo dinâmico -->
    <slot />
  </div>
</template>
