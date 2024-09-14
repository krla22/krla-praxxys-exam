<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between items-center mx-6">
        <p class="font-bold text-xl">Special Offers!</p>
        <p class="font-semibold text-red-700">View All<i class="pi pi-caret-right text-xs ml-2"></i></p>
    </div>
    <div class="flex overflow-x-auto -m-10 snap-x snap-mandatory">
        <img class="snap-start" src="../assets/DuckFood1.png" alt="" >
        <img class="snap-start" src="../assets/DuckFood2.png" alt="">
        <img class="snap-start" src="../assets/DuckFood3.png" alt="">
    </div>
</template>

<style scoped>
.scroll-snap-x {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.scroll-snap-align {
  scroll-snap-align: start;
}
</style>
