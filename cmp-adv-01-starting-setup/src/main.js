import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);
// Vue app'a component bağlama (Global olarak tanımlama.)

app.component('base-badge', BaseBadge);
app.component('base-card',BaseCard);
// Vue app'i app id'li yapıya bağlama
app.mount('#app');