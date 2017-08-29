<template>
<v-app>

  <v-toolbar fixed>
    <v-btn icon href="/">
      <v-icon>home</v-icon>
    </v-btn>

    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>

  </v-toolbar>
  <main>
    <v-container fluid>
      <v-layout column align-center>
        <img id="icon" src="/public/icon.png" alt="audio.file" v-on:click="show2 = !show2" v-on:mouseover="active = true" />

        <v-slide-y-transition>
          <span v-if="active">friendly sampling competition</span>
        </v-slide-y-transition>

        <v-fade-transition>

          <v-list id="listy" v-if="show">
            <form v-on:submit.prevent>

              <v-text-field name="input-1" label="Artist Name" id="testing" />

              <v-text-field name="input-2" label="Song Name" id="testing" />

              <v-text-field name="input-3" label="Sample URL" id="testing" />
            </form>

          </v-list>

        </v-fade-transition>

        <br />
        <br />
        <br />

        <v-carousel v-if="show2" interval=6000000>
          <v-carousel-item src="/">
            <v-card id="card">
              <v-card-media src <iframe width="auto" height="auto" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/336570719&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">The Oddfather</h3>
                  <h4 class="headline mb-0">Take Cover</h4>
                  <div>Solid sample. Could make for a cool lofi beat</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn icon>
                  <v-icon>comment</v-icon>
                </v-btn>
                <span>-Submitted by Vinnii Otchkov</span>
              </v-card-actions>
            </v-card>
          </v-carousel-item>

          <v-carousel-item src="/">
            <v-card id="card">
              <v-card-media src <iframe width="auto" height="auto" src="https://www.youtube.com/embed/X4or-6CARlI" frameborder="0" allowfullscreen></iframe>
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Mario Molino</h3>
                  <h4 class="headline mb-0">Beba</h4>
                  <div>Super Mellow. Didn't want to give this one away.</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn icon>
                  <v-icon>comment</v-icon>
                </v-btn>
                <span>-Submitted by Jimmy Neutron</span>
              </v-card-actions>
            </v-card>
          </v-carousel-item>

        </v-carousel>
      </v-layout>
    </v-container>
  </main>


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

</v-app>

</template>

<script>
console.log('this', this);

export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      miniVariant: false,
      right: true,
      title: 'audio.file',
      show: false,
      show2: false,
      active: false
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<style>
body {
  font-family: 'Poiret One', cursive;
}

#icon {
  max-height: 200px;
  max-width: 200px;
  opacity: 0.95;
}


#card {
  background-color: transparent;
  overflow-y: scroll;
  height: 200px;
  width: 300px;
}

.input-group__details:after {
  background-color: black;
  color: black;
}

.input-group--text-field input,
.input-group--text-field textarea {
  caret-color: black;
  color: black;
}

.btn.btn--icon .btn__content .icon{
  color: black;
}

.carousel__controls{
  background-color: white;
}


#listy {
  height: 200px;
  width: 300px;
  background-color: transparent;
  float: left;
}
</style>
