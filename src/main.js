import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard';
import BaseDialog from './components/UI/BaseDialog';
const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.mount('#app');
