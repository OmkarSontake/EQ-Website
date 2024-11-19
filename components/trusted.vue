vbaes<template>
    <div class=" py-20 lg:py-10 lg:min-h-screen  w-full flex justify-center items-center about-container">
        <div class=" px-4 lg:px-64 text-center flex flex-col lg:gap-y-7 gap-y-3">
            <div class="">
                <h1 class="text-[#dfd6ba] font-bold lg:text-4xl text-xl italic">TRUSTED DAILY BY DAY TRADERS, HEDGE
                    FUNDS,
                    INVESTMENT BANKS, PIT TRADERS AND MORE FOR OVER 20
                </h1>
            </div>
            <div class="text-white flex flex-col gap-y-3 lg:text-xl text-xs">
                <p class="italic">
                    "Trading without EQ Analysis is like tyying to climb Mi. Everest without a
                    sherpa"
                </p>

                <p>
                    - Steve S, S&P 500 E-Mini trader
                </p>

                <div class="mt-14 space-y-14">
                    <p> <span>Developed in 2003</span> by professional market-makers to more efficiently manage an index
                        futures and
                        options portfolio with notional value over <span>$1 Billion</span> .</p>

                    <p>EQ Analysis has constantly evolved since then and now combines <span> next-gen volatility
                            analysis</span> with
                        years of professional experience in navigating the risks of the markets to give you an
                        <span>edge</span> in
                        your daily trading.</p>
                </div>

            </div>
            <div class="flex flex-col gap-y-3 lg:flex-row items-center gap-x-10 text-lg justify-center mt-10 lg:mt-3">
                <SmartButton class="bg-white w-full text-black font-semibold py-3 px-4 rounded-lg lg:rounded-sm">
                    Start Free Trial
                </SmartButton>
                <SmartButton class="bg-white w-full text-black font-semibold py-3 px-4 rounded-lg lg:rounded-sm">
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