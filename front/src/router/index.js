import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import LoginDashboard from '../views/LoginDashboard.vue';

import { ROUTES } from "@/config/constants";
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: Home
  },
  {
    path: ROUTES.DASHBOARD.path,
    name: ROUTES.DASHBOARD.name,
    component: Dashboard
  },
  {
    path: ROUTES.LOGIN_DASHBOARD.path,
    name: ROUTES.LOGIN_DASHBOARD.name,
    component: LoginDashboard
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (savedPosition) {
        setTimeout(() => {
          resolve(savedPosition);
        }, 200);
      } else if (to.hash) {
        setTimeout(() => {
          resolve({ selector: to.hash });
        }, 200);
      } else {
        setTimeout(() => {
          reject({ x: 0, y: 0 })
        }, 200);
      }
    })
  },
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
    } else {
      next({ path: ROUTES.LOGIN.path });
    }
  }
  next();
});

export default router;
