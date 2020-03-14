import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Cookies from 'js-cookie'

import Element from "element-ui";

import 'normalize.css/normalize.css'

import '@/styles/index.scss' // global css

import '@/permission'

Vue.config.productionTip = false;

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
