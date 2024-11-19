<template>
    <div class="w-full offerings py-14 lg:py-24">
        <h2 class="pb-10 font-semibold text-center text-xl lg:text-4xl">
            EQ ANALYSIS PRODUCT OFFERINGS
        </h2>

        <div class="grid  gap-y-10 lg:grid-cols-4 px-4 lg:px-10 gap-x-10">
            <section class="border-8 border-black py-10 pt-5 bg-[#dfd6ba] text-black">
                <div class="w-full px-10">
                    <h2 class="text-center  text-2xl  font-semibold">
                        Equity Index Futures
                    </h2>
                    <img class="w-full px-5 py-10" src="@/assets/offering-chart.png" alt="" />
                </div>

                <div class="text-center text-xl">
                    <div>
                        <p>S&P 500 Futures</p>
                        <p>Nasdaq 100 Futures</p>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button class="text-[#dfd6ba] mt-5 p-4 px-7 bg-black rounded-md font-semibold" v-wave>Learn
                        More</button>
                </div>
            </section>

            <section class="border-8 border-black py-10 pt-5 bg-[#dfd6ba] text-black">
                <div class="w-full px-10">
                    <h2 class="text-center  text-2xl  font-semibold">
                        Cryptocurrency
                    </h2>
                    <img class="w-full px-5 py-10" src="@/assets/offering-chart.png" alt="" />
                </div>

                <div class="text-center text-xl">
                    <div>
                        <p>Bitcoin</p>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button class="text-[#dfd6ba] mt-5 p-4 px-7 bg-black rounded-md font-semibold" v-wave>Learn
                        More</button>
                </div>
            </section>

            <section class="border-8 border-black py-10 pt-5 bg-[#dfd6ba] text-black">
                <div class="w-full px-10">
                    <h2 class="text-center  text-2xl  font-semibold">
                        Commodity Futures
                    </h2>
                    <img class="w-full px-5 py-10" src="@/assets/offering-chart.png" alt="" />
                </div>

                <div class="text-center text-xl">
                    <div>
                        <p>Crude Oil Futures</p>
                        <p>Gold Futures</p>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button class="text-[#dfd6ba] mt-5 p-4 px-7 bg-black rounded-md font-semibold" v-wave>Learn
                        More</button>
                </div>
            </section>

            <section class="border-8 border-black py-10 pt-5 bg-[#dfd6ba] text-black">
                <div class="w-full px-10">
                    <h2 class="text-center  text-2xl  font-semibold">
                        Interest Rates
                        Futures
                    </h2>
                    <img class="w-full px-5 py-10" src="@/assets/offering-chart.png" alt="" />
                </div>

                <div class="text-center text-xl">
                    <div>
                        <p>10 Yr US Treasury Note Futures</p>
                    </div>
                </div>

                <div class="flex justify-center">
                    <button class="text-[#dfd6ba] mt-5 p-4 px-7 bg-black rounded-md font-semibold" v-wave>Learn
                        More</button>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.offerings {
    background: url(@/assets/offering-background.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
