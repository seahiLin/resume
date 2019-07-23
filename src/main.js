import Vue from 'vue';
import App from './App';
import i18n from './i18n/i18n';
import store from './store/index';
import router from './router/index';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App)
})
