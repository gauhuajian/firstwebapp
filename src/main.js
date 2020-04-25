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
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')