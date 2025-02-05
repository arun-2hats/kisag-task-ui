import './main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

// using router in our app
app.use(router);
// using pinia in our app
app.use(pinia);


app.mount('#app');
// using route

