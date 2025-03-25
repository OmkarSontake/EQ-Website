<template>
    <client-only>
        <div class="w-full bg-white text-black">
            <div class="mx-auto max-w-[85rem] py-16 px-4 sm:px-6">
                <div class="flex flex-col items-start justify-start lg:flex-row lg:items-end">
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
                    <!--      <button
                        class="py-2.5 px-5 mt-5 lg:mt-0 bg-orange-400 hover:bg-white border border-orange-400 transition-all duration-300 rounded-sm">
                        View All Products
                    </button> -->
                </div>

                <swiper-container ref="containerRef" class="mt-16" space-between="20" navigation :breakpoints="{
                    640: { 'slidesPerView': 1 },
                    768: { 'slidesPerView': 2 },
                    1024: { 'slidesPerView': 3 }
                }">
                    <swiper-slide v-for="(product, index) in products" :key="index">
                        <NuxtLink :to="`/services/${product.id}`"
                            class="transition-all duration-500 hover:text-orange-400 ">
                            <!-- Card Container -->
                            <div class="rounded-md shadow-md bg-white group border-2 border-black">

                                <!-- Image Section -->
                                <div class="p-3">
                                    <img :src="product.image" :alt="product.title"
                                        class="w-full h-auto object-contain transition-transform duration-500" />
                                </div>


                                <div class="p-3 bg-[#dfd6ba] border-2 bg-opacity-70 text-black">
                                    <h3 class="text-xl font-semibold mb-2">{{ product.title }}</h3>
                                    <p class="mb-2">{{ product.subTitle }}</p>
                                    <p class="text-sm mb-4">{{ product.description }}</p>
                                    <button class="bg-transparent border border-white px-4 py-2 rounded-full
               hover:bg-white hover:text-black transition-colors duration-300">
                                        Learn more
                                    </button>
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

<script setup>

const containerRef = ref(null)
const activeCategory = ref(0)
const categories = ref(['Equity', 'Commodity', 'Currency', 'Precious Metals'])

const products = ref([])
const runtimeConfig = useRuntimeConfig()

onMounted(async () => {
    try {
        const res = await $fetch(`${runtimeConfig.public.apiBase}/content/categories`)

        products.value = res.map((item, index) => {
            return { type: index, ...item }
        })
        console.log(products.value)
    } catch (error) {
        console.log(error.message)
    }
})


//@ts-ignore
const swiper = useSwiper(containerRef)

const slideToCategory = (index) => {
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