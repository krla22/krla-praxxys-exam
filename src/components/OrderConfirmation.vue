<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="fixed bg-gray-200 w-full h-full bg-opacity-50">
        <div class="bg-white w-80 h-70 fixed top-64 left-12 text-center p-6 rounded-2xl shadow-lg">
            <i class="pi pi-thumbs-up text-6xl text-red-500"></i>
            <p class="pt-4 font-bold">Successfully Added!</p>
            <p class="pt-2">What do you want to do now?</p>
            <RouterLink to="/checkout">
                <button class="mt-4 bg-red-700 text-white px-10 py-3 rounded-2xl">Proceed to Checkout</button>
            </RouterLink>
            <RouterLink to="/food">
                <p class="pt-2 text-red-700 font-semibold">Add More</p>
            </RouterLink>
        </div>
    </div>
</template>