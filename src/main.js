import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import { store } from './store';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes =[{path:'/home',component:App}];

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  mounted() {
    axios.get(`http://localhost:8000`).then(res =>{
      console.log('HERE',res)
      this.$store.state.posts = res.data
    })},
      render: h => h(App)
});
