import Vue from 'vue';
import VueSession from 'vue-session';
import $ from "jquery/dist/jquery";
import _ from 'lodash';

import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';

window.$ = window.jQuery = $;

Object.defineProperty(Vue.prototype, '_', { value: _ });
window._ = _;

import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';

import "./assets/js/home.js";

Vue.config.productionTip = false;
Vue.use(VueSession);

import AOS from 'aos'
import 'aos/dist/aos.css'

new Vue({
  created() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
