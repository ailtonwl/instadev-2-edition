import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import posts from './posts';
import user from './user';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      posts,
      user,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
}
