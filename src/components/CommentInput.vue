<template>

<div class="comment-input">

  <v-list id="inputty">

      <v-text-field v-model="producer_name" label="Artist Name" id="testing" />

      <v-text-field v-model="beat_title" label="Song Title" id="testing" />

      <v-text-field v-model="beat_url" label="Description" id="testing"/>

      <v-text-field v-model="beat_description" label="Sample URL/Embed" id="testing"/>

      <btn @click="addPost" class="btn">submit</btn>

  </v-list>
</div>
</template>

<script>
export default {
  name: 'comment-input',
  data() {
    return {
        producer_name: '',
        beat_title: '',
        beat_url: '',
        beat_description: '',
        show:true,
        one:false,
        two:false,
        three:false,
        four:false
    }
  },
  methods: {
    addPost() {
      this.show=!this.show
      this.$store.dispatch('addPost', [this.artist_name,this.title,this.url,this.description])
      this.artist_name='',
      this.title='',
      this.url='',
      this.description=''
    }
  },

}
</script>
