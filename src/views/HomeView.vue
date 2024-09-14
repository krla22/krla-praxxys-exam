<script setup lang="ts">
    import { ref } from 'vue'
    import SideBar from '../components/SideBar.vue'
    import SpecialOffers from '../components/SpecialOffers.vue';
    import Category from '../components/Category.vue';
    import WhatsNew from '../components/WhatsNew.vue';
    import MostPopular from '../components/MostPopular.vue';
    import OrderNowButton from '../components/OrderNowButton.vue';

    const isSidebarVisible = ref(false)

    const showSideBar = () => {
        isSidebarVisible.value = !isSidebarVisible.value
    }
</script>

<template> 
    <OrderNowButton />
    <div :class="['flex flex-col h-full', isSidebarVisible ? 'pt-3 bg-gray-300' : ' bg-white']">
        <Transition name="slide">
            <SideBar v-if="isSidebarVisible" :class="['', isSidebarVisible ? 'block' : 'hidden']"/>
        </Transition>
        <section :class="['flex flex-col overflow-hidden text-center', isSidebarVisible ? 'ml-80 -mr-80' : '']">
            <div :class="['flex', isSidebarVisible ? 'my-8 pl-9 overflow-hidden' : 'mx-9 my-10']">
                <i class="pi pi-circle-fill absolute text-yellow-500 left-14 top-11 text-sm"></i>
                <button class="pi pi-bars text-red-600 text-2xl" @click="showSideBar"></button>
                <div class="flex items-center mx-12">
                    <span class="pi pi-crown text-xl px-4 text-yellow-500"></span>
                    <span class="text-lg px-2"><p class="font-bold">0 Points</p></span>
                    <span class="pi pi-arrow-right text-lg px-2 text-red-500"></span>
                </div>
                <span class="pr-2"><img src="/src/assets/profile.png" class="h-auto w-10"></span>
            </div>
            <div class="flex mx-6">   
                <img src="../assets/Duck2.png" class="w-20 h-full my-2 mx-4">
                <div>
                    <p class="text-left">Quack quack!</p>
                    <p class="text-left text-3xl font-semibold">What do you want to eat?</p>
                </div>
            </div>
            <div class="flex relative items-center m-6">
                <input type="text" placeholder="Try our new Roasted Duck!"
                    class=" w-full h-full border-2 p-5 text-center bg-gray-50 rounded-2xl"
                >
                <i class="pi pi-search absolute left-12 text-red-700 text-xl"></i>
            </div>
            <SpecialOffers />
            <Category />
            <WhatsNew />
            <MostPopular />
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
