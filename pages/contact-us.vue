<template>
    <div class="w-full">
        <OtherPageHeader></OtherPageHeader>

        <div class="w-full bg-white">
            <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-5 pt-12 sm:py-10 lg:py-14">

                <div class="grid lg:grid-cols-2 mt-10 2xl:mt-20 gap-x-8">

                    <div>
                        <h2 class="w-full text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
                            Fill out this form, We ‘ll quickly get back to you
                        </h2>
                        <p class="text-lg 2xl:pr-[10%] mt-10">We are here to help you! Tell us how we can help and we’ll
                            get in touch
                            within next 24hrs
                            with expert</p>

                        <div class="h-0.5 w-full bg-neutral-800 my-20"></div>

                        <div>
                            <p class="mb-4">⭐⭐⭐⭐⭐</p>
                            <p class="italic text-lg">"Trading without EQ Analysis is like trying to climb Mt. Everest
                                without a
                                sherpa"</p>
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

                    <form @submit.prevent="handleSubmit"
                        class="bg-neutral-50 rounded-lg border border-black px-4 lg:px-8 text-lg py-10 space-y-8 mt-8 lg:mt-0">
                        <div class="space-y-2">
                            <label for="name" class="font-semibold">Your Name</label>
                            <input type="text" id="name" name="name" class="w-full p-3 border border-black rounded-full"
                                placeholder="Enter your full name">
                        </div>
                        <div class="space-y-2">
                            <label for="email" class="font-semibold">Your Email</label>
                            <input type="email" id="email" name="email"
                                class="w-full p-3 border border-black rounded-full"
                                placeholder="Enter your email address">
                        </div>
                        <div class="space-y-2">
                            <label for="email" class="font-semibold">Write your message</label>
                            <textarea type="email" id="email" name="email"
                                class="w-full p-3 min-h-40 border border-black rounded-2xl"
                                placeholder="Write us your question here" />
                        </div>

                        <button type="submit" class="p-3 bg-[#dfd6ba] px-5 rounded-full">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const handleSubmit = (e: Event) => {
    console.log(e)
}
</script>
