<template>
    <div class="h-60 sm:h-72 flex items-center justify-center text-center">
        <div class="space-y-8 flex flex-col items-center">
            <p class="capitalize text-4xl lg:text-5xl xl:text-6xl font-semibold">{{ route.name.replace(/-/g, ' ') }}</p>
            <p class="text-xl flex items-center gap-x-4 capitalize font-medium">

                <NuxtLink to="/">Home</NuxtLink>
                <span>&gt;</span>
                <NuxtLink :to="route.path" class="text-orange-400">{{ route.name.replace(/-/g, ' ') }}</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
</script>
