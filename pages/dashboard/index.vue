<template>
    <div class="py-20">
        <h2 class="w-full text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
            My Profile
        </h2>
        <div class="flex flex-col mt-10">
            <div v-for="(value, key) in user" :key="key">
                <div v-if="key !== 'id' && key !== 'referral' && key !== 'referralDetail'" class="flex mb-2">
                    <div class="font-bold mr-4 capitalize text-xl">{{ key }}:</div>
                    <div class="text-xl">{{ value }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const user = useState('user')
onMounted(() => {
    console.log(user.value)
})
</script>