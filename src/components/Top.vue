<template>
<div class="top">

  <v-toolbar fixed>
    <v-btn icon href="/">
      <v-icon>home</v-icon>
    </v-btn>

    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>

  </v-toolbar>

</div>
</template>


<script>
export default {
  name: 'top',
  data() {
    return {
      title:'audio.file'
    }
  },
  methods: {
  }
}
</script>
