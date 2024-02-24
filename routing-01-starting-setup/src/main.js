import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

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
      name: 'teams',
      path: '/teams',
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    // { path: '/users', component: UsersList },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UserFooter,
      },
    },
    // { path: '/teams/:teamId', component: TeamMembers, props: true },
    // props:true -> TeamMembers component when loaded with dynamic parameter in that component props
    // handle edilmemiş geri kalan tüm url combination'lar için
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
