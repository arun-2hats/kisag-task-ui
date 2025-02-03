import Home from '@/views/Home.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: import('../views/About.vue') //lalzy loading technique
        },
        {
            path: '/product-view/:id',
            name: 'product-view',
            component: import('../views/ProductView.vue'), //lalzy loading technique
            props: true
        },
        {
            path: '/product-list',
            name: 'product-list',
            component: import('../views/ProductsList.vue'), //lalzy loading technique
            props: true
        }
    ]
})

export default router;