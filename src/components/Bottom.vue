<template>

<div class="bottom">

<div v-if="!switched">
  <v-bottom-nav fixed value="true" class="white">
  <v-btn flat dark class="black--text" @click="toggleInput">
    <span>Add Sample</span>
    <v-icon>add</v-icon>
  </v-btn>
  </v-bottom-nav>
</div>

<div v-else>
<v-bottom-nav fixed value="true" class="white">
<v-btn flat dark class="black--text" @click="toggleInput">
  <span>Cancel</span>
  <v-icon>close</v-icon>
</v-btn>

</v-bottom-nav>
</div>

</div>

</template>


<script>
export default {
  name: 'bottom',
  data() {
    return {
      switched:false
    }
  },
  computed:{

  },
    methods:{
      toggleInput(){
        this.switched = !this.switched
        this.$store.dispatch('showInput')
      }
    }
}
</script>
