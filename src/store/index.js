import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'

if (!localStorage.city) {
  defaultCity = '北京'
} else {
  defaultCity = localStorage.city
}


export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, cityName) {
      state.city = cityName
      localStorage.city = cityName
    }
  },
  actions: {},
  modules: {}
})