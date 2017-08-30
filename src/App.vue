<template>
<v-app>
  <top></top>

  <br><br><br>

  <main>
    <v-container fluid>
      <v-layout column align-center>

        <img id="icon" src="/public/icon.png" alt="audio.file" @click="show2 = !show2" v-on:mouseover="hovered = true">

        <v-slide-y-transition>
          <span v-if="hovered">friendly sampling competition</span>
        </v-slide-y-transition>

        <div v-if="show">
          <post-input />
        </div>

        <br />
        <br />
        <br />

        <div v-if="show2">
          <post-list />
        </div>

      </v-layout>
    </v-container>
  </main>

  <bottom @click="show = !show" />

</v-app>
</template>

<script>
import Top from './components/Top.vue';
import PostInput from './components/PostInput.vue';
import PostList from './components/PostList.vue';
import Bottom from './components/Bottom.vue';

export default {
  name: 'app',
  components: {
    Top,
    PostInput,
    PostList,
    Bottom
  },
  data() {
    return {
      clipped: false,
      fixed: false,
      miniVariant: false,
      right: true,
      title: 'audio.file',
      show: false,
      show2: false,
      hovered: false
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
