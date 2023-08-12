import { createApp } from 'vue'

import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
import App from './App.vue';

//Altta configlerin bağlandığı main App.vue'nun config'ini burada createApp'e veriyoruz.
const app = createApp(App);


// componentleri tag ile config objectlerini main vue app'te kullanmak için bildiriyoruz.
app.component('active-user', ActiveUser);
app.component('user-data', UserData);

app.mount('#app');

// Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

/*
Task 3 için user'ın datasını yönetmeyi kolay yoldan yapmak
için bu yönetimi main App.vue da yapmalıyız.(diğer comp'ler
ile iletişim halinde olduğu için)
*/
// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component