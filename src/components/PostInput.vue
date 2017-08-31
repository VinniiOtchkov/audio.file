<template>

<div class="post-input" v-if="show">

  <v-list id="inputty">

      <v-text-field v-model="artist_name" label="Artist Name" id="testing" />

      <v-text-field v-model="title" label="Song Title" id="testing" />

      <v-text-field v-model="url" label="Description" id="testing"/>

      <v-text-field v-model="description" label="Sample URL/Embed" id="testing"/>

      <btn @click="addPost" class="btn">submit</btn>

  </v-list>
</div>
</template>

<script>
export default {
  name: 'post-input',
  data() {
    return {
        artist_name: '',
        title: '',
        url: '',
        description: '',
        show:true
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
  }
}
</script>
