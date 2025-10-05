<template>
    <div>
        <div class="flex w-full justify-end mb-4">
            <div class="bg-gray-200 rounded-md p-4">
                {{ history.request.prompt }}
            </div>
        </div>

        <RadiantText v-if="history.request.loading.prompt" class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" :duration="5">
            <span class="text-xl font-bold">✨ {{ t('search.request.thinking') }}</span>
        </RadiantText>

        <SeachPlaceholder type="search" v-if="history.request.loading.search"></SeachPlaceholder>

        <div v-if="history.search.done">

            <div class="mb-2">
                <span>Selecionei algumas ofertas que você pode se interessar:</span>
            </div>

            <Carousel class="relative w-full">
                <CarouselContent>
                    <CarouselItem class="basis-1/2 xs:lg:basis-1/2 lg:basis-1/3">
                        <small class="text-muted-foreground">{{ t('search.response.sponsored') }} &middot; vendido por Magalu</small>
                        <Drawer>
                            <DrawerTrigger><img src="https://s3-sa-east-1.amazonaws.com/images.anymarket.com.br/259051458./C54969EEF12489FF08FDE7BCC02F65C1/original_image.jpg" class="w-full p-1 border-1 rounded-sm" alt=""></DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <Button>Submit</Button>
                                    <!-- <DrawerClose>
                        <Button variant="outline">
                            Cancel
                        </Button>
                    </DrawerClose> -->
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                        <div>R$ 2.000,00</div>
                        <div class="flex gap-2 my-2">
                            <Button variant="outline" class="flex-1">
                                Comprar <Icon name="lucide:external-link"></Icon>
                            </Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem class="basis-1/2 xs:lg:basis-1/2 lg:basis-1/3" v-for="i in 5">
                        <small class="text-muted-foreground">vendido por Magalu</small>
                        <Drawer>
                            <DrawerTrigger><img src="https://s3-sa-east-1.amazonaws.com/images.anymarket.com.br/259051458./0FCAE2E00E70B1260F4F2DCBBDE3B9DD/original_image.jpg" class="w-full p-1 border-1 rounded-sm" alt=""></DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <Button>Submit</Button>
                                    <!-- <DrawerClose>
                        <Button variant="outline">
                            Cancel
                        </Button>
                    </DrawerClose> -->
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                        <div>R$ 2.000,00</div>
                        <div class="flex gap-2 my-2">
                            <Button variant="outline" class="flex-1">
                                Comprar <Icon name="lucide:external-link"></Icon>
                            </Button>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious class="hidden lg:inline-flex" />
                <CarouselNext class="hidden lg:inline-flex" />
            </Carousel>

            <Button variant="secondary" class="mt-2 w-full">
                Ver todas 20343 para iPhone 17 <Icon name="lucide:search"></Icon>
            </Button>

        </div>

        <!-- <ClientOnly>
            <AnimatedTestimonials v-if="history.search.done" :testimonials="testimonials" />
        </ClientOnly> -->

        <SeachPlaceholder type="insights" v-if="history.request.loading.insights"></SeachPlaceholder>

        <div v-if="history.insights.done" class="my-4">

            <div class="mb-4">
                <small class="text-muted-foreground">
                    <strong>{{ t('search.response.aiDisclaimer.warning') }}:</strong> {{ t('search.response.aiDisclaimer.description') }}
                </small>
            </div>

            <span class="text-xl">Informações sobre o iPhone 17</span>

            <div class="my-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi maxime libero impedit porro? Veritatis numquam pariatur amet inventore facilis repellat praesentium quidem iusto suscipit, quibusdam, explicabo consectetur. Sed, labore.</div>
            <div class="my-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi maxime libero impedit porro? Veritatis numquam pariatur amet inventore facilis repellat praesentium quidem iusto suscipit, quibusdam, explicabo consectetur. Sed, labore.</div>

            <div class="">
                <p class="text-zinc-700 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
                    O novo <strong>iPhone 16 Pro</strong> redefine o conceito de desempenho e sofisticação. Construído em titânio de grau aeroespacial, ele combina leveza e resistência com um design impecável.<br><br>
                    Seu <strong>chip A18 Pro</strong> oferece potência absurda e eficiência energética de última geração, enquanto a <strong>tela Super Retina XDR de 6,3 polegadas</strong> com <strong>ProMotion 120 Hz</strong> garante fluidez e cores impressionantes.<br><br>
                    A <strong>câmera tripla de 48 MP</strong> com lente Tetraprism leva a fotografia profissional ao seu bolso — capturando cada detalhe com nitidez, mesmo em baixa luz.<br><br>
                    Com <strong>bateria de longa duração</strong>, <strong>5G ultrarrápido</strong> e uma nova geração de recursos de IA, o iPhone 16 Pro entrega tudo o que você precisa — com a elegância e o desempenho que só a Apple consegue oferecer.
                </p>
            </div>

            <div class="w-full mt-4">
                <BalanceSlider :right-color="'#ff0000'" :left-color="'#00ff00'" left-content="BOM" right-content="RUIM" :indicator-color="'#0000ff'" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const { t, locale } = useI18n();

const { history } = defineProps({
    history: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['done']);

async function requestInsights() {
    history.request.loading.insights = true;
    return new Promise(function (resolve) {
        setTimeout(() => {
            if (history) {
                history.request.loading.insights = false;
                history.insights = {
                    done: true,
                    response: { ok: "insights" }
                };
                resolve(true);
            }
        }, 1000)
    })
}

async function requestProductSearch() {
    history.request.loading.search = true;

    return new Promise(function (resolve) {
        setTimeout(() => {
            if (history) {
                history.request.loading.search = false;
                history.search = {
                    done: true,
                    response: { ok: "search" }
                };
                resolve(true);
            }
        }, 1000)
    })
}

async function requestPrompt() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            if (history) {
                history.request.loading.prompt = false;
                history.prompt = {
                    done: true,
                    response: { ok: "prompt" }
                };
                resolve(true);
            }
        }, 1000)
    })
}

onMounted(async () => {
    await requestPrompt()
    await requestProductSearch()
    await requestInsights()
});


const testimonials = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        image:
            "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        image:
            "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        image:
            "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
</script>