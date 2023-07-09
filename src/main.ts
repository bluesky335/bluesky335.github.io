import { createApp } from 'vue';
import './styles/style.scss';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

const app = createApp(App).use(i18n).use(router);

app.mount('#app');
