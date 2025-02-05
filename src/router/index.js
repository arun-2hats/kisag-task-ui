import Home from '@/views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue') //lalzy loading technique
        },
        {
            path: '/products',
            name: 'product-list',
            component: () => import('../views/List.vue'), //lalzy loading technique
        },
        {
            path: '/products/id=:id',
            name: 'product-view',
            component: () => import('../views/product/View.vue'), //lalzy loading technique
        },
        {
            path: '/products/category=:category',
            name: 'products',
            component: () => import('../views/Products.vue'), //lalzy loading technique
        },
    ]
})

export default router;