<template>
    <div class="w-full pb-20">
        <div class="h-60 lg:h-96 w-full hero-bg">

            <div class="w-full h-full  bg-[#2f2e2e] bg-opacity-50 py-10">
                <h2 class="text-center text-3xl lg:text-5xl font-bold text-white">Read the Minds of the Markets with</h2>
                <h2 class="text-center text-4xl lg:text-6xl font-bold text-[#dfd6ba] mt-10 uppercase">EQ Analysis</h2>
            </div>
        </div>
        <div class="flex flex-col gap-y-5 lg:grid grid-cols-8 gap-x-6 px-5 pt-16">
            <div
                class="border-black col-span-2 border-2 rounded-sm flex flex-col gap-y-2 lg:gap-y-4 text-center p-3 text-black text-xl lg:text-3xl font-medium bg-[#dfd6ba]">
                <p>Day-Traders</p>
                <p>Hedge Funds</p>
                <p>Portfolio Managers</p>
                <p>Institutional Trading Desks</p>
            </div>
            <div class="col-span-4">
                <div class="h-full w-full relative">
                    <img src="@/assets/hero-middle.png" class="w-full z-30 lg:absolute bottom-0" alt="">
                </div>
            </div>
            <div
                class="border-black col-span-2 border-2 rounded-sm flex flex-col gap-y-4 text-center p-3 text-black text-xl lg:text-3xl font-medium bg-[#dfd6ba]">
                <p>Equity Index Futures</p>
                <p>Commodity Futures</p>
                <p>Cryptocurrencies</p>
                <p>Interest Rate Futures</p>
            </div>
        </div>


        <div class="flex flex-col gap-y-3 lg:grid grid-cols-8 gap-x-6 px-5 pt-10">
            <div class="col-span-2 flex justify-center">
                <SmartButton v-wave class="text-[#dfd6ba] bg-black text-2xl lg:text-4xl rounded-sm uppercase font-semibold p-3">
                    Start <br> Free Trial
                </SmartButton>
            </div>
            <div class="col-span-4 text-center text-xl lg:text-4xl font-semibold text-black italic">
                DAILY TRADING STRATEGY FROM
                PROFESSIONAL TRADERS
                Subscriptions as low as $4/trading day
            </div>
            <div class="col-span-2"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hero-bg {
    background-image: url(/home.png);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
