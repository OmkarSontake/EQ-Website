<script setup>
const token = useState('token')
const user = useState('user')
const router = useRouter()
const runtimeConfig = useRuntimeConfig()
watch(token, async (newValue, oldValue) => {
  console.log('Token changed:', newValue, oldValue);
  try {
    user.value = await $fetch(`${runtimeConfig.public.apiBase}/api/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${newValue}`
      }
    }),
      console.log(user.value)
    console.log(newValue)
    if (typeof (newValue) === 'string') localStorage.setItem('token', newValue);
    router.push('/dashboard');
  } catch (error) {
    console.log('error', error.message)
    localStorage.removeItem('token')
  }
})
onMounted(async () => {
  const persistentToken = localStorage.getItem('token')
  console.log(persistentToken)
  if (persistentToken) {
    token.value = persistentToken
    try {
      user.value = await $fetch(`${runtimeConfig.public.apiBase}/api/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token.value}`
        }
      })
      router.push('/dashboard');
    } catch (error) {
      console.log(error.message)
    }

  }
})

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