<template>

<div class="bottom">

<div v-if="!switched">
  <v-bottom-nav fixed value="true" class="white">
  <v-btn flat dark class="black--text" v-on:click="switched = !switched">
    <span>Add Sample</span>
    <v-icon>add</v-icon>
  </v-btn>
  </v-bottom-nav>
</div>

<div v-else>
<v-bottom-nav fixed value="true" class="white">
<v-btn flat dark class="black--text" v-on:click="switched = !switched" type="submit">
  <span>Submit Sample</span>
  <v-icon>check</v-icon>
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
}
</script>
