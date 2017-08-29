<div class="footer">

<template v-if="!show">
  <v-bottom-nav fixed value="true" class="white">
  <v-btn flat dark class="black--text" v-on:click="show = !show">
    <span>Add Sample</span>
    <v-icon>add</v-icon>
  </v-btn>
  </v-bottom-nav>
</template>

<template v-else>
<v-bottom-nav fixed value="true" class="white">
<v-btn flat dark class="black--text" v-on:click="show = !show" type="submit">
  <span>Submit Sample</span>
  <v-icon>check</v-icon>
</v-btn>

</v-bottom-nav>
</template>

</div>
