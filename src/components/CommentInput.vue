<template>
<div class="comment-input">

  <v-list id="inputty">

    <input type="hidden" v-model="post_id" id="zero">
  </input>

    <v-text-field v-model="producer_name" placeholder="Producer Name" id="one" v-if="one">
    </v-text-field>

    <v-btn icon id="forwardArrow" @click="changeOne">
      <v-icon v-if="forwardArrowOne">arrow_forward</v-icon>
    </v-btn>

    <v-text-field v-if="two" v-model="beat_title" label="Beat Title" id="two" />

    <v-btn icon id="backArrow" @click="backToOne">
      <v-icon v-if="backArrowTwo">arrow_back</v-icon>
    </v-btn>

    <v-btn icon id="forwardArrow" @click="changeTwo">
      <v-icon v-if="forwardArrowTwo">arrow_forward</v-icon>
    </v-btn>

    <v-text-field v-if="three" v-model="beat_description" label="Description" id="three" />

    <v-btn icon id="backArrow" @click="backToTwo">
      <v-icon v-if="backArrowThree">arrow_back</v-icon>
    </v-btn>

    <v-btn icon id="forwardArrow" @click="changeThree">
      <v-icon v-if="forwardArrowThree">arrow_forward</v-icon>
    </v-btn>

    <v-text-field v-if="four" v-model="beat_url" label="Beat URL/Embed" id="four" />

    <v-btn icon id="backArrow" @click="backToThree">
      <v-icon v-if="backArrowFour">arrow_back</v-icon>
    </v-btn>

    <v-btn icon @click="addComment" id="forwardArrow">
      <v-icon v-if="forwardArrowFour">check</v-icon>
    </v-btn>

  </v-list>
</div>
</template>

<script>
export default {
  name: 'comment-input',
  data() {
    return {
      post_id:1,
      producer_name: '',
      beat_title: '',
      beat_url: '',
      beat_description: '',
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
    addComment() {
      this.four = false
      this.forwardArrowFour = false
      this. backArrowFour = false

      this.$store.dispatch('addComment', [this.post_id,this.producer_name, this.beat_title, this.beat_url, this.beat_description])
      this.post_id=1,
      this.producer_name = '',
        this.beat_title = '',
        this.beat_url = '',
        this.beat_description = ''
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

<style scoped>





</style>
