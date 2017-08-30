<template>
<v-carousel :interval=6000000>

  <v-carousel-item v-for="post in posts" src="/">
    <v-card id="card">
      <v-card-media>
        {{post.sample_url}}
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{post.sample_artist}}</h3>
          <h4 class="headline mb-0">{{post.sample_title}}</h4>
          <div>{{post.sample_description}}</div>
        </div>
      </v-card-title>
      <v-card-actions>

        <v-btn icon v-on:click="showComments=!showComments">
          <v-icon>comment</v-icon>
        </v-btn>
        <span>-Submitted by Vinnii Otchkov</span>
      </v-card-actions>
    </v-card>

    <v-card id="card" v-for="post in posts" v-if="showComments">
      <v-card-media>
        {{post.beat_url}}
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{post.producer_name}}</h3>
          <h4 class="headline mb-0">{{post.beat_title}}</h4>
          <div>{{post.beat_description}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn icon>
          <v-icon v-on:click="">favorite</v-icon>
        </v-btn>
        <span>-Submitted by Vinnii Otchkov</span>
      </v-card-actions>
    </v-card>

  </v-carousel-item>

</v-carousel>
</template>


<script>
console.log('LOOK AT ME', this);

export default {
  name: 'post-list',
  components: {},
  data() {
    return {
      showComments: false
    }
  },

  computed: {
    posts() {
      return this.$store.state.posts
    }
  }

}
</script>
