<template>
<v-carousel v-if="show2" interval=6000000>

  <Post v-for="post in posts" :post="post">


  </Post>
</v-carousel>
</template>


<script>
console.log('thisshit', this)
import Post from './Post.vue';

export default {
  name: 'post-list',
  props: ['posts'],
  components: {
    Post
  },
  data() {
    console.log("LOL", this);

    return {
      something: ''
    }
  },

  computed: {
    posts() {
      return this.$store.state.posts
    }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
