<template>
    <div class="w-full bg-white text-black">
        <div class="mx-auto max-w-[85rem] py-16 px-4 sm:px-6">
            <div class="flex flex-col items-start justify-start lg:flex-row lg:items-end lg:justify-between">
                <h2 class="w-full text-3xl lg:text-3xl 2xl:text-4xl font-bold lg:max-w-[50%]">
                    Transform Market Data Into Actionable Trading Intelligence
                </h2>
                <button class="py-2.5 px-5 mt-5 lg:mt-0 bg-orange-400 hover:bg-white border border-orange-400 transition-all duration-300 rounded-sm">
                    View All Products
                </button>
            </div>

            <swiper 
                class="mt-16" 
                :slides-per-view="1" 
                :space-between="20"
                :breakpoints="{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }"
                navigation
                :pagination="{ clickable: true }"
            >
                <swiper-slide v-for="(product, index) in products" :key="index">
                    <div class="hover:text-orange-400 transition-all duration-500">
                        <div class="w-full aspect-square overflow-clip rounded-md">
                            <img :src="product.image"
                                class="h-full w-full hover:scale-110 overflow-clip transition-all duration-700 object-cover cursor-pointer"
                                :alt="product.title">
                        </div>
                        <div class="flex items-center justify-between mt-3">
                            <div class="w-full text-xl font-semibold">{{ product.title }}</div>
                            <div class="min-w-fit text-lg">{{ product.subtitle }}</div>
                        </div>
                        <div class="text-lg mt-3 font-semibold">
                            <span>{{ product.cta }}</span>
                            <span class="ml-2">→</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
    {
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-1.jpg",
        title: "Equity Index Futures - Daily EQ Report",
        subtitle: "S&P 500 Analysis",
        cta: "View Analysis"
    },
    {
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-2.jpg",
        title: "Commodity Futures - Volatility Framework",
        subtitle: "Crude Oil Forecast",
        cta: "See Forecast"
    },
    {
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-1.jpg",
        title: "Currency Markets - Daily FX Overview",
        subtitle: "USD/EUR Outlook",
        cta: "Explore Report"
    },
    {
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-2.jpg",
        title: "Precious Metals - Risk Analysis",
        subtitle: "Gold Price Projection",
        cta: "Discover Insights"
    }
];
</script>
