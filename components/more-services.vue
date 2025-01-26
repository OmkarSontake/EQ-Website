<template>
    <div class="w-full bg-white text-black">
        <div class="mx-auto max-w-[85rem] py-16 px-4 sm:px-6">
            <div class="flex flex-col items-start justify-start lg:flex-row lg:items-end lg:justify-between">
                <h2 class="w-full text-3xl lg:text-3xl 2xl:text-4xl font-bold lg:max-w-[50%]">Transform Market Data Into
                    Actionable Trading Intelligence</h2>
                <button
                    class="py-2.5 px-5 mt-5 lg:mt-0 bg-orange-400 hover:bg-white border border-orange-400 transition-all duration-300 rounded-sm">View
                    All Products</button>
            </div>

            <div class="w-full grid lg:grid-cols-2 lg:gap-x-20 mt-16">
                <div class="hover:text-orange-400 transition-all duration-500">
                    <div class="w-full aspect-square overflow-clip rounded-md">
                        <img src="https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-1.jpg"
                            class="h-full w-full hover:scale-110 overflow-clip transition-all duration-700 object-cover cursor-pointer"
                            alt="S&P 500 Analysis">
                    </div>
                    <div class="flex items-center justify-between mt-3">
                        <div class="w-full text-xl font-semibold">Equity Index Futures - Daily EQ Report</div>
                        <div class="min-w-fit text-lg">S&P 500 Analysis</div>
                    </div>
                    <div class="text-lg mt-3 font-semibold">
                        <span>View Analysis</span>
                        <span class="ml-2">→</span>
                    </div>
                </div>

                <div class="hover:text-orange-400 transition-all duration-500">
                    <div class="w-full aspect-square overflow-clip rounded-md">
                        <img src="https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-2.jpg"
                            class="h-full w-full hover:scale-110 overflow-clip transition-all duration-700 object-cover cursor-pointer"
                            alt="Crude Oil Forecast">
                    </div>
                    <div class="flex items-center justify-between mt-3">
                        <div class="w-full text-xl font-semibold">Commodity Futures - Volatility Framework</div>
                        <div class="min-w-fit text-lg">Crude Oil Forecast</div>
                    </div>
                    <div class="text-lg mt-3 font-semibold">
                        <span>See Forecast</span>
                        <span class="ml-2">→</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>