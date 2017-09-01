<template>
<v-carousel :interval=6000000>

  <v-carousel-item v-for="post in posts" src="/">
    <v-card id="card" style="height:200px;">
      <v-card-media>
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{post.artist_name}}</h3>
          <h4 class="headline mb-0">{{post.title}}</h4>
          <div>{{post.description}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <center id="buttons">

        <v-btn icon @click="showComments = !showComments">
            <v-icon>comment</v-icon>
        </v-btn>

        <v-btn target="blank" icon :href="post.url">
          <v-icon>play_circle_filled</v-icon>
        </v-btn icon>

        <v-btn icon @click="deletePost(post)">
          <v-icon>delete</v-icon>
        </v-btn>

      </center>
      </v-card-actions>
    </v-card>

    <v-card id="card2" v-for="comment in post.comments" v-if="showComments" style="height:200px;">
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

        <v-btn icon @click="likeComment(comment)" v-if="!favorited">
          <v-icon>favorite_border</v-icon>
        </v-btn>

        <v-btn icon v-else @click="favorited = !favorited">
          <v-icon>favorite</v-icon>
        </v-btn>
        <span>{{comment.vote_count}}</span>

        <v-btn icon id="commentPlay">
          <v-icon>play_arrow</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-carousel-item>

</v-carousel>
</template>


<script>

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
    deletePost(post){
      console.log('THIS.POST',post)
      this.$store.dispatch('deletePost',post)
    },

    likeComment(comment){
      console.log('COMMENT',comment)
      this.favorited = !this.favorited
      this.$store.dispatch('likeComment',comment)
    }
},

  computed: {
    posts() {
      console.log('LOL',this.$store.state)
      return this.$store.state.posts
    }
  }

}
</script>
