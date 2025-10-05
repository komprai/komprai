<template>
    <div>
        <div class="container hidden max-w-7xl pt-18 pb-36 mx-auto">

            <div class="my-2 px-2 text-xl">
                <q>Quero um iphone 17 pro max</q>
            </div>

            <Carousel class="relative px-2 w-full">
                <CarouselContent>
                    <CarouselItem class="basis-1/2 lg:basis-1/4">
                        <small class="text-muted-foreground">Patrocinado &middot; vendido por Magalu</small>
                        <img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt="">
                        <div class="flex gap-2 my-2">
                            <Button variant="secondary">x</Button>
                            <Button class="flex-1">Comprar</Button>
                            <Button variant="destructive">x</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem class="basis-1/2 lg:basis-1/4">
                        <small class="text-muted-foreground">vendido por Magalu</small>
                        <img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt="">
                        <div class="flex gap-2 my-2">
                            <Button variant="secondary">x</Button>
                            <Button class="flex-1">Comprar</Button>
                            <Button variant="destructive">x</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem class="basis-1/2 lg:basis-1/4">
                        <small class="text-muted-foreground">vendido por Magalu</small>
                        <img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt="">
                        <div class="flex gap-2 my-2">
                            <Button variant="secondary">x</Button>
                            <Button class="flex-1">Comprar</Button>
                            <Button variant="destructive">x</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem class="basis-1/2 lg:basis-1/4">
                        <small class="text-muted-foreground">vendido por Magalu</small>
                        <img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt="">
                        <div class="flex gap-2 my-2">
                            <Button variant="secondary">x</Button>
                            <Button class="flex-1">Comprar</Button>
                            <Button variant="destructive">x</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem class="basis-1/2 lg:basis-1/4">
                        <small class="text-muted-foreground">vendido por Magalu</small>
                        <img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt="">
                        <div class="flex gap-2 my-2">
                            <Button variant="secondary">x</Button>
                            <Button class="flex-1">Comprar</Button>
                            <Button variant="destructive">x</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem class="basis-1/2 lg:basis-1/4">
                        <small class="text-muted-foreground">vendido por Magalu</small>
                        <img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt="">
                        <div class="flex gap-2 my-2">
                            <Button variant="secondary">x</Button>
                            <Button class="flex-1">Comprar</Button>
                            <Button variant="destructive">x</Button>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div class="my-2 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi maxime libero impedit porro? Veritatis numquam pariatur amet inventore facilis repellat praesentium quidem iusto suscipit, quibusdam, explicabo consectetur. Sed, labore.</div>
            <div class="my-2 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi maxime libero impedit porro? Veritatis numquam pariatur amet inventore facilis repellat praesentium quidem iusto suscipit, quibusdam, explicabo consectetur. Sed, labore.</div>

            <Pagination class="" v-slot="{ page }" :items-per-page="10" :total="30" :default-page="2">
                <PaginationContent v-slot="{ items }">
                    <PaginationPrevious />

                    <template v-for="(item, index) in items" :key="index">
                        <PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page">
                            {{ item.value }}
                        </PaginationItem>
                    </template>

                    <PaginationEllipsis :index="4" />

                    <PaginationNext />
                </PaginationContent>
            </Pagination>

            <div class="my-2 px-2 text-xl">
                <q>Quero um iphone 17 pro max</q>
            </div>

            <div class="w-full">
                <BalanceSlider :right-color="rightColor" :left-color="leftColor" left-content="BOM" right-content="RUIM" :indicator-color="indicatorColor" />
            </div>

            <div class="my-2 px-2 text-xl">
                <q>Quero um iphone 17 pro max</q>
            </div>

            <div class="flex gap-4 px-2 mt-8">
                <div class="h-[100%] w-[100%]">
                    <Skeleton class="h-[10px] w-[50%] mb-2" />
                    <Skeleton class="h-[350px] w-[100%]" />
                    <div class="flex gap-2 mt-2">
                        <Skeleton class="h-[35px] w-[35px]" />
                        <Skeleton class="h-[35px] flex-1" />
                        <Skeleton class="h-[35px] w-[35px]" />
                    </div>
                </div>
                <div class="h-[100%] w-[100%]">
                    <Skeleton class="h-[10px] w-[50%] mb-2" />
                    <Skeleton class="h-[350px] w-[100%]" />
                    <div class="flex gap-2 mt-2">
                        <Skeleton class="h-[35px] w-[35px]" />
                        <Skeleton class="h-[35px] flex-1" />
                        <Skeleton class="h-[35px] w-[35px]" />
                    </div>
                </div>
                <div class="h-[100%] w-[100%]">
                    <Skeleton class="h-[10px] w-[50%] mb-2" />
                    <Skeleton class="h-[350px] w-[100%]" />
                    <div class="flex gap-2 mt-2">
                        <Skeleton class="h-[35px] w-[35px]" />
                        <Skeleton class="h-[35px] flex-1" />
                        <Skeleton class="h-[35px] w-[35px]" />
                    </div>
                </div>
                <div class="h-[100%] w-[100%]">
                    <Skeleton class="h-[10px] w-[50%] mb-2" />
                    <Skeleton class="h-[350px] w-[100%]" />
                    <div class="flex gap-2 mt-2">
                        <Skeleton class="h-[35px] w-[35px]" />
                        <Skeleton class="h-[35px] flex-1" />
                        <Skeleton class="h-[35px] w-[35px]" />
                    </div>
                </div>
            </div>

            <div class="my-6">
                <Skeleton class="h-[10px] w-[50%] mb-2" />
                <Skeleton class="h-[10px] w-[70%] mb-2" />
                <Skeleton class="h-[10px] w-[80%] mb-2" />
                <br>
                <Skeleton class="h-[10px] w-[90%] mb-2" />
                <Skeleton class="h-[10px] w-[70%] mb-2" />
            </div>

            <div class="my-2 px-2 text-xl">
                <q>Quero um iphone 17 pro max</q>
            </div>

            <div class="w-full">
                <BalanceSlider :right-color="rightColor" :left-color="leftColor" left-content="BOM" right-content="RUIM" :indicator-color="indicatorColor" />
            </div>

            <ClientOnly>
                <AnimatedTestimonials :testimonials="testimonials" />
            </ClientOnly>
        </div>
        <Search></Search>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useColorMode, useCycleList } from '@vueuse/core'

const isDark = computed(() => useColorMode().value == "dark");
const rightColor = computed(() => (isDark.value ? "#ff0000" : "#ff0000"));
const leftColor = computed(() => (isDark.value ? "#00ff00" : "#00ff00"));
const indicatorColor = computed(() => (isDark.value ? "#FFFFFF" : "#000000"));

useHead({ title: "Komprai" });

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