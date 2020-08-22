import Vue from 'vue';
import VueSession from 'vue-session';
import * as $ from "jquery/dist/jquery";
import _ from 'lodash';
import AOS from 'aos';
import Vuelidate from 'vuelidate';

//GENERAL
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';

//CONFIGS
global.$ = window.$ = window.jQuery = $;
Object.defineProperty(Vue.prototype, '_', { value: _ });
window._ = _;
Vue.config.productionTip = false;

//INTERFACES
import 'jquery-ui-dist/jquery-ui.min.js';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import "./assets/js/home.js";
import 'aos/dist/aos.css';

//USES
Vue.use(VueSession);
Vue.use(Vuelidate);

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
