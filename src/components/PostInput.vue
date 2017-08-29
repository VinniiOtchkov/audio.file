<v-list id="listy" v-if="show">

  <form v-on:submit.prevent class="form-control">

    <v-text-field name="input-1" label="Artist Name" id="testing" v-model="newPost.artistName" />

    <v-text-field name="input-2" label="Song Name" id="testing" v-model="newPost.title" />

    <v-text-field name="input-3" label="Sample URL" id="testing" v-model="newPost.url" />

    <v-text-field name="input-4" label="Description" id="testing" v-model="newPost.description" />

  </form v-on:submit="addBook">

</v-list>

<script>
export default {
  name: 'post-input',
  data() {
    return {
      newPost:{
        artistName:'',
        title:'',
        url:'',
        description:''
      },
      show: false
    }
  },
  methods: {
    addPost() {
      this.$emit('addPost', this.newPost)
    },
  }
}
</script>
