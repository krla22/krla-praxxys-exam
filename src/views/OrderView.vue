<script setup lang="ts">
    import OrderConfirmation from '../components/OrderConfirmation.vue';
    import { ref } from 'vue';

    const isButtonClicked = ref(false)

    const confirmCheckout = () => {
        isButtonClicked.value = !isButtonClicked.value
    }
</script>

<template>
    <OrderConfirmation v-if="isButtonClicked"/>
    <div class="p-5">
        <div class="flex items-center justify-between mb-4">
            <RouterLink to="/food">
                <button class="pi pi-arrow-left text-2xl text-gray-600"></button>
            </RouterLink>
            <h1 class="text-2xl font-bold">Meat</h1>
            <i class="pi pi-shopping-bag text-2xl text-red-500"></i>
        </div>

        <div class="bg-gray-100 rounded-lg p-4 flex justify-center">
            <img src="../assets/DuckMeal1.jpg" alt="Product Image" class="rounded-lg shadow-md" />
        </div>

        <div class="mt-4">
            <h2 class="text-lg font-semibold">Wine Dip Duck</h2>
            <div class="flex items-center">
                <img class="w-24 h-auto" src="../assets/DuckRating.png">
            </div>
            <p class="text-sm text-gray-600 my-2">
            Our signature Wine Dip Duck is made from farm fresh ingredients like live Donald Duck and 
            100 year-old wine from Disney World. This dish has been certified by World Class Chef 
            Gordon Ramsay as well.
            </p>
            <div class="flex items-center justify-between">
                <span class="text-red-600 text-2xl font-bold">P 475</span>
                <div class="flex items-center">
                    <button class="pi pi-minus text-lg p-2 bg-gray-200 rounded-full text-red-600"></button>
                    <span class="mx-3">1</span>
                    <button class="pi pi-plus text-lg p-2 bg-gray-200 rounded-full text-red-600"></button>
                </div>
            </div>
        </div>

        <div class="mt-6">
        <h3 class="text-lg font-semibold mb-2">Beverages</h3>
        <div class="w-full mb-4">
            <select class="appearance-none w-full py-2 px-4 pr-8 bg-gray-100 border border-gray-300 rounded-md">
                <option>Wine</option>
            </select>
        </div>
        <div class="flex space-x-2">
            <button class="flex-1 py-2 bg-yellow-500 text-white rounded-md">20 Yrs Old</button>
            <button class="flex-1 py-2 border border-gray-300 text-gray-600 rounded-md">40 Yrs Old</button>
            <button class="flex-1 py-2 border border-gray-300 text-gray-600 rounded-md">60 Yrs Old</button>
        </div>
        </div>

        <div class="mt-6 mb-24">
            <h3 class="text-lg font-semibold mb-2">Add-Ons</h3>
            <div class="bg-gray-100 p-4 rounded-lg flex items-center justify-between mb-2">
                <div class="flex items-center">
                    <img src="../assets/DuckMeal2.jpg" alt="Tomato Sauce" class="w-12 h-12 rounded-full mr-3" />
                    <div>
                        <p class="font-semibold">More Wine</p>
                        <p class="text-sm text-gray-500">Sauce</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <span class="text-red-600 font-bold">P 125</span>
                    <button class="pi pi-minus p-2 ml-4 text-red-600 bg-gray-200 rounded-full"></button>
                    <span class="mx-2">1</span>
                    <button class="pi pi-plus p-2 text-red-600 bg-gray-200 rounded-full"></button>
                </div>
            </div>
        </div>

        <button @click="confirmCheckout" class="w-96 mt-4 py-3 -ml-1 bg-red-600 text-white rounded-lg font-bold fixed bottom-10">
            Add to Bag
        </button>
    </div>
</template>

