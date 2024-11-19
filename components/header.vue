<template>
    <div class="w-full flex justify-between sticky top-0 items-center px-5 bg-[#2f2e2e] z-40 py-3">
        <div class="flex items-center gap-x-5">
            <img src="@/assets/logo.png" class="w-14" alt="logo eq-website">
            <div class="hidden lg:flex flex-col font-semibold font-mono">
                <p class="text-3xl"> EQ Analysis</p>
                <p class="text-base">"Understanding EQuilibrison is underatading risk.."</p>

            </div>
        </div>

        <div class=" hidden lg:flex items-center gap-x-2 text-lg">
            <div class="flex gap-x-5 items-center">
                <NuxtLink to="/">HOME</NuxtLink>
                <NuxtLink to="/">ABOUT EQ</NuxtLink>
                <NuxtLink to="/">PRODUCTS</NuxtLink>
                <NuxtLink to="/">CONTACT US</NuxtLink>
                <NuxtLink to="/">
                    <Bell class="h-8 w-8"></Bell>
                </NuxtLink>
                <NuxtLink to="/" class="flex items-center gap-x-1">
                    SIGN IN
                    <ChevronDown class="h-8 w-8"></ChevronDown>
                </NuxtLink>
            </div>

            <SmartButton v-wave class="bg-[#dfd6ba] text-black font-semibold py-2 px-4 rounded-sm">
                Buy Now
            </SmartButton>
            <SmartButton class="py-2 px-4 rounded-sm">
                <ShoppingCart class="h-8 w-8"></ShoppingCart>
            </SmartButton>
        </div>
        <div class="lg:hidden">
            <ResponsiveMenu v-if="menuState" @close="menuState = false"></ResponsiveMenu>
            <Menu v-else @click="menuState = true" class="h-8 w-8"></Menu>
        </div>
    </div>

</template>

<script setup>
import { ShoppingCart, Bell, ChevronDown, Menu } from 'lucide-vue-next'
const menuState = ref(false)
</script>


<style scopedr></style>