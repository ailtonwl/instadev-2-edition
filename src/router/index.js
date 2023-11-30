import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  Router.beforeEach((to, from, next) => {
    const { token } = store.state.auth;
    if (to.name !== 'login' && !token) {
      return next({ name: 'login' });
    }
    if (to.name === 'login' && token) {
      return next({ name: 'main' });
    }
    return next();
  });
  return Router;
}
