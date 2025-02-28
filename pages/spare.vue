<template>
    <div class="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
                    5 Year US treasury Note
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Choose your preferred access level for {{ "5 Year US treasury Note" }} analysis and forecasts
                </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div v-for="(tier, index) in subscriptionTiers" :key="index"
                    class="border-2 border-gray-100 rounded-xl p-8 hover:border-orange-400 transition-all duration-300">
                    <div class="flex flex-col h-full">
                        <div class="aspect-square overflow-hidden rounded-lg mb-6">
                            <img :src="tier.image" :alt="tier.title"
                                class="w-full h-full object-cover hover:scale-105 transition-all duration-500">
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-4">{{ tier.title }}</h3>
                            <div class="mt-auto">
                                <div class="text-3xl font-bold mb-6">
                                    ${{ tier.price }}
                                    <span class="text-lg text-gray-500">/{{ tier.period }}</span>
                                </div>
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
const subscriptionTiers = [
    {
        title: "1 Day",
        description: "Access for a single day",
        price: "15",
        period: "day",
        features: [
            "Market insights",
            "Technical analysis",
            "Support during the day"
        ],
        buttonText: "Buy Now",
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-1.jpg"
    },
    {
        title: "7 Days",
        description: "One week access with deeper insights",
        price: "49",
        period: "days",
        features: [
            "Includes all 1-day features",
            "Extended market trends",
            "Weekly strategy insights"
        ],
        buttonText: "Buy Now",
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-2.jpg"
    },
    {
        title: "30 Days",
        description: "Full-month access with in-depth analysis",
        price: "195",
        period: "days",
        features: [
            "All 7-day features",
            "Exclusive reports",
            "Advanced forecasting tools"
        ],
        buttonText: "Buy Now",
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-3.jpg"
    },
    {
        title: "Monthly Subscription",
        description: "Recurring monthly access for serious traders",
        price: "149",
        period: "month",
        features: [
            "Daily market reports",
            "Advanced analytics",
            "Priority customer support"
        ],
        buttonText: "Subscribe",
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-4.jpg"
    },
    {
        title: "Yearly Subscription",
        description: "Best value for long-term traders",
        price: "995",
        period: "year",
        features: [
            "All Monthly features",
            "Exclusive webinars",
            "1-on-1 strategy sessions"
        ],
        buttonText: "Subscribe",
        image: "https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-5.jpg"
    }
];

const handleSubscription = (tier) => {
    console.log('Selected tier:', tier)
}
</script>
