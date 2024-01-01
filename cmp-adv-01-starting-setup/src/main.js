import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);
// Vue app'a component bağlama (Global olarak tanımlama.)

app.component('base-badge', BaseBadge);

// Vue app'i app id'li yapıya bağlama
app.mount('#app');