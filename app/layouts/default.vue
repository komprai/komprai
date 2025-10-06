<template>
    <div class="fixed top-0 z-[300] w-full bg-white dark:bg-zinc-950 xl:bg-transparent xl:dark:bg-transparent border-b-1 md:border-b-0">
        <div class="flex justify-between gap-4 p-4">
            <div>
                <div class="flex h-10 md:gap-2 items-start md:items-center justify-center flex-col md:flex-row">
                    <a href="/">
                        <!-- <SparklesText class="text-xl font-bold" text="Kompr.ai" :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="4" />
                        <Badge>preview</Badge> -->
                        <Badge>{{ host }}</Badge>
                    </a>
                    <a :href="`https://chat.komprai.com/?ref=${host}`"><small class="text-muted-foreground">by Komprai</small></a>
                </div>
            </div>
            <div class="flex items-center gap-2">
                
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline">
                            <Icon name="lucide:moon"></Icon>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem @click="switchMode('dark')">dark</DropdownMenuItem>
                        <DropdownMenuItem @click="switchMode('light')">light</DropdownMenuItem>
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

                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline">
                            <Icon name="lucide:user"></Icon>
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

import { useColorMode, useCycleList, type BasicColorMode } from '@vueuse/core'

const host = useState<string>('host');

useHead({ title: "Kompr.ai" });

const currentMode = useColorMode({
    emitAuto: true,
    modes: {
        contrast: 'dark contrast'
    },
});

function switchMode(mode: BasicColorMode) {
    currentMode.value = mode;
}

// const { state, next } = useCycleList(['dark', 'light', 'auto'] as const, { initialValue: mode })

// watchEffect(() => );

const { data, error, pending } = await useFetch('https://api.example.com/posts', {
    query: { host: host.value }, 
    key: 'posts-home'
})


</script>