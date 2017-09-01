<template>

<div class="post-input">

  <v-list id="inputty">

      <v-text-field v-model="artist_name" placeholder="Artist Name" id="one" v-if="one"/>

      <v-btn icon id="forwardArrow" @click="changeOne">
        <v-icon v-if="forwardArrowOne">arrow_forward</v-icon>
      </v-btn>


      <v-text-field v-if="two" v-model="title" label="Song Title" id="two" />

      <v-btn icon id="backArrow" @click="backToOne">
        <v-icon v-if="backArrowTwo">arrow_back</v-icon>
      </v-btn>

      <v-btn icon id="forwardArrow" @click="changeTwo">
        <v-icon v-if="forwardArrowTwo">arrow_forward</v-icon>
      </v-btn>


      <v-text-field v-if="three" v-model="url" label="Description" id="three"/>

      <v-btn icon id="backArrow" @click="backToTwo">
        <v-icon v-if="backArrowThree">arrow_back</v-icon>
      </v-btn>

      <v-btn icon id="forwardArrow" @click="changeThree">
        <v-icon v-if="forwardArrowThree">arrow_forward</v-icon>
      </v-btn>

      <v-text-field v-if="four" id="four" v-model="description" label="Sample URL/Embed"/>

      <v-btn icon id="backArrow" @click="backToThree">
        <v-icon v-if="backArrowFour">arrow_back</v-icon>
      </v-btn>

      <v-btn @click="addPost" icon id="forwardArrow">
        <v-icon v-if="forwardArrowFour">check</v-icon>
      </v-btn>
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
        show:true,
        one: true,
        forwardArrowOne: true,
        backArrowTwo:false,
        two: false,
        forwardArrowTwo: false,
        three: false,
        forwardArrowThree: false,
        backArrowThree:false,
        four: false,
        forwardArrowFour: false,
        backArrowFour:false
    }
  },
  methods: {
    addPost() {
      this.show = !this.show
      this.$store.dispatch('addPost', [this.artist_name,this.title,this.url,this.description])
      this.artist_name='',
      this.title='',
      this.url='',
      this.description=''
    },
    changeOne() {
      this.one = false
      this.forwardArrowOne = false
      this.two = true
      this.forwardArrowTwo = true
      this.backArrowTwo=true

    },
    changeTwo() {
      this.two = false
      this.backArrowTwo = false
      this.forwardArrowTwo = false
      this.three = true
      this.forwardArrowThree = true
      this.backArrowThree=true
    },
    changeThree() {
      this.three = false
      this.backArrowThree = false
      this.forwardArrowThree = false
      this.four = true
      this.forwardArrowFour = true
      this.backArrowFour=true
    },
    backToOne() {
      this.two = false
      this.backArrowTwo = false
      this.forwardArrowTwo = false
      this.one = true
      this.forwardArrowOne = true
    },
    backToTwo() {
      this.three = false
      this.backArrowThree = false
      this.forwardArrowThree = false
      this.two = true
      this.backArrowTwo = true
      this.forwardArrowTwo = true
    },
    backToThree() {
      this.four = false
      this.backArrowFour = false
      this.forwardArrowFour = false
      this.three = true
      this.forwardArrowThree = true
      this.backArrowThree = true

    }
  }
}
</script>
