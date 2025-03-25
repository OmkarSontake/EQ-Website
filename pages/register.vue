<template>
  <div class="w-full">
    <OtherPageHeader></OtherPageHeader>

    <div class="w-full bg-white">
      <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-5 pt-12 sm:py-10 lg:py-14">
        <div class="grid lg:grid-cols-2 mt-10 2xl:mt-20 gap-x-8 gap-y-8">
          <!-- LEFT COLUMN: Free Trial Highlights -->
          <div>
            <h2 class="w-full text-3xl lg:text-4xl 2xl:text-5xl font-semibold mb-6">
              Free Trial Highlights
            </h2>
            <ul class="list-disc list-inside space-y-4 text-lg">
              <li>Immediate access to today's newsletters</li>
              <li>No credit card required</li>
              <li>Risk-Free — No obligation</li>
              <li>You'll receive an invitation to subscribe in 30 days</li>
              <li>Subscriptions as low as $5/trading day</li>
            </ul>
          </div>

          <!-- RIGHT COLUMN: Tabbed Signup/Login -->
          <div class="bg-neutral-50 rounded-lg border border-black px-4 lg:px-8 text-lg py-10">
            <!-- Tabs -->
            <div class="flex border-b mb-6">
              <button 
                @click="activeTab = 'signup'" 
                :class="{'border-b-2 border-black font-bold': activeTab === 'signup'}" 
                class="p-3 w-1/2 text-center">
                Sign Up
              </button>
              <button 
                @click="activeTab = 'login'" 
                :class="{'border-b-2 border-black font-bold': activeTab === 'login'}" 
                class="p-3 w-1/2 text-center">
                Log In
              </button>
            </div>

            <!-- Signup Form -->
            <form v-if="activeTab === 'signup'" @submit.prevent="handleSubmit" class="space-y-8">
              <!-- Required Fields -->
              <div class="space-y-2">
                <label for="email" class="font-semibold">Email *</label>
                <input type="email" id="email" v-model="form.email" required class="w-full p-3 border rounded-full" placeholder="Enter your email address" />
              </div>
              <div class="space-y-2">
                <label for="fullname" class="font-semibold">Full Name *</label>
                <input type="text" id="fullname" v-model="form.fullname" required class="w-full p-3 border rounded-full" placeholder="First and last name" />
              </div>
              <div class="space-y-2">
                <label for="password" class="font-semibold">Password *</label>
                <input type="password" id="password" v-model="form.password" required class="w-full p-3 border rounded-full" placeholder="Create a password" />
              </div>
              <!-- Optional Fields -->
              <div class="space-y-2">
                <label for="company" class="font-semibold">Company</label>
                <input type="text" id="company" v-model="form.company" class="w-full p-3 border rounded-full" placeholder="Your trading firm (optional)" />
              </div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="country" class="font-semibold">Country</label>
                  <input type="text" id="country" v-model="form.country" class="w-full p-3 border rounded-full" placeholder="Your country (optional)" />
                </div>
                <div class="space-y-2">
                  <label for="city" class="font-semibold">City</label>
                  <input type="text" id="city" v-model="form.city" class="w-full p-3 border rounded-full" placeholder="Your city (optional)" />
                </div>
              </div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="street" class="font-semibold">Street Address</label>
                  <input type="text" id="street" v-model="form.street" class="w-full p-3 border rounded-full" placeholder="Street address (optional)" />
                </div>
                <div class="space-y-2">
                  <label for="zipcode" class="font-semibold">Zip Code</label>
                  <input type="text" id="zipcode" v-model="form.zipcode" class="w-full p-3 border rounded-full" placeholder="Postal code (optional)" />
                </div>
              </div>
              <!-- Choose Product(s) for Free Trial -->
              <div class="space-y-2">
                <label class="font-semibold">Choose Products for Free Trial</label>
                <div class="flex flex-wrap gap-4">
                  <label v-for="product in products" :key="product" class="flex items-center gap-2">
                    <input type="checkbox" v-model="form.products" :value="product" />
                    {{ product }}
                  </label>
                </div>
              </div>
              <!-- Referral Section -->
              <div class="space-y-2">
                <label for="referral" class="font-semibold">How did you hear about us?</label>
                <select id="referral" v-model="form.referral" class="w-full p-3 border rounded-full bg-white">
                  <option value="FRIEND">Friend/Colleague</option>
                  <option value="ONLINE">Online Search</option>
                  <option value="SOCIAL">Social Media</option>
                  <option value="OTHER">Other</option>
                  <option value="GOOGLE">Google</option>
                </select>
              </div>
              <div class="space-y-2">
                <label for="referralDetail" class="font-semibold">Referral Details</label>
                <input type="text" id="referralDetail" v-model="form.referralDetail" class="w-full p-3 border rounded-full" placeholder="Specific referral info (optional)" />
              </div>
              <!-- Signup Button -->
              <button type="submit" :disabled="loadingSignup" class="p-3 bg-[#dfd6ba] w-full rounded-full">
                <span v-if="loadingSignup">Processing...</span>
                <span v-else>Start Free Trial</span>
              </button>
              <!-- Display Signup Error if any -->
              <p v-if="errorSignup" class="text-red-500">{{ errorSignup }}</p>
            </form>

            <!-- Login Form -->
            <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="space-y-8">
              <div class="space-y-2">
                <label for="loginEmail" class="font-semibold">Email *</label>
                <input type="email" id="loginEmail" v-model="loginForm.email" required class="w-full p-3 border rounded-full" placeholder="Enter your email" />
              </div>
              <div class="space-y-2">
                <label for="loginPassword" class="font-semibold">Password *</label>
                <input type="password" id="loginPassword" v-model="loginForm.password" required class="w-full p-3 border rounded-full" placeholder="Enter your password" />
              </div>
              <!-- Login Button -->
              <button type="submit" :disabled="loadingLogin" class="p-3 bg-[#dfd6ba] w-full rounded-full">
                <span v-if="loadingLogin">Processing...</span>
                <span v-else>Log In</span>
              </button>
              <!-- Display Login Error if any -->
              <p v-if="errorLogin" class="text-red-500">{{ errorLogin }}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('signup'); // Default tab
const token = useState('token');
const router = useRouter();

const products = ref([
  "S&P 500 Index",
  "Nasdaq 100 Index",
  "Dow Jones Industrial Average",
  "Crude Oil",
  "Volatility Futures",
  "CBOE VIX",
  "US Dollar/Euro"
]);

const form = ref({
  email: '',
  fullname: '',
  password: '',
  company: '',
  country: '',
  city: '',
  street: '',
  zipcode: '',
  referral: 'FRIEND',
  referralDetail: '',
  products: []
});

const loginForm = ref({
  email: '',
  password: ''
});

// Loading and error states for signup and login actions
const loadingSignup = ref(false);
const loadingLogin = ref(false);
const errorSignup = ref('');
const errorLogin = ref('');

const handleSubmit = async () => {
  loadingSignup.value = true;
  errorSignup.value = '';
  try {
    const runtimeConfig = useRuntimeConfig();
    const response = await $fetch<{ token: string }>(
      `${runtimeConfig.public.apiBase}/auth/register`,
      {
        method: 'POST',
        body: form.value
      }
    );
    // Reset the signup form on success
    form.value = {
      email: '',
      fullname: '',
      password: '',
      company: '',
      country: '',
      city: '',
      street: '',
      zipcode: '',
      referral: 'FRIEND',
      referralDetail: '',
      products: []
    };
    token.value = response.token;
  } catch (error: any) {
    console.log(error.message);
    errorSignup.value = error.message;
  } finally {
    loadingSignup.value = false;
  }
};

const handleLogin = async () => {
  loadingLogin.value = true;
  errorLogin.value = '';
  try {
    const runtimeConfig = useRuntimeConfig();
    const response = await $fetch<{ token: string }>(
      `${runtimeConfig.public.apiBase}/auth/login`,
      {
        method: 'POST',
        body: loginForm.value
      }
    );
    // Reset the login form on success
    loginForm.value = { email: '', password: '' };
    token.value = response.token;
  } catch (error: any) {
    console.log(error.message);
    errorLogin.value = error.message;
  } finally {
    loadingLogin.value = false;
  }
};
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
