import Vue from 'vue'
import App from './App'
//import VueI18n from 'vue-i18n';
import i18n from './i18n/i18n'

Vue.config.productionTip = false
//Vue.use(VueI18n)

/*const i18n = new VueI18n({
  locale: 'cn',
  messages: {
    cn: {
      introduction: {
        name: '林喜海'
      }
    },
    en: {
      introduction: {
        name: 'seahi'
      }
    }
  }
})
*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
