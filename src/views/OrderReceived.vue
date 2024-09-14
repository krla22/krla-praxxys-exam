<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center mx-6 my-24">
    <i class="pi pi-thumbs-up-fill text-8xl text-red-500"></i>
    <p class="font-bold text-3xl mt-12">Order Received!</p>
    <p class="text-center text-sm text-gray-500 mt-6">
        Your order <span class="text-red-700 font-semibold">No. 19049575</span> 
        has been successfully taken and will now be processed. Kindly wait 
        for our notification regarding your order.
    </p>
    <div class="absolute bottom-8 mx-6 my-0 text-center">
        <button class="bg-red-700 hover:bg-red-500 w-96 h-16 text-white font-semibold rounded-2xl">Track Order</button>
        <RouterLink to="/home">
            <p class="text-red-700 font-semibold mt-4">Back to Home</p>
        </RouterLink>
    </div>
  </div>
</template>
