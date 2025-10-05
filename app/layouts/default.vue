<template>
    <div class="fixed top-0 z-[300] w-full bg-white dark:bg-black xl:bg-transparent">
        <div class="flex justify-between gap-4 p-4">
            <div>
                <div class="flex h-10 gap-2 items-center justify-center">
                    <a href="/">
                        <SparklesText class="text-xl font-bold" text="Kompr.ai" :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="4" />
                    </a>
                    <Badge>Preview</Badge>
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

                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline">
                            <Icon name="lucide:moon"></Icon>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>Adicionar mais informações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Incluir link</DropdownMenuItem>
                        <DropdownMenuItem>Incluir fotos</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline">
                            <Icon name="lucide:globe"></Icon>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>Adicionar mais informações</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <NuxtLink :to="$switchLocalePath('en')">English</NuxtLink>
                        <NuxtLink :to="$switchLocalePath('br')">Portuguese BR</NuxtLink>
                    </DropdownMenuContent>
                </DropdownMenu>
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

useHead({ title: "Kompr.ai" });

const mode = useColorMode({
    emitAuto: true,
    modes: {
        contrast: 'dark contrast'
    },
})

const { state, next } = useCycleList(['dark', 'light', 'contrast', 'auto'] as const, { initialValue: mode })

watchEffect(() => mode.value = state.value);
</script>