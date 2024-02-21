import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Tanımlı sayfayı localhost:8080/ da getirir
    // { path: '/', component: TeamsList },
    // Tanımlı sayfa 'localhost:8080/' geldiğinde localhost:8080/teams 'e redirect eder ( url değişerek )
    { path: '/', redirect: '/teams' },
    // Var olan path'e alias tanımlayarak ilgili alias'a istek geldiğinde url'i değiştirmeden belirtilen component'i getirir.
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        { path: '/teams/:teamId', component: TeamMembers, props: true },
    // props:true -> TeamMembers component when loaded with dynamic parameter in that component props
    // handle edilmemiş geri kalan tüm url combination'lar için
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
