import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import FastClick from 'fastclick'
import './assets/js/font'
import './assets/css/iconfont.css'

FastClick.attach(document.body);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')