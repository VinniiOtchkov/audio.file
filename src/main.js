import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import { store } from './store'
import axios from 'axios';

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  mounted() {
    axios.get(`http://localhost:8000`).then(res =>
      this.$store.state.posts = res.data
    )},
      render: h => h(App)
});
