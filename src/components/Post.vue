<div class="post">

  <v-carousel-item src="/">
    <v-card id="card">
      <v-card-media>
      <iframe width="auto" height="auto" scrolling="no" frameborder="no" src={{post.sample_url}}>
      </iframe>

      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{post.sample_artist}}</h3>
          <h4 class="headline mb-0">{{post.sample_title}}</h4>
          <div>Solid sample. Could make for a cool lofi beat</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn icon>
          <v-icon>{{post.sample_description}}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-carousel-item>

</div>
