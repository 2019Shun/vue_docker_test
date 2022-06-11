import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'; // Add

const app = createApp(App);
app.use(router); // Add
app.mount('#app');