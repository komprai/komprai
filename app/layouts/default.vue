<template>
    <div class="fixed top-0 z-[300] w-full bg-white dark:bg-black">
        <div class="flex justify-between gap-4 p-4">
            <div>
                <div class="flex h-10 items-center justify-center">
                    <NuxtLink to="/"><SparklesText class="text-2xl font-bold" text="Komprai" :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="4" /></NuxtLink>
                </div>
            </div>
            <div class="flex-1 hidden lg:block">
                <Header></Header>
            </div>
            <div class="flex items-center">
                <button @click="next()">
                    <i v-if="state === 'dark'" i-carbon-moon inline-block align-middle class="align-middle" />
                    <i v-if="state === 'light'" i-carbon-sun inline-block align-middle class="align-middle" />
                    <i v-if="state === 'contrast'" i-carbon-contrast inline-block align-middle class="align-middle" />
                    <i v-if="state === 'auto'" i-carbon-laptop inline-block align-middle class="align-middle" />
                    <span class="ml-2 capitalize">{{ state }}</span>
                </button>
            </div>
        </div>
    </div>
    <div><slot></slot></div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import Header from "@/components/layout/header.vue"
import { useColorMode, useCycleList } from '@vueuse/core'

useHead({ title: "Komprai" });

const mode = useColorMode({
    emitAuto: true,
    modes: {
        contrast: 'dark contrast'
    },
})

const { state, next } = useCycleList(['dark', 'light', 'contrast', 'auto'] as const, { initialValue: mode })

watchEffect(() => mode.value = state.value);
</script>