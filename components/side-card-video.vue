<template>
    <div class="w-full">
        <div
            class="mx-auto max-w-[85rem] px-4 sm:px-6 grid lg:grid-cols-2 gap-x-6 space-y-16 lg:px-8 py-5 pt-12 sm:py-10 lg:py-14">
            <div class="w-full hidden lg:block relative rounded-lg overflow-clip">
                <img src="https://astro-agency08.vercel.app/assets/img/th-5/content-img-1.png"
                    class=" w-full rounded-lg" alt="">
                <div class="w-full h-full absolute top-0 grid place-content-center bg-black bg-opacity-30">
                    <img src="@/assets\icons\play-circle.svg"
                        class="h-28 w-28 hover:scale-110 transition-all duration-500 cursor-pointer" alt="">
                </div>
            </div>
            <div class=" grid place-content-center gap-y-6">
                <h2 class="w-full text-3xl lg:text-3xl 2xl:text-4xl font-bold">Pioneering Market Intelligence Through
                    EQuilibrium Analysis Since 2003</h2>
                <p class="text-lg">Developed in Chicago's index option trading pits, EQ Analysis began as a daily
                    briefing for professional traders managing over $1B in notional value. Our proprietary method of
                    interpreting price action helps traders anticipate market movements through volatility analysis and
                    equilibrium patterns.</p>

                <div class="h-0.5 bg-black w-full my-10"></div>
                <div>
                    <p class="italic text-lg">"Trading without EQ Analysis is like trying to climb Mt. Everest without a
                        sherpa"</p>
                    <div class="flex  items-center gap-x-4 mt-5">
                        <img src="https://astro-agency08.vercel.app/assets/img/th-1/about-hero-user-blockquote-img.jpg"
                            class="h-14 w-14 rounded-full" alt="">
                        <div>
                            <p>Steve S.</p>
                            <p>S&P 500 E-Mini Trader</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:hidden relative">
                <img src="https://astro-agency08.vercel.app/assets/img/th-5/content-img-1.png"
                    class=" w-full rounded-lg" alt="">
                <div class="w-full h-full absolute top-0 grid place-content-center bg-black bg-opacity-30">
                    <img src="@/assets\icons\play-circle.svg"
                        class="h-28 w-28 hover:scale-110 transition-all duration-500 cursor-pointer" alt="">
                </div>
            </div>
        </div>
    </div>
</template>