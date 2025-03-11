<template>
    <div class="w-full bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12">
          <h1 class="text-3xl lg:text-4xl 2xl:text-5xl font-bold">Your Trading Intelligence Cart</h1>
          <p class="text-lg text-gray-600 mt-4">
            {{ cartItems.length }} item{{ cartItems.length !== 1 ? 's' : '' }} in your cart
          </p>
        </div>
  
        <div v-if="cartItems.length > 0" class="grid lg:grid-cols-3 gap-8">

          <div class="lg:col-span-2 space-y-6">
            <div 
              v-for="(item, index) in cartItems" 
              :key="item.id" 
              class="border-b pb-6 group transition-all duration-300"
            >
              <div class="flex flex-col sm:flex-row gap-6">

                <div class="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img 
                    :src="item.image" 
                    :alt="item.name" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  >
                </div>

                <div class="flex-1 w-full">
                  <div class="flex justify-between items-start">
                    <div class="w-full">
                      <h3 class="text-xl font-semibold">{{ item.name }}</h3>
                      <p class="text-gray-600 mt-1">{{ item.type }} Analysis</p>
                    </div>
                    <button 
                      @click="removeItem(index)" 
                      class="text-gray-400 hover:text-orange-500 transition-colors ml-4"
                    >
                      ✕
                    </button>
                  </div>
  

                  <div class="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex items-center border rounded-full w-fit">
                      <button 
                        @click="decrementQuantity(index)" 
                        class="px-4 py-2 hover:bg-gray-100 rounded-l-full transition-colors"
                        :disabled="item.quantity <= 1"
                      >
                        −
                      </button>
                      <span class="px-4 w-12 text-center">{{ item.quantity }}</span>
                      <button 
                        @click="incrementQuantity(index)" 
                        class="px-4 py-2 hover:bg-gray-100 rounded-r-full transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <div class="text-xl font-semibold">
                      ${{ (item.price * item.quantity).toFixed(2) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-1 bg-gray-50 p-6 rounded-xl h-fit sticky top-8">
            <h2 class="text-2xl font-bold mb-6">Order Summary</h2>
            <div class="space-y-4">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Discount</span>
                <span>-${{ discount }}</span>
              </div>
              <div class="flex justify-between">
                <span>Taxes</span>
                <span>${{ taxes.toFixed(2) }}</span>
              </div>
              <div class="border-t pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>${{ total.toFixed(2) }}</span>
              </div>
            </div>

            <button 
              @click="proceedToCheckout"
              class="w-full mt-6 py-4 bg-black hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const cartItems = ref([])
  
  onMounted(() => {
    const storedCart = localStorage.getItem('cart')
    cartItems.value = storedCart ? JSON.parse(storedCart) : [
      {
        id: 1,
        name: 'Equity Index Futures',
        type: 'Daily Briefing',
        price: 29.00,
        quantity: 1,
        image: 'https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-1.jpg'
      },
      {
        id: 2,
        name: 'Commodity Futures',
        type: 'Professional Plan',
        price: 199.00,
        quantity: 1,
        image: 'https://astro-agency08.vercel.app/assets/img/th-1/portfolio-img-2.jpg'
      }
    ]
  })
  
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
  }
  
  const incrementQuantity = (index) => {
    cartItems.value[index].quantity++
    saveCart()
  }
  
  const decrementQuantity = (index) => {
    if (cartItems.value[index].quantity > 1) {
      cartItems.value[index].quantity--
      saveCart()
    }
  }
  
  const removeItem = (index) => {
    cartItems.value.splice(index, 1)
    saveCart()
  }
  
  const subtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })
  

  const discount = 0
  
  const taxes = computed(() => subtotal.value * 0.07)
  const total = computed(() => subtotal.value + taxes.value)
  
  const proceedToCheckout = () => {
    router.push('/cart')
  }
  </script>
  
  <style scoped>
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  