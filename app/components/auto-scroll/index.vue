<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
let observer: MutationObserver | null = null

const scrollToBottom = () => {
  if (containerRef.value) {
    // window.document.body.scrollTo({top: containerRef.value.scrollHeight});
    // window.document.body.scrollTop = containerRef.value.scrollHeight;

    // console.log(window.document.body.scrollTop, containerRef.value.scrollHeight);

      const el = document.getElementById('auto-scroll-handler') //document.scrollingElement || document.documentElement
      el?.scrollTo({ top: containerRef.value.scrollHeight, behavior: 'smooth' })
      
      const el2 = document.scrollingElement || document.documentElement
      el2?.scrollTo({ top: containerRef.value.scrollHeight, behavior: 'smooth' })
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
  <div ref="containerRef">
    <slot />
  </div>
</template>
