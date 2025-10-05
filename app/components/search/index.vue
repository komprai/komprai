<template>

    
    <div class="pt-42">
        <FluidCursor v-if="!isSearchOpened"></FluidCursor>

        <!-- <pre><code>{{ JSON.stringify({chatHistory, searchId: currentSearchId}, null, 4) }}</code></pre> -->
    </div>

    <div class="input-wrapper fixed p-2 mb-4 z-[22]" :class="{ 'open': isSearchOpened }">
        <ClientOnly>
            <div :class="{ 'mb-8': !isSearchOpened }">
                <MorphingText v-if="!isSearchOpened" :texts="['Encontre', 'Compare', 'Compre']" />
            </div>
            <form action="javascript:void()" @submit="search">
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
                        <div class="flex-1"><input ref="inputRef" v-model="currentPrompt" placeholder="Digite o nome do produto que procura..." class="h-full border-0 outline-0 w-full" type="text"></input></div>
                        <div>
                            <Button type="submit" :disabled="currentPrompt.length < 3"><span class="hidden lg:inline">Pesquisar</span> <Icon name="lucide:sparkles"></Icon></Button>
                        </div>
                    </div>
                </div>
            </form>
        </ClientOnly>
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
    transition: all .3s;

    &.open {
        bottom: 0;
        width: 100%;
        max-width: 100%;
    }
}
</style>

<script setup lang="ts">
import { v7 } from "uuid";

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

const inputRef = ref<HTMLInputElement | null>(null);
const currentPrompt = ref("");
const isSearchOpened = ref(isOpen);
const currentSearchId = ref(searchId || v7())

useHead({ title: "Komprai" });

const chatHistory = ref<any[]>([]);

async function search() {
    const searchId = currentSearchId;

    isSearchOpened.value = true;

    window.history.pushState({}, '', `/s/${searchId.value}`);

    chatHistory.value.push({
        id: v7(),
        searchId,
        prompt: currentPrompt.value
    })

    currentPrompt.value = '';
    console.log(inputRef.value);
    
    if(inputRef.value) {
        inputRef.value.blur()
    }
}
</script>