<template class="text-black">
    <div class="sticky top-0 w-full py-8 px-4 sm:px-6 lg:px-8 z-40"
        :class="{ 'bg-black backdrop-blur-md bg-opacity-30 rounded-md': isScrolledDown }">
        <div class="mx-auto max-w-[85rem] grid grid-cols-2 lg:grid-cols-3  gap-x-20">
            <div class="flex flex-col">
                <NuxtLink class="flex items-center gap-x-4" to="/">
                <img src="@/assets\logo.png" class=" h-14" alt="Hello There">
                <h2 class="font-bold text-xl lg:text-3xl">EQ Analysis</h2>
            </NuxtLink>
                <h3 class="text-lg">Understanding equilibrium is understanding risk..</h3>
            </div>
       
            <div ref="navLinks" 
                class="w-full hidden lg:flex items-center justify-center z-10 gap-x-10 text-lg font-medium">
                <NuxtLink to="/about-us">About</NuxtLink>
                <NuxtLink to="/services">Services</NuxtLink>
                <NuxtLink to="/pricing">Pricing</NuxtLink>
                <NuxtLink to="/contact-us">Contact</NuxtLink>
            </div>

            <div v-if="!token" class="hidden w-full lg:flex items-center justify-end text-lg font-medium gap-x-4">
                <NuxtLink to="/cart">
                    <img src="@/assets/icons/shopping-cart.svg" class="h-8 w-8" alt="">
                </NuxtLink>
                <NuxtLink to="/register">
                    <button>Login</button>
                </NuxtLink>

                <NuxtLink to="/register">
                    <button
                        class="py-2.5 px-5 bg-[#dfd6ba] hover:bg-white border border-[#dfd6ba] transition-all duration-300 rounded-sm">Sign
                        Up</button>
                </NuxtLink>
            </div>

            <div v-else class="hidden lg:flex w-full items-center justify-end text-lg font-medium gap-x-4">
                <NuxtLink to="/cart">
                    <img src="@/assets/icons/shopping-cart.svg" class="h-8 w-8" alt="">
                </NuxtLink>
                <NuxtLink to="/dashboard">
                    <button>Dashboard</button>
                </NuxtLink>
                <button @click="handleLogout"
                    class="py-2.5 px-5 bg-[#dfd6ba] hover:bg-white border border-orange-400 transition-all duration-300 rounded-sm">Log
                    Out</button>
            </div>

            <div class="w-full flex justify-end items-center gap-x-4">
                <div class="gap-x-4 hidden sm:flex lg:hidden items-center">
                    <NuxtLink to="/register">
                        <button>Login</button>
                    </NuxtLink>
                    <NuxtLink to="/register">
                        <button
                            class="py-2.5 px-5 bg-[#dfd6ba] hover:bg-white border border-orange-400 transition-all duration-300 rounded-sm">Sign
                            Up</button>
                    </NuxtLink>
                </div>
                <NuxtLink to="/cart">
                    <img src="@/assets/icons/shopping-cart.svg" class="h-8 w-8 lg:hidden" alt="">
                </NuxtLink>
                <img src="@\assets\icons\menu.svg" class="h-6 w-6 lg:hidden" alt="menu">
            </div>
        </div>

    </div>
</template>

<script setup>
const token = useState('token')
const user = useState('user')
const navLinks = ref()
const isScrolledDown = ref()
const router = useRouter()
const handleLogout = () => {
    token.value = null
    user.value = null
    router.push("/")
}


const handleScroll = () => {
    if (window.scrollY > 100) { // Change 100 to the scroll position you want to trigger the hide
        isScrolledDown.value = true;
    } else {
        isScrolledDown.value = false;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});


</script>