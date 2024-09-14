<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router';

    const isActiveLink = (routerPath: any) => {
        const route = useRoute()
        return route.path === routerPath
    }
</script>

<template>
    <nav class="fixed left-0 top-0 h-full w-80 bg-white z-10 p-5 shadow-lg">
        <div class="flex items-center">
            <span class="pr-2"><img src="/src/assets/profile.png" class="h-auto w-20"></span>
            <RouterLink to="/loyalty" class="flex items-center">
                <span class="pi pi-crown text-xl px-4 text-yellow-500"></span>
                <span class="text-lg px-2"><p class="font-bold">0 Points</p></span>
                <span class="pi pi-arrow-right text-lg px-2 text-red-500"></span>
            </RouterLink>
        </div>
        <div class="pt-3 pb-5">
            <span><p class="text-3xl font-bold">Lord Ducky</p></span>
            <span><p class="text-base text-gray-500">+63 912 345  6789</p></span>
        </div>

        <div>
            <div class="mb-3">
                <span class="pi pi-home pb-5 pr-3 text-red-700"></span>
                <RouterLink to="/home" class="font-bold">
                    Home
                </RouterLink>
            </div>
            <div class="mb-3" @click="">
                <span :class="['pi pi-cart-arrow-down pb-5 pr-3', isActiveLink('/food') 
                ? 'text-red-500' 
                : '']"></span>
                <RouterLink to="/food" class="font-bold">
                    Order Now!
                </RouterLink>
            </div>
            <div class="mb-3">
                <span class="pi pi-bell pb-5 pr-3"></span>
                <RouterLink to="/" class="font-bold">
                    Notifications
                </RouterLink>
                <span  class="float-right bg-yellow-500 px-1.5 rounded-full">
                    <p class="text-sm text-white">4</p>
                </span>
            </div>
            <div class="mb-3">
                <span class="pi pi-shop pb-5 pr-3"></span>
                <RouterLink to="/" class="font-bold">
                    Store Locator
                </RouterLink>
            </div>
            <div class="mb-3">
                <span class="pi pi-question-circle pb-5 pr-3"></span>
            <RouterLink to="/" class="font-bold">
                FAQ's
            </RouterLink>
            </div>
        </div>
        <hr />
        <div>
            <div class="mb-3  mt-6">
                <span class="pi pi-bell pb-5 pr-3"></span>
                <RouterLink to="/" class="font-bold">
                    Notifications
                </RouterLink>
                <span  class="float-right bg-yellow-500 px-1.5 rounded-full">
                    <p class="text-sm text-white">4</p>
                </span>
            </div>
            <div class="mb-3">
                <span class="pi pi-home pb-5 pr-3"></span>
                <RouterLink to="/" class="font-bold">
                    My Orders
                </RouterLink>
            </div>
            <div class="mb-3">
                <span class="pi pi-cart-arrow-down pb-5 pr-3"></span>
                <RouterLink to="/food" class="font-bold">
                    Order Now!
                </RouterLink>
            </div>
            
            <div class="mb-3">
                <span class="pi pi-shop pb-5 pr-3"></span>
                <RouterLink to="/" class="font-bold">
                    Store Locator
                </RouterLink>
            </div>
            <div class="mb-3">
                <span class="pi pi-question-circle pb-5 pr-3"></span>
            <RouterLink to="/" class="font-bold">
                FAQ's
            </RouterLink>
            </div>

            <div>
                <button class="bg-red-700 text-white w-40 h-10 rounded-xl mt-10">Logout</button>
            </div>
        </div>
    </nav>
</template>
