<template>

    <FluidCursor v-if="!isSearchOpened"></FluidCursor>

    <AutoScroll>
        <div class="container px-2 md:px-0 max-w-4xl mt-22 xl:mt-4 pb-36 mx-auto">
            <!-- <prse><code>{{ JSON.stringify({ chatHistory, searchId: currentSearchId }, null, 4) }}</code></pre> -->
            <SearchResponse v-for="history in chatHistory" :history="history" @done="handleResponse"></SearchResponse>
        </div>
    </AutoScroll>

    <div class="input-wrapper fixed p-2 mb-4 z-[22]" :class="{ 'open': isSearchOpened }">
        <ClientOnly>
            <div :class="{ 'mb-8': !isSearchOpened }">
                <MorphingText v-if="!isSearchOpened" :texts="[
                    t('komprai'),
                    t('search.hero.find'),
                    t('search.hero.compare'),
                    t('search.hero.buy'),
                ]" />
            </div>
            <form action="javascript:void" @submit="search">
                <div className="relative mx-auto h-[50px] w-[100%] lg:w-[80%] overflow-hidden">
                    <GlowBorder :color="['#A07CFE', '#FE8FB5', '#FFBE7B']" :border-radius="10" />
                    <div class="h-full bg-white dark:bg-black w-full flex gap-4 items-center justify-center px-1.5" style="border: 2px solid #ccc; border-radius: 10px;">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger as-child>
                                    <Button variant="outline">
                                        <Icon name="lucide:plus"></Icon>
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Adicionar mais informações</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Incluir link</DropdownMenuItem>
                                    <DropdownMenuItem>Incluir fotos</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                        <div class="flex-1"><input ref="inputRef" v-model="currentPrompt" :placeholder="t('search.input.placeholder')" class="h-full border-0 outline-0 w-full" type="text"></input></div>
                        <div>
                            <Button type="submit" :disabled="currentPrompt.length < 3"><span class="hidden lg:inline">{{ t('search.actions.search') }}</span>
                                <Icon name="lucide:sparkles"></Icon>
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </ClientOnly>
        <!-- <div class="flex min-h-64 items-center justify-center">
            <p class="whitespace-pre-wrap text-xl font-medium tracking-tighter text-black dark:text-white">
                +<NumberTicker :value="100" /> Produtos
            </p>
            <p class="whitespace-pre-wrap text-xl font-medium tracking-tighter text-black dark:text-white">
                +<NumberTicker :value="100" /> Produtos
            </p>
            <p class="whitespace-pre-wrap text-xl font-medium tracking-tighter text-black dark:text-white">
                +<NumberTicker :value="100" /> Produtos
            </p>
        </div> -->
        <div class="text-center mt-4">
            <small class="font-xs opacity-[0.6] text-muted-foreground">&copy; Copyright &middot; Komprai, LLC.</small>
        </div>
    </div>
</template>

<style>
.input-wrapper {
    left: 50%;
    width: 90%;
    max-width: 900px;
    bottom: 40%;
    transform: translateX(-50%);
    transition: all .5s;

    &.open {
        bottom: 0;
        width: 100%;
        max-width: 100%;
    }
}
</style>

<script setup lang="ts">
import { v7 } from "uuid";
const { t, locale } = useI18n();

const { isOpen, searchId } = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    searchId: {
        type: String,
        default: null
    }
})

const chatHistory = ref<any[]>([]);

const inputRef = ref<HTMLInputElement | null>(null);
const currentPrompt = ref("");
const isSearchOpened = ref(false);
const currentSearchId = ref(searchId || v7())

useHead({ title: "Komprai" });

watch(chatHistory, (nv) => {
    if (nv.length > 0) {
        isSearchOpened.value = true;
    }
})

async function handleResponse(history: any) {
    console.log(history);
}

async function search() {
    const searchId = currentSearchId;

    isSearchOpened.value = true;

    window.history.pushState({}, '', `/${locale.value == 'en' ? '' : locale.value + '/'}s/${searchId.value}`);

    chatHistory.value.push({
        id: v7(),
        searchId,
        request: {
            prompt: currentPrompt.value,
            loading: {
                prompt: true,
                search: false,
                insights: false
            }
        },
        prompt: {
            done: false,
            response: null
        },
        search: {
            done: false,
            response: null
        },
        insights: {
            done: false,
            response: null
        }
    })

    currentPrompt.value = '';

    console.log(inputRef.value);

    if (inputRef.value) {
        inputRef.value.blur()
    }
}
</script>