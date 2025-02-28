<template class="text-black">
    <div class="sticky top-0 w-full py-8 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-[85rem] grid grid-cols-2 lg:grid-cols-3">
            <img src="public\logo.png" class=" h-7" alt="Hello There">
            <div class="w-full hidden lg:flex items-center justify-center z-10 gap-x-10 text-lg font-medium">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about-us">About</NuxtLink>
                <NuxtLink to="/services">Services</NuxtLink>
                <NuxtLink to="/">Blogs</NuxtLink>
                <NuxtLink to="/contact-us">Contact</NuxtLink>
            </div>

            <div class="hidden lg:flex items-center justify-end text-lg font-medium gap-x-4">
                <NuxtLink to="/login">
                    <button>Login</button>
                </NuxtLink>

                <NuxtLink to="/register">
                    <button
                        class="py-2.5 px-5 bg-orange-400 hover:bg-white border border-orange-400 transition-all duration-300 rounded-sm">Sign
                        Up</button>
                </NuxtLink>
            </div>

            <div class="w-full flex justify-end items-center gap-x-4">
                <div class="gap-x-4 hidden sm:flex lg:hidden items-center">
                    <button>Login</button>
                    <button
                        class="py-2.5 px-5 bg-orange-400 hover:bg-white border border-orange-400 transition-all duration-300 rounded-sm">Sign
                        Up</button>
                </div>
                <img src="@\assets\icons\menu.svg" class="h-6 w-6 lg:hidden" alt="menu">
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

</script>