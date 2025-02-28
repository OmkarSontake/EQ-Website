<template>
    <client-only>
        <div class="w-full bg-white text-black">
            <div class="mx-auto max-w-[85rem] py-16 px-4 sm:px-6">
                <div class="flex flex-col items-start justify-between lg:flex-row lg:items-end">
                    <div class="lg:max-w-[50%]">
                        <h2 class="text-3xl lg:text-3xl 2xl:text-4xl font-bold">
                            Transform Market Data Into Actionable Trading Intelligence
                        </h2>
                        <div class="flex gap-3 mt-6 flex-wrap">
                            <button v-for="(category, index) in categories" :key="index" @click="slideToCategory(index)"
                                :class="[
                                    'px-4 py-2 rounded-full border transition-all',
                                    activeCategory === index
                                        ? 'bg-orange-400 border-orange-400'
                                        : 'bg-white border-gray-300 hover:border-orange-400'
                                ]">
                                {{ category }}
                            </button>
                        </div>
                    </div>
                    <button
                        class="py-2.5 px-5 mt-5 lg:mt-0 bg-orange-400 hover:bg-white border border-orange-400 transition-all duration-300 rounded-sm">
                        View All Products
                    </button>
                </div>

                <swiper-container ref="containerRef" class="mt-16" space-between="20" navigation :breakpoints="{
                    640: { 'slidesPerView': 1 },
                    768: { 'slidesPerView': 2 },
                    1024: { 'slidesPerView': 3 }
                }">
                    <swiper-slide v-for="(product, index) in products" :key="index">
                        <NuxtLink to="/tiers-example" class="hover:text-orange-400 transition-all duration-500 ">
                            <div class="w-full aspect-square overflow-clip rounded-md relative hover-card">
                                <img :src="product.image"
                                    class="h-full w-full hover:scale-110 hover-image overflow-clip transition-all duration-700 object-cover cursor-pointer hover:grayscale"
                                    :alt="product.title">
                                <div class="flex flex-col absolute bottom-0 text-white p-3 justify-between mt-3">
                                    <div class="w-full text-lg font-semibold">{{ product.title }}</div>
                                    <div class="min-w-fit text-base">{{ product.subtitle }}</div>
                                </div>
                                <div
                                    class="absolute top-0 w-full text-white h-full hidden hover:backdrop-blur-sm p-3 hover-child">
                                    {{ product.description }}
                                </div>
                            </div>
                        </NuxtLink>
                    </swiper-slide>
                </swiper-container>

                <div class="flex gap-4 mt-4 w-full  justify-between z-50 text-orange-500 text-3xl">
                    <button @click="swiper.prev()">◀</button>
                    <button @click="swiper.next()">▶</button>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script setup lang="ts">

const containerRef = ref<HTMLElement | null>(null)
const activeCategory = ref(0)
const categories = ['Equity', 'Commodity', 'Currency', 'Precious Metals']

const products = [
    { type: 0, image: "eqanalysis.JPG", title: "Equity Index Futures - Daily EQ Report", subtitle: "S&P 500 Analysis", description: "Our Daily EQ Report provides a comprehensive analysis of the S&P 500 Index, breaking down key market movements, technical indicators, and trends to help investors make informed decisions in the equity index futures market." },
    { type: 1, image: "eqanalysis.JPG", title: "Commodity Futures - Volatility Framework", subtitle: "Crude Oil Forecast", description: "The Volatility Framework for Crude Oil Forecast offers a detailed forecast of the crude oil market, highlighting price volatility, key factors influencing the market, and actionable insights for traders and investors in commodity futures." },
    { type: 2, image: "eqanalysis.JPG", title: "Currency Markets - Daily FX Overview", subtitle: "USD/EUR Outlook", description: "Our Daily FX Overview provides an in-depth analysis of the USD/EUR currency pair, covering major economic events, geopolitical factors, and technical charting, giving you the latest outlook to guide your trading and investment strategies." },
    { type: 3, image: "eqanalysis.JPG", title: "Precious Metals - Risk Analysis", subtitle: "Gold Price Projection", description: "The Risk Analysis report for Precious Metals focuses on the projected price movements of gold, identifying key risks and opportunities in the market. Our analysis delves into economic data, geopolitical factors, and market sentiment to help you stay ahead of gold price fluctuations." }
]


//@ts-ignore
const swiper = useSwiper(containerRef)

const slideToCategory = (index: number) => {
    if (swiper.instance) {
        swiper.instance.value?.slideTo(index)
        activeCategory.value = index
    }
}

onMounted(() => {
    console.log("Swiper instance:", swiper.instance)
})
</script>

<style>
swiper-container::part(navigation-button) {
    color: #f97316;
    background: white;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.hover-card:hover>.hover-child {
    display: block;
}

.hover-card:hover>.hover-image {
    scale: 1.1;
    filter: grayscale();
}
</style>