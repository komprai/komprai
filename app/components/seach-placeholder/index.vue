<template>
    
    <Skeleton class="h-[15px] w-1/2 flex-1" v-if="type == 'search'" />

    <div class="flex gap-4 px-2 mt-8"  v-if="type == 'search'">
        <div class="h-[100%] w-[100%]">
            <Skeleton class="h-[10px] w-[50%] mb-2" />
            <Skeleton class="h-[150px] lg:h-[350px] w-[100%]" />
            <div class="flex gap-2 mt-2">
                <Skeleton class="h-[35px] w-[35px]" />
                <Skeleton class="h-[35px] flex-1" />
                <Skeleton class="h-[35px] w-[35px]" />
            </div>
        </div>
        <div class="h-[100%] w-[100%] lg:block">
            <Skeleton class="h-[10px] w-[50%] mb-2" />
            <Skeleton class="h-[150px] lg:h-[350px] w-[100%]" />
            <div class="flex gap-2 mt-2">
                <Skeleton class="h-[35px] w-[35px]" />
                <Skeleton class="h-[35px] flex-1" />
                <Skeleton class="h-[35px] w-[35px]" />
            </div>
        </div>
        <div class="h-[100%] w-[100%] hidden lg:block">
            <Skeleton class="h-[10px] w-[50%] mb-2" />
            <Skeleton class="h-[150px] lg:h-[350px] w-[100%]" />
            <div class="flex gap-2 mt-2">
                <Skeleton class="h-[35px] w-[35px]" />
                <Skeleton class="h-[35px] flex-1" />
                <Skeleton class="h-[35px] w-[35px]" />
            </div>
        </div>
        <div class="h-[100%] w-[100%] hidden lg:block">
            <Skeleton class="h-[10px] w-[50%] mb-2" />
            <Skeleton class="h-[150px] lg:h-[350px] w-[100%]" />
            <div class="flex gap-2 mt-2">
                <Skeleton class="h-[35px] w-[35px]" />
                <Skeleton class="h-[35px] flex-1" />
                <Skeleton class="h-[35px] w-[35px]" />
            </div>
        </div>
    </div>

    <div class="my-6" v-if="type == 'insights'">
        <Skeleton class="h-[10px] w-[50%] mb-2" />
        <Skeleton class="h-[10px] w-[70%] mb-2" />
        <Skeleton class="h-[10px] w-[80%] mb-2" />
        <br>
        <Skeleton class="h-[10px] w-[90%] mb-2" />
        <Skeleton class="h-[10px] w-[70%] mb-2" />
    </div>
</template>

<script lang="ts" setup>
const { type } = defineProps({
    type: String
})
</script>