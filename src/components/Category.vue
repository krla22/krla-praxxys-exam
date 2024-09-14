<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between items-center mx-6 mt-4">
        <p class="font-bold text-xl">Category</p>
    </div>
    <div class="flex justify-start overflow-x-auto snap-x snap-mandatory ml-6 my-3 px-20 ">
        <img class="snap-start mr-2" src="../assets/DuckCategory1.png" alt="" >
        <img class="snap-end mr-2" src="../assets/DuckCategory2.png" alt="">
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
