<template>
  <v-carousel interval=6000000>
    <Post v-for="posts in posts" :posts="posts" />
  </v-carousel>
</template>


<script>
import Post from './Post.vue';

console.log('LOOK AT ME', this);

export default {
  name: 'post-list',
  components: {
    Post
  },
  data() {
    return {}
  },

  computed: {
    posts() {
      return this.$store.state.posts
    }
  }

}
</script>
