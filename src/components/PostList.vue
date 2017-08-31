<template>
<v-carousel :interval=6000000>

  <v-carousel-item v-for="post in posts" src="/">
    <v-card id="card">
      <v-card-media>
      <img id="imagey" />
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{post.sample_artist}}</h3>
          <h4 class="headline mb-0">{{post.sample_title}}</h4>
          <div>{{post.sample_description}}</div>
        </div>
      </v-card-title>
      <v-card-actions>

        <v-btn icon @click="showComments = !showComments">
            <v-icon>comment</v-icon>
        </v-btn>

        <v-btn icon :href="post.sample_url">
          <v-icon>play_circle_filled</v-icon>
        </v-btn icon>

        <v-btn icon @click="deletePost">
          <v-icon>delete</v-icon>
        </v-btn>

      </v-card-actions>
    </v-card>

    <v-card id="card2" v-for="comment in posts" v-if="showComments" style="height:200px;">
      <v-card-media v-if="comment.sample_id == post.id">
        {{comment.beat_url}}
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{comment.producer_name}}</h3>
          <h4 class="headline mb-0">{{comment.beat_title}}</h4>
          <div>{{comment.beat_description}}</div>
        </div>
      </v-card-title>
      <v-card-actions>

        <v-btn icon @click="favoriteIt" v-if="!favorited">
          <v-icon>favorite_border</v-icon>
        </v-btn>

        <v-btn icon v-else @click="favorited = !favorited">
          <v-icon>favorite</v-icon>
        </v-btn>
        <span>{{comment.vote_count}}</span>
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
      showComments: false,
      favorited:false
    }
  },

  methods: {
    deletePost(){
      this.$store.dispatch('deletePost',this.post)
    }
},

  computed: {
    posts() {
      return this.$store.state.posts
    }
  }

}
</script>
