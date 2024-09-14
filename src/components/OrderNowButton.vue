<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="fixed bottom-6 right-6">
    <RouterLink to="/food">
      <button class="bg-red-500 hover:bg-red-800 text-white py-3 px-6 rounded-2xl shadow-lg">
        Order Now!
      </button>
    </RouterLink>
  </div>
</template>
