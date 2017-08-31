import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    posts: [],
    show: false
  },
  mutations: {
    addPost(state, [artist_name, title, url, description]) {
      axios.post(`http://localhost:8000/posts`, {
        artist_name: artist_name,
        title: title,
        description: description,
        url: url
      }).then(res => state.posts = res.data)
    },
    showInput(state){
      state.show = !state.show
    },

    deletePost(state, payload){
      console.log('MUTATION PAYLOAD',payload)
      state.posts = state.posts.filter(sample => sample.sample_id != payload.sample_id)
      axios.delete(`http://localhost:8000/posts/${payload.id}`)
      .then(res => state = res.data)
    }
  },
  actions: {
    addPost(context, [artist_name, title, url, description]) {
      context.commit('addPost',[artist_name, title, url, description])
    },
    deletePost(context, payload){
      console.log('ACTION PAYLOAD',payload)
      context.commit('deletePost',payload)
    },

    showInput(context){
      context.commit('showInput')
    }
  }
});
