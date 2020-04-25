import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '../components/home/Home.vue'
const routes = [

  {
    path: '',
    rederect: '/home'
  },
  {
    path: '/home',
    components: home
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router