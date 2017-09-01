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

    // addComment(state, [artist_name, title, url, description]) {
    //   axios.post(`http://localhost:8000/posts`, {
    //     artist_name: artist_name,
    //     title: title,
    //     description: description,
    //     url: url
    //   }).then(res => state.posts = res.data)
    // },

    showInput(state){
      state.show = !state.show
    },

    likeComment(state, payload){
      console.log('payload in store', payload);
      axios.patch(`http://localhost:8000/comments/`+ payload.id, payload).then(res => state.posts = res.data)
    },

    deletePost(state, payload){
      console.log('MUTATION PAYLOAD',payload)
      state.posts = state.posts.filter(sample => sample.id != payload.id)
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

    likeComment(context,payload){
      context.commit('likeComment',payload)
    },

    showInput(context){
      context.commit('showInput')
    }
  }
});
