<script setup lang="ts">

</script>

<template>
    <div class="p-6">
        <div class="flex items-center justify-start mb-4">
            <RouterLink to="/food/cooked-duck">
                <button class="pi pi-arrow-left text-2xl text-gray-600"></button>
            </RouterLink>
            <h1 class="text-2xl font-bold ml-6">Order Summary</h1>
        </div>
        <div class="flex flex-col">
            <div class="flex">
                <div class="flex flex-col bg-gray-200 p-5 w-full rounded-3xl mb-2">
                    <p class="font-semibold pb-2">Lord Ducky</p>
                    <p class="text-gray-500">+63 912 345 6789</p>
                    <p class="text-gray-500">lordducky@gmail.com</p>
                </div>
                <i class="pi pi-ellipsis-v text-yellow-500 text-3xl pt-11"></i>
            </div>
            <div class="flex">
                <div class="flex flex-col bg-gray-200 p-5 w-full rounded-3xl mb-2">
                    <p class="font-semibold pb-2">My Home Address</p>
                    <p class="text-gray-500">No. 21, St. Agustin St., Brgy. Jose, Delgado City, 2234, Philippines</p>
                </div>
                <i class="pi pi-ellipsis-v text-yellow-500 text-3xl pt-11"></i>
                <i class="pi pi-heart-fill text-yellow-500 text-xl absolute right-20 top-56"></i>
            </div>
            <div class="flex">
                <div class="flex flex-col bg-gray-200 p-5 w-full rounded-3xl mb-2">
                    <p class="font-semibold pb-2">Work/Office</p>
                    <p class="text-gray-500">3rd Floor, Anyeong Bldg., St. Joaqin City, 3456, Philippines</p>
                </div>
                <i class="pi pi-ellipsis-v text-yellow-500 text-3xl pt-11"></i>
                <i class="pi pi-heart text-yellow-500 text-xl absolute right-20 top-80 pt-8"></i>
            </div>
        </div>

        <div class="flex mb-4">
            <div class="flex flex-col pt-4">
                <p class="font-bold text-xl pb-2">Orders</p>
                <div class="flex flex-col bg-gray-200 p-5 w-full rounded-3xl mb-2 mr-14">
                    <div class=" flex">
                        <img class="w-20 h-20 rounded-2xl" src="../assets/DuckMeal1.jpg" alt="">
                        <div class="pl-8">
                            <p class="font-semibold pb-2">Wine Dip Duck</p>
                            <p class="text-gray-500">1x 20 Yrs Old Wine</p>
                            <p class="text-gray-500">1x Fresh Duck</p>
                        </div>
                    </div>
                    <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700">
                    <div class="flex items-center justify-between">
                        <p class="text-red-700 font-semibold text-lg">P 475</p>
                        <div class="flex items-center">
                            <i class="pi pi-minus-circle text-red-700 text-lg"></i>
                            <p class="px-4 font-semibold">1</p>
                            <i class="pi pi-plus-circle text-red-700 text-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            <i class="pi pi-ellipsis-v text-yellow-500 text-3xl pt-36"></i>
        </div>

        <div>
            <p class="font-bold text-xl mb-2">Payment Options</p>
            <div class="flex flex-col">
            <div class="flex">
                <div class="flex flex-col bg-gray-200 p-5 w-full rounded-3xl mb-2">
                    <p class="font-semibold pb-2">Cash on Delivery</p>
                    <p class="text-gray-500 text-sm">Pay when you received the order</p>
                </div>
                <i class="pi pi-heart-fill text-yellow-500 text-xl pt-6 right-11 absolute"></i>
            </div>
            <div class="flex">
                <div class="flex flex-col bg-gray-200 p-5 w-full rounded-3xl mb-2">
                    <p class="font-semibold pb-2">Loyalty Points<span class="text-red-700 pl-2">(0 Points)</span></p>
                    <p class="text-gray-500  text-sm">Pay using your earned loyalty points</p>
                </div>
                <i class="pi pi-heart text-yellow-500 text-xl pt-6 right-11 absolute"></i>
            </div>
            <div class="flex">
                <div class="flex flex-col bg-gray-200 p-5 w-full rounded-3xl mb-2">
                    <img class="w-20 mb-2" src="../assets/GCash.png" alt="">
                    <p class="text-gray-500  text-sm">A new tab will open access to your account</p>
                </div>
                <i class="pi pi-heart text-yellow-500 text-xl pt-6 right-11 absolute"></i>
            </div>
            <div class="flex">
                <div class="flex flex-col bg-gray-200 p-5 w-full rounded-3xl mb-2">
                    <img class="w-20 mb-2" src="../assets/Paypal.png" alt="">
                    <p class="text-gray-500  text-sm">Pay your meal using PayPal services</p>
                </div>
                <i class="pi pi-heart text-yellow-500 text-xl pt-6 right-11 absolute"></i>
            </div>
        </div>

        <div class="flex flex-col mb-14">
            <div class="flex justify-between pt-4 pb-2">
                <p class="font-semibold">Subtotal</p>
                <p class="font-semibold">P 475</p>
            </div>
            <div class="flex justify-between">
                <p class="font-semibold">Delivery Charge</p>
                <p class="font-semibold">P 55</p>
            </div>
            <div class="flex relative items-center mt-4 mb-2">
                <p class="absolute text-sm pb-9 pl-6 text-gray-700">Change for</p>
                <input type="text" placeholder="e.g. 1000"
                    class="w-full h-18 border-2 p-5 text-start bg-gray-50 rounded-2xl"
                >
            </div>
        </div>
        </div>
    </div>
    
    <div class="py-4 px-6 fixed flex bg-white w-full bottom-0 justify-between border-t-2">
            <div class="pr-6">
                <p class="text-sm">Grand Total</p>
                <p class="font-semibold">P 244</p>
            </div>
            <RouterLink to="/checkout/success">
                <button class="bg-red-700 text-white font-semibold w-56 py-2 rounded-2xl">Place Order</button>
            </RouterLink>
        </div>
</template>
