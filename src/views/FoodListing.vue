<script setup lang="ts">
  import { ref } from 'vue'
  import SideBar from '../components/SideBar.vue'
  import { RouterLink } from 'vue-router';

  const isSidebarVisible = ref(false)

  const showSideBar = () => {
    isSidebarVisible.value = !isSidebarVisible.value
  }
</script>

<template> 
  <div :class="['flex flex-col h-full', isSidebarVisible ? ' bg-gray-300' : ' bg-white']">

    <Transition name="slide">
      <SideBar v-if="isSidebarVisible" :class="['', isSidebarVisible ? 'block' : 'hidden']"/>
    </Transition>
    
    <section :class="['flex flex-col overflow-hidden text-center', isSidebarVisible ? 'ml-80 -mr-80' : '']">
      <div :class="['flex', isSidebarVisible ? 'mt-11 pl-9 overflow-hidden' : 'mx-9 mt-10']">
        <i class="pi pi-circle-fill absolute text-yellow-500 left-14 top-10 text-sm"></i>
        <button class="pi pi-bars text-red-600 text-2xl" @click="showSideBar"></button>
        <span class="text-2xl pl-4 pr-40"><p class="font-bold">Our Food</p></span>
        <span class="pi pi-shopping-bag text-2xl px-2 text-red-500 self-center"></span>
      </div>
      <div class="flex relative items-center mx-6 mt-6 mb-3">
        <input type="text" placeholder="What duck do we eat today?"
          class=" w-full h-full border-2 p-5 pl-12 text-left bg-gray-50 rounded-2xl"
        >
        <i class="pi pi-search absolute left-4 text-red-700 text-xl"></i>
        <i class="pi pi-sliders-h absolute right-6 text-red-700 text-xl"></i>
      </div>
      <div class="flex mx-6 mb-3">
        <button class="bg-red-700 text-white py-2 px-4 mr-2 rounded-2xl">All</button>
        <button class="bg-gray-300 font-semibold text-gray-500 py-2 px-4 mr-2 rounded-2xl">Breakfast</button>
        <button class="bg-gray-300 font-semibold text-gray-500 py-2 px-4 mr-2 rounded-2xl">Lunch</button>
        <button class="bg-gray-300 font-semibold text-gray-500 py-2 px-4 mr-2 rounded-2xl">Dinner</button>
        <button class="bg-gray-300 font-semibold text-gray-500 py-2 px-4 mr-2 rounded-2xl">Snacks</button>
      </div>

      <div class="grid grid-cols-2 mx-6 mb-8 gap-2">
        <RouterLink to="/food/cooked-duck">
          <div class="flex flex-col bg-gray-100 rounded-3xl p-4 h-80">
            <img class="w-40 h-40 rounded-3xl self-center mb-6" src="../assets/DuckMeal1.jpg" alt="Cooked Duck" />
            <div class="flex-cols text-left items-left mb-6">
              <p class="font-bold text-xl">Cooked Duck</p>
              <p>Meat</p>
            </div>
            <div class="flex text-left items-left justify-between">
              <p class="text-red-700 text-xl font-bold">P 475</p>
              <img class="w-20 h-auto" src="../assets/DuckRating.png" alt="Rating" />
            </div>
          </div>
        </RouterLink>
        <div class="flex flex-col bg-gray-100 rounded-3xl p-4 h-80">
          <img class="w-40 h-40 rounded-3xl self-center mb-6" src="../assets//DuckMeal2.jpg" alt="" />
          <div class="flex-cols text-left items-left mb-6">
            <p class="font-bold text-xl">Pastry Duck</p>
            <p>Bread</p>
          </div>
          <div class="flex text-left items-left justify-between">
            <p class="text-red-700 text-xl font-bold">P 475</p>
            <img class="w-20 h-auto" src="../assets/DuckRating.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col bg-gray-100 rounded-3xl p-4 h-80">
          <img class="w-40 h-40 rounded-3xl self-center mb-6" src="../assets//DuckMeal3.jpg" alt="" />
          <div class="flex-cols text-left items-left mb-6">
            <p class="font-bold text-xl">Wine Dip Duck</p>
            <p>Meat</p>
          </div>
          <div class="flex text-left items-left justify-between">
            <p class="text-red-700 text-xl font-bold">P 475</p>
            <img class="w-20 h-auto" src="../assets/DuckRating.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col bg-gray-100 rounded-3xl p-4 h-80">
          <img class="w-40 h-40 rounded-3xl self-center mb-6" src="../assets//DuckMeal4.jpg" alt="" />
          <div class="flex-cols text-left items-left mb-6">
            <p class="font-bold text-xl">Barbecued Duck</p>
            <p>Meat</p>
          </div>
          <div class="flex text-left items-left justify-between">
            <p class="text-red-700 text-xl font-bold">P 475</p>
            <img class="w-20 h-auto" src="../assets/DuckRating.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col bg-gray-100 rounded-3xl p-4 h-80">
          <img class="w-40 h-40 rounded-3xl self-center mb-6" src="../assets//DuckMeal1.jpg" alt="" />
          <div class="flex-cols text-left items-left mb-6">
            <p class="font-bold text-xl">Cooked Duck</p>
            <p>Meat</p>
          </div>
          <div class="flex text-left items-left justify-between">
            <p class="text-red-700 text-xl font-bold">P 475</p>
            <img class="w-20 h-auto" src="../assets/DuckRating.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col bg-gray-100 rounded-3xl p-4 h-80">
          <img class="w-40 h-40 rounded-3xl self-center mb-6" src="../assets//DuckMeal2.jpg" alt="" />
          <div class="flex-cols text-left items-left mb-6">
            <p class="font-bold text-xl">Pastry Duck</p>
            <p>Bread</p>
          </div>
          <div class="flex text-left items-left justify-between">
            <p class="text-red-700 text-xl font-bold">P 475</p>
            <img class="w-20 h-auto" src="../assets/DuckRating.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col bg-gray-100 rounded-3xl p-4 h-80">
          <img class="w-40 h-40 rounded-3xl self-center mb-6" src="../assets//DuckMeal3.jpg" alt="" />
          <div class="flex-cols text-left items-left mb-6">
            <p class="font-bold text-xl">Wine Dip Duck</p>
            <p>Meat</p>
          </div>
          <div class="flex text-left items-left justify-between">
            <p class="text-red-700 text-xl font-bold">P 475</p>
            <img class="w-20 h-auto" src="../assets/DuckRating.png" alt="" />
          </div>
        </div>
        <div class="flex flex-col bg-gray-100 rounded-3xl p-4 h-80">
          <img class="w-40 h-40 rounded-3xl self-center mb-6" src="../assets//DuckMeal4.jpg" alt="" />
          <div class="flex-cols text-left items-left mb-6">
            <p class="font-bold text-xl">Barbecued Duck</p>
            <p>Meat</p>
          </div>
          <div class="flex text-left items-left justify-between">
            <p class="text-red-700 text-xl font-bold">P 475</p>
            <img class="w-20 h-auto" src="../assets/DuckRating.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
    .slide-enter-active {
        transition: transform 0.2s ease;
    }

    .slide-leave-active {
        transition: transform 0.2s ease;
    }

    .slide-enter-from, .slide-leave-to {
        transform: translateX(-100%);
    }
</style>
