<template>
<div class="post">

    <v-card id="card">
      <v-card-media>
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{post.sample_artist}}</h3>
          <h4 class="headline mb-0">{{post.sample_title}}</h4>
          <div>{{post.sample_description}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn icon>
          <v-icon>comment</v-icon>
        </v-btn>
        <span>-Submitted by Vinnii Otchkov</span>
      </v-card-actions>
    </v-card>

</div>
</template>

<script>
console.log('this', this)
export default {
  name: 'post',
  props: ['post'],

  data() {
    return {}
  }


}
</script>
