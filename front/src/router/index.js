import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import { ROUTES } from "@/config/constants";
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

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
