<template>
    <div class="w-full">
        <OtherPageHeader></OtherPageHeader>

        <div class="w-full bg-white">
            <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-5 pt-12 sm:py-10 lg:py-14">
                <div class="grid lg:grid-cols-2 mt-10 2xl:mt-20 gap-x-8 gap-y-8">
                    <form @submit.prevent="handleSubmit"
                        class="bg-neutral-50 rounded-lg border border-black px-4 lg:px-8 text-lg py-10 space-y-8 lg:mt-0">
                        <!-- Email Field -->
                        <div class="space-y-2">
                            <label for="email" class="font-semibold">Email *</label>
                            <input type="email" id="email" name="email" required
                                class="w-full p-3 border border-black rounded-full"
                                placeholder="Enter your email address">
                        </div>

                        <!-- Password Field -->
                        <div class="space-y-2">
                            <label for="password" class="font-semibold">Password *</label>
                            <input type="password" id="password" name="password" required
                                class="w-full p-3 border border-black rounded-full" 
                                placeholder="Enter your password">
                        </div>

                        <button type="submit" class="p-3 bg-orange-400 px-5 rounded-full">Login</button>
                    </form>

                    <div>
                        <h2 class="w-full text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
                            Welcome Back to EQ Analysis
                        </h2>
                        <p class="text-lg 2xl:pr-[10%] mt-10">
                            Access your daily market briefings and continue navigating S&P futures, 
                            commodities, and crypto markets with confidence.
                        </p>

                        <div class="h-0.5 w-full bg-neutral-800 my-20"></div>

                        <div>
                            <p class="mb-4">⭐⭐⭐⭐⭐</p>
                            <p class="italic text-lg">"Trading without EQ Analysis is like trying to climb Mt. Everest
                                without a sherpa"</p>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const token = useState('token')
const router = useRouter()

const handleSubmit = async (e: Event) => {
    const runtimeConfig = useRuntimeConfig()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {

        console.log('working')
        const response = await $fetch<{ token: string }>(`${runtimeConfig.public.apiBase}/auth/login`, {
            method: "POST",
            body: {
                email: formData.get('email') as string,
                password: formData.get('password') as string
            }
        })
        console.log(response.token)
        token.value = response.token
        router.push('/dashboard')
    } catch (error) {
        console.error('Login failed:', error)
        // Handle error (show message to user)
    }
}
</script>