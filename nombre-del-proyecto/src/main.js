import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router';

const app = createApp(App);
app.use(router);  // Integra vue-router con tu aplicación Vue
app.mount('#app');
