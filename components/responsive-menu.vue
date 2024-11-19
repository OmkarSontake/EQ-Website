<template>
    <div class="w-full h-screen lg:hidden fixed top-0 bg-[#dfd6ba] text-black left-0 z-40">
        <div class="h-full w-full relative">

            <ul class="flex flex-col gap-y-3 text-2xl font-semibold px-4 pt-7">
                <li>
                    <NuxtLink to="/">HOME</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">ABOUT EQ</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">PRODUCTS</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">CONTACT US</NuxtLink>
                </li>

                <li>
                    <NuxtLink class="flex items-center gap-x-1" to="/">
                        SIGN IN
                        <ChevronDown class="h-8 w-8"></ChevronDown>
                    </NuxtLink>
                </li>
            </ul>

            <div class="absolute top-5 right-5 opacity-50">
                <X class="h-8 w-8" @click="$emit('close')" />
            </div>

            <div class="absolute items-center bottom-5 w-full justify-between right-0 gap-x-4 flex px-4 pb-4">
                <div>
                    <Bell class="h-8 w-8"></Bell>
                </div>
                <div class="gap-x-4 flex w-fit">
                    <SmartButton v-wave class="text-[#dfd6ba] bg-black font-semibold py-2 px-4 rounded-sm">
                        Buy Now
                    </SmartButton>
                    <SmartButton class="py-2 px-4 rounded-sm">
                        <ShoppingCart class="h-8 w-8 "></ShoppingCart>
                    </SmartButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { X, Bell, ChevronDown, ShoppingCart } from "lucide-vue-next";
</script>
