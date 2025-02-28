<template>
    <div class="w-full">
        <OtherPageHeader></OtherPageHeader>

        <div class="w-full bg-white">
            <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-5 pt-12 sm:py-10 lg:py-14">
                <div class="grid lg:grid-cols-2 mt-10 2xl:mt-20 gap-x-8 gap-y-8">
                    <form @submit.prevent="handleSubmit"
                        class="bg-neutral-50 rounded-lg border border-black px-4 lg:px-8 text-lg py-10 space-y-8  lg:mt-0">
                        <!-- Required Fields -->
                        <div class="space-y-2">
                            <label for="email" class="font-semibold">Email *</label>
                            <input type="email" id="email" name="email" required
                                class="w-full p-3 border border-black rounded-full"
                                placeholder="Enter your email address">
                        </div>

                        <div class="space-y-2">
                            <label for="fullname" class="font-semibold">Full Name *</label>
                            <input type="text" id="fullname" name="fullname" required
                                class="w-full p-3 border border-black rounded-full" placeholder="First and last name">
                        </div>

                        <div class="space-y-2">
                            <label for="password" class="font-semibold">Password *</label>
                            <input type="password" id="password" name="password" required
                                class="w-full p-3 border border-black rounded-full" placeholder="Create a password">
                        </div>

                        <!-- Optional Fields -->
                        <div class="space-y-2">
                            <label for="company" class="font-semibold">Company</label>
                            <input type="text" id="company" name="company"
                                class="w-full p-3 border border-black rounded-full"
                                placeholder="Your trading firm (optional)">
                        </div>

                        <div class="grid sm:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label for="country" class="font-semibold">Country</label>
                                <input type="text" id="country" name="country"
                                    class="w-full p-3 border border-black rounded-full"
                                    placeholder="Your country (optional)">
                            </div>
                            <div class="space-y-2">
                                <label for="city" class="font-semibold">City</label>
                                <input type="text" id="city" name="city"
                                    class="w-full p-3 border border-black rounded-full"
                                    placeholder="Your city (optional)">
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label for="street" class="font-semibold">Street Address</label>
                                <input type="text" id="street" name="street"
                                    class="w-full p-3 border border-black rounded-full"
                                    placeholder="Street address (optional)">
                            </div>
                            <div class="space-y-2">
                                <label for="zipcode" class="font-semibold">Zip Code</label>
                                <input type="text" id="zipcode" name="zipcode"
                                    class="w-full p-3 border border-black rounded-full"
                                    placeholder="Postal code (optional)">
                            </div>
                        </div>

                        <!-- Referral Section -->
                        <div class="space-y-2">
                            <label for="referral" class="font-semibold">How did you hear about us?</label>
                            <select id="referral" name="referral"
                                class="w-full p-3 border border-black rounded-full bg-white">
                                <option value="FRIEND">Friend/Colleague</option>
                                <option value="ONLINE">Online Search</option>
                                <option value="SOCIAL">Social Media</option>
                                <option value="OTHER">Other</option>
                                <option value="GOOGLE">Other</option>
                            </select>
                        </div>

                        <div class="space-y-2">
                            <label for="referralDetail" class="font-semibold">Referral Details</label>
                            <input type="text" id="referralDetail" name="referralDetail"
                                class="w-full p-3 border border-black rounded-full"
                                placeholder="Specific referral info (optional)">
                        </div>

                        <button type="submit" class="p-3 bg-orange-400 px-5 rounded-full">Start Free Trial</button>
                    </form>

                    <div>
                        <h2 class="w-full text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
                            Start Your Journey With EQ Analysis Today
                        </h2>
                        <p class="text-lg 2xl:pr-[10%] mt-10">Join thousands of traders using our daily market briefings
                            to navigate S&P futures, commodities, and crypto markets with confidence.</p>

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

    const registrationDetails = {
        email: formData.get('email') as string,
        fullname: formData.get('fullname') as string,
        password: formData.get('password') as string,
        company: formData.get('company') as string || null,
        country: formData.get('country') as string || null,
        street: formData.get('street') as string || null,
        city: formData.get('city') as string || null,
        zipcode: formData.get('zipcode') as string || null,
        referral: formData.get('referral') as string,
        referralDetail: formData.get('referralDetail') as string || null
    }

    try {
        const response = await $fetch<{ token: string }>(`${runtimeConfig.public.apiBase}/auth/register`, {
            method: "POST",
            body: registrationDetails,

        })
        form.reset()
        token.value = response.token
    } catch (error: any) {
        console.log(error.message)
    }

}
</script>