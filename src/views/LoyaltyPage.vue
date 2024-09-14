<script setup>
    import { ref } from 'vue'
    import SideBar from '../components/SideBar.vue'

    const isSidebarVisible = ref(false)

    const showSideBar = () => {
        isSidebarVisible.value = !isSidebarVisible.value
    }
</script>

<template>
    <section :class="['flex flex-col h-full', isSidebarVisible ? 'pt-3 bg-gray-300' : ' bg-white']">
        <Transition name="slide">
            <SideBar v-if="isSidebarVisible" :class="['', isSidebarVisible ? 'block' : 'hidden']"/>
        </Transition>
        <div :class="['flex flex-col overflow-hidden', isSidebarVisible ? 'ml-80 -mr-80' : '']">
            <div :class="['flex', isSidebarVisible ? 'my-8 pl-9 overflow-hidden' : 'mx-9 my-10']">
                <i class="pi pi-circle-fill absolute text-yellow-500 left-14 text-sm"></i>
                <button class="pi pi-bars text-red-600 text-2xl" @click="showSideBar"></button>
                <p class="font-bold text-2xl ml-6">Loyalty Points</p>
            </div>
            <div class="flex flex-col">
                <div class="px-6 flex items-center justify-between">
                    <div class="flex items-center">
                        <i class="pi pi-crown text-4xl px-4 text-yellow-500"></i>
                        <p class="font-semibold text-lg">Beginner Tier</p>
                    </div>
                    <div class="flex px-6">
                        <p class="font-semibold text-red-700">View All<i class="pi pi-caret-right text-xs ml-2"></i></p>
                    </div>
                </div>
                <div class="mx-6 my-4">
                    <p class="text-gray-600">Earn points by purchasing from our store. Eat more duck, earn more duck with us!</p>
                </div>
                
                <div class="flex items-center justify-center mt-6">
                    <div class="relative flex items-center justify-center w-48 h-48">
                        <div class="absolute inset-0 rounded-full border-[22px] border-red-200"></div>
                        <div class="relative text-center">
                            <p class="text-2xl font-bold">
                                0 / 160
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex m-6 justify-between">
                    <p class="font-bold text-xl">Rewards</p>
                    <p class="font-semibold text-red-700">How It Works<i class="pi pi-caret-right text-xs ml-2"></i></p>
                </div>

                <div class="flex mx-6 mb-3">
                    <button class="bg-red-700 text-white py-2 px-4 mr-2 rounded-2xl">
                        All
                    </button>
                    <button class="bg-gray-300 font-semibold text-gray-500 py-2 px-4 mr-2 rounded-2xl">
                        Beginner
                    </button>
                    <button class="bg-gray-300 font-semibold text-gray-500 py-2 px-4 mr-2 rounded-2xl">
                        Intermediate
                    </button>
                    <button class="bg-gray-300 font-semibold text-gray-500 py-2 px-4 mr-2 rounded-2xl">
                        Lotal
                    </button>
                </div>

                <div class="flex m-6 p-6 bg-gray-200 rounded-2xl">
                    <img class="w-24 h-auto rounded-xl mr-4" src="../assets/DuckMeal4.jpg" alt="">
                    <div class="items-center text-left">
                        <p class="font-semibold">Barbecued Duck</p>
                        <p class="text-xs mb-3">Meat</p>
                        <p><i class="pi pi-crown text-xl pr-2 text-yellow-500"></i>20 Points</p>
                    </div>
                </div>
            </div>
        </div>  
    </section>
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