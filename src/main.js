import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import { store } from './store/index'


Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
