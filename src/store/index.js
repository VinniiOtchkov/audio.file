import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    posts: [],
    show: false,
    show2:false
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

    addComment(state, [producer_name, beat_title, beat_url, beat_description]) {
      axios.post(`http://localhost:8000/comments`, {
        producer_name: producer_name,
        beat_title: beat_title,
        beat_description: beat_description,
        beat_url: beat_url
      }).then(res => state.posts = res.data)
    },

    showInput(state){
      state.show = !state.show
    },
    showInput2(state){
      state.show2 = !state.show2
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
    addComment(context, [producer_name, beat_title, beat_url, beat_description]) {
      context.commit('addComment',[producer_name, beat_title, beat_url, beat_description])
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
    },
    showInput2(context){
      context.commit('showInput2')
    }
  }
});
