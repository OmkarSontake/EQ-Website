<script setup lang="ts">

</script>

<template>
    <div class="flex-grow h-full px-4 sm:px-6 lg:px-8">
        <div class="flex gap-x-10 items-center">
            <NuxtLink to="/dashboard/">
                My Profile
            </NuxtLink>
            <NuxtLink to="/dashboard/orders">
                My Orders
            </NuxtLink>
            <NuxtLink to="/dashboard/subscriptions">
                My Subscriptions
            </NuxtLink>
        </div>
        <NuxtPage></NuxtPage>
    </div>
</template>


<style scoped>
.router-link-active {
    font-size: larger;
}
</style>