<template>
    <div class="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                    {{ categoryTitle  }}
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose your preferred access level for {{ categoryName }} analysis and forecasts
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div v-for="(tier, index) in subscriptionTiers" :key="index"
                    class="border-2 border-gray-100 rounded-xl p-8 hover:border-orange-400 transition-all duration-300">
                    <div class="flex flex-col h-full">
                        <!-- Image -->
                        <div class="aspect-square overflow-hidden rounded-lg mb-6">
                            <img :src="tier.image" :alt="tier.name"
                                class="w-full h-full object-cover hover:scale-105 transition-all duration-500">
                        </div>


                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-4">{{ tier.name }}</h3>
                            <p class="text-gray-600 mb-6">{{ tier.description ? tier.description : '' }}</p>
                            <div class="mt-auto">
                                <button @click="handleSubscription(tier)"
                                    class="w-full py-3 px-6 bg-orange-400 hover:bg-orange-500 text-white rounded-lg font-semibold transition-all">
                                        Select Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    selectedCategory: {
        type: String,
        default: 'Equity Index'
    }
})

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const categoryName = ref('')
const categoryTitle = ref('')
const router = useRouter()
const subscriptionTiers = ref([])

onMounted(async()=>{
  const res  = await $fetch(`${runtimeConfig.public.apiBase}/content/product`, {
    method:"GET",
    query:{
        id: route.params.id
    }
 })

 subscriptionTiers.value = res.products.map((item)=>{
        return item
 })

 console.log(res)
 categoryName.value = res.name
 categoryTitle.value = res.title
})

const handleSubscription = (tier) => {
    console.log('Selected tier:', tier)
    router.push('/pricing')
}
</script>