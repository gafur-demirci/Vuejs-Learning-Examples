import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamFooter from './pages/TeamFooter.vue';
import UserFooter from './pages/UserFooter.vue';

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
      meta: { needsAuth: true },
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
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
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
  if (to.meta.needsAuth) {
    console.log('Needs Auth!');
    next();
  } else {
    next();
  }
  // next();
});

router.afterEach((to, from) => {
  // sending analytics data from to the server
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
