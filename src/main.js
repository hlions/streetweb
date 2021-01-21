import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import requests from './api/requests';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.prototype.$requests = requests;
Vue.use(Element)


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount("#app");
