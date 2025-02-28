<template>
    <div class="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                    {{ selectedCategory }} Market Intelligence
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose your preferred access level for {{ selectedCategory }} analysis and forecasts
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div v-for="(tier, index) in subscriptionTiers" :key="index"
                    class="border-2 border-gray-100 rounded-xl p-8 hover:border-orange-400 transition-all duration-300">
                    <div class="flex flex-col h-full">
                        <!-- Image -->
               <!--          <div class="aspect-square overflow-hidden rounded-lg mb-6">
                            <img :src="tier.image" :alt="tier.title"
                                class="w-full h-full object-cover hover:scale-105 transition-all duration-500">
                        </div> -->


                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-4">{{ tier.title }}</h3>
                            <p class="text-gray-600 mb-6">{{ tier.description }}</p>

                            <div class="mt-auto">
                 <!--                <div class="text-3xl font-bold mb-6">
                                    ${{ tier.price }}
                                    <span class="text-lg text-gray-500">/{{ tier.period }}</span>
                                </div>
 -->

                                <!--          <ul class="space-y-3 mb-8">
                                    <li v-for="(feature, fIndex) in tier.features" :key="fIndex"
                                        class="flex items-center">
                                        <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor"
                                            viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        {{ feature }}
                                    </li>
                                </ul> -->


                                <button @click="handleSubscription(tier)"
                                    class="w-full py-3 px-6 bg-orange-400 hover:bg-orange-500 text-white rounded-lg font-semibold transition-all">
                                    {{ tier.buttonText }}
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
const router = useRouter()
const subscriptionTiers = [
    {
        title: "5 Year US treasury Note",
        description: "Essential daily market analysis and key levels",
        price: "29",
        period: "day",
        features: [
            "Morning market report",
            "Key support/resistance levels",
            "Daily volatility analysis",
            "Email support"
        ],
        buttonText: "Select",
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-1.jpg"
    },
    {
        title: "10 Year US treasury Note",
        description: "Complete toolkit for active traders",
        price: "199",
        period: "month",
        features: [
            "All Daily Briefing features",
            "Intraday updates",
            "Historical pattern library",
            "Priority support",
            "Multi-device access"
        ],
        buttonText: "Select",
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-2.jpg"
    },
    {
        title: "30 Year US treasury Note",
        description: "Enterprise-level solutions for trading desks",
        price: "1999",
        period: "year",
        features: [
            "All Professional features",
            "Custom API access",
            "Dedicated analyst support",
            "White-label reports",
            "Volume analytics"
        ],
        buttonText: "Select",
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-3.jpg"
    }
]

const handleSubscription = (tier) => {
    console.log('Selected tier:', tier)
    router.push('/spare')
}
</script>