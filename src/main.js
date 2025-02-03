import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

// using pinia in our app
app.use(pinia);

// using router in our app
app.use(router);

app.mount('#app');
// using route

