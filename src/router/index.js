import Home from '@/views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHistory(),
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
        }
    ]
})

export default router;