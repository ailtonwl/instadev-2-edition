import Vue from 'vue';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 15000,
});
Vue.prototype.$axios = instance;
