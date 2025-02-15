<script setup lang="ts">
const token = useState('token', () => undefined)
</script>

<template>
  <div class="bg-stone-100">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
      <Footer></Footer>
    </NuxtLayout>
  </div>
</template>


<style>
html,
body {
  width: 100%;
  font-family: "Inter";
}
</style>