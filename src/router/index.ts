import { createRouter, createWebHistory } from "vue-router";
import OrderView from "../views/OrderView.vue";
import OrderSummary from "../views/OrderSummary.vue";
import OrderReceived from "../views/OrderReceived.vue";
import HomeView from "../views/HomeView.vue";
import FoodListing from "../views/FoodListing.vue";
import LoyaltyPage from "../views/LoyaltyPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'homepage',
            component: HomeView
        },
        {
            path: '/food/cooked-duck',
            name: 'order-view',
            component: OrderView
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: OrderSummary
        },
        {
            path: '/checkout/success',
            name: 'successful-checkout',
            component: OrderReceived
        },
        {
            path: '/food',
            name: 'our-food',
            component: FoodListing,
        },
        {
            path: '/loyalty',
            name: 'loyalty',
            component: LoyaltyPage,
        }
    ]
})

export default router;