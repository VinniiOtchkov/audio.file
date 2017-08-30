<template>
<div class="post">

  <v-carousel-item src="/">
    <v-card id="card">
      <v-card-media>
        <iframe width="auto" height="auto" scrolling="no" frameborder="no" :src="posts.sample_url">
      </iframe>

      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{posts.sample_artist}}</h3>
          <h4 class="headline mb-0">{{posts.sample_title}}</h4>
          <div>{{posts.sample_description}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn icon>
          <v-icon>comment</v-icon>
        </v-btn>
        <span>-Submitted by Vinnii Otchkov</span>
      </v-card-actions>
    </v-card>
  </v-carousel-item>

</div>
</template>

<script>
console.log('this', this.props)
export default {
  name: 'post',
  props: ['posts'],

  data() {
    return {}
  }


}
</script>
