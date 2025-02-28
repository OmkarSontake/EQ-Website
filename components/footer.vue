<template>
    <div class="w-full bg-neutral-900 text-white">
        <div class="mx-auto max-w-[85rem] px-4 sm:px-6 space-y-16 lg:px-8 py-5 pt-12 sm:py-10 lg:py-14">
            <div class="w-full bg-orange-500 px-4 lg:px-8 py-16 rounded-md grid grid-cols-2">
                <p class="text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Ready to Master Market Equilibrium?</p>
                <div class="flex justify-end items-center">
                    <button
                        class="bg-slate-900 lg:text-lg rounded-sm min-w-fit font-semibold lg:p-3 p-2.5 px-4 lg:px-6 text-white">
                        Start Free Trial
                    </button>
                </div>
            </div>

            <div class="w-full grid lg:grid-cols-3 gap-x-10">
                <div class="space-y-7">
                    <img src="public\logo.png" class=" h-7" alt="EQ Analysis Logo">
                    <p>Daily market intelligence since 2003, providing professional traders with equilibrium analysis
                        for S&P futures, commodities, and crypto markets.</p>
                    <a href="mailto:support@eqanalysis.com" class="block">support@eqanalysis.com</a>
                    <div class="flex space-x-4 items-center mt-10">
                        <button class="hover:bg-orange-400 rounded-full transition-all duration-700 p-2">
                            <img src="@/assets/icons/instagram.svg" class="h-5 w-5 rounded-full invert " alt="">
                        </button>
                        <button class="hover:bg-orange-400 rounded-full transition-all duration-700 p-2">
                            <img src="@/assets/icons/linkedin.svg" class="h-5 w-5 rounded-full invert" alt="">
                        </button>
                        <button class="hover:bg-orange-400 rounded-full transition-all duration-700 p-2">
                            <img src="@/assets/icons/facebook.svg" class="h-5 w-5 rounded-full invert" alt="">
                        </button>
                        <button class="hover:bg-orange-400 rounded-full transition-all duration-700 p-2">
                            <img src="@/assets/icons/twitter.svg" class="h-5 w-5 rounded-full invert" alt="">
                        </button>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 col-span-2 mt-10 lg:mt-0 space-y-10 lg:space-y-0">
                    <div class="space-y-5">
                        <h4 class="text-lg xl:text-xl font-semibold">Trading Resources</h4>
                        <div class="flex flex-col gap-y-5">
                            <NuxtLink class="text-lg opacity-75" to="/">Home</NuxtLink>
                            <NuxtLink class="text-lg opacity-75" to="/about-us">About EQ</NuxtLink>
                            <NuxtLink class="text-lg opacity-75" to="/services">Products</NuxtLink>
                            <NuxtLink class="text-lg opacity-75" to="/pricing">Plans</NuxtLink>
                            <NuxtLink class="text-lg opacity-75" to="/contact-us">Contact</NuxtLink>
                        </div>
                    </div>

                    <div class="space-y-5">
                        <h4 class="text-lg xl:text-xl font-semibold">Account</h4>
                        <div class="flex flex-col gap-y-5">
                            <NuxtLink class="text-lg opacity-75" to="/login">Sign In</NuxtLink>
                            <NuxtLink class="text-lg opacity-75" to="/register">Sign Up</NuxtLink>
                        </div>
                    </div>

                    <div class="space-y-5">
                        <h4 class="text-lg xl:text-xl font-semibold">Legal</h4>
                        <div class="flex flex-col gap-y-5">
                            <NuxtLink class="text-lg opacity-75" to="/">Terms of Service</NuxtLink>
                            <NuxtLink class="text-lg opacity-75" to="/">Privacy Policy</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center text-lg ">
                © Copyright 2025 EQ Analysis. All Rights Reserved.
            </div>
        </div>
    </div>
</template>