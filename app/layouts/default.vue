<template>
    <div class="fixed top-0 z-[300] w-full bg-white dark:bg-black xl:bg-transparent">
        <div class="flex justify-between gap-4 p-4">
            <div>
                <div class="flex h-10 items-center justify-center">
                    <NuxtLink to="/">
                        <SparklesText class="text-xl font-bold" text="Komprai" :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="4" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button @click="next()">
                    <i v-if="state === 'dark'" i-carbon-moon inline-block align-middle class="align-middle" />
                    <i v-if="state === 'light'" i-carbon-sun inline-block align-middle class="align-middle" />
                    <i v-if="state === 'contrast'" i-carbon-contrast inline-block align-middle class="align-middle" />
                    <i v-if="state === 'auto'" i-carbon-laptop inline-block align-middle class="align-middle" />
                    <span class="ml-2 capitalize">{{ state }}</span>
                </button>
                <span>&middot;</span>
                <NuxtLink :to="$switchLocalePath('br')">PT</NuxtLink>
                <span>&middot;</span>
                <NuxtLink :to="$switchLocalePath('en')">EN</NuxtLink>
            </div>
        </div>
    </div>
    <div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
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