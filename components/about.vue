vbaes<template>
    <div class=" py-20 lg:py-10 lg:min-h-screen  w-full flex justify-center items-center about-container">
        <div class=" px-4 lg:px-64 text-center flex flex-col lg:gap-y-7 gap-y-3">
            <div class="">
                <h1 class="text-white font-bold lg:text-4xl text-xl italic"> <span>IMPROVE YOUR</span> MARKET
                    INTELLIGENCE
                    <br>
                    <span>
                        WITH
                        EQ ANALYSIS
                    </span>

                </h1>
            </div>
            <div class="text-white flex flex-col gap-y-3 lg:text-xl text-xs">
                <p>
                    EQ Analysis is a daily, <span>one-page</span> strategy publication giving <br> traders a unique
                    <span>“map”</span>through
                    which to
                    navigate the <br> markets for the product they are trading.

                </p>
                <p>
                    EQ Analysis provides traders with a level of <span>market</span> <br> <span>intelligence</span> how
                    to <span>“listen”</span> to what
                    the price
                    action is <br> implying about future direction each day.
                </p>
                <p>
                    The <span>2-minute</span> daily read will condition traders to think more <br> about what macro
                    range to expect
                    for each
                    session relative to <br> 1-2 day <span>EQ</span>uilibrium and how to adjust this expectation <br>
                    intraday,
                    allowing for more
                    <span> effective execution </span>of their <br> particular style of trading.
                </p>
            </div>
            <div class="flex flex-col gap-y-3 lg:flex-row items-center gap-x-10 text-lg justify-center mt-10 lg:mt-3">
                <SmartButton class="bg-[#dfd6ba] w-full text-black font-semibold py-3 px-4 rounded-lg lg:rounded-sm">
                    Start Free Trial
                </SmartButton>
                <SmartButton class="bg-[#dfd6ba] w-full text-black font-semibold py-3 px-4 rounded-lg lg:rounded-sm">
                    Products
                </SmartButton>

            </div>

        </div>

    </div>
</template>


<style scoped>
.about-container {
    background-image: url(@/assets/aboutus.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

span {
    color: #dfd6ba;
}
</style>