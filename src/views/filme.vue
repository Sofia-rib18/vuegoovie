<template>
  <div>
    <div v-if="film">
      <div>
        <iframe
          width="560"
          height="315"
          :src="film.trailer"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <b-container>
        <b-row>
          <b-col>
            <b-img
              left
              style="max-height: 200px; margin-top: 50px; margin-left: 100px"
              :src="film.poster"
              alt="Left image"
            ></b-img>
          </b-col>
          <b-col>
            <h1>{{ film.title }}</h1>
            <p>{{ film.genre.join(" | ") }}</p>
          </b-col>
          <b-col>
            <b-icon icon="star" font-scale="2"></b-icon>
            <b-icon icon="heart" font-scale="2"></b-icon>
            <b-icon icon="check-circle" font-scale="2"></b-icon>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p>
              {{ film.year }} | {{ film.time }} | IMDB: {{ film.imdbScore
              }}<b-icon icon="star-fill" font-scale="1"></b-icon>
            </p>
          </b-col>
          <b-col>
            <h3>Director:</h3>
          </b-col>
          <b-col
            ><p v-for="(director, index) in film.director" :key="index">
              <b-link
                @click="
                  $router.push({
                    name: 'director',
                    params: { directorId: director.id },
                  })
                "
                >{{ director.name }}</b-link
              >
            </p></b-col
          >
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col>
            <h1>Sipnose</h1>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col
            ><p>
              {{ film.sipnose }}
            </p></b-col
          >
          <b-col></b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col>
            <h1>Cast</h1>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-card-group deck v-for="(actor, index) in film.actors" :key="index">
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                :src="actor.photo"
              ></b-card-img>
              <b-card-title>{{ actor.name }}</b-card-title>
              <b-button
                href="#"
                variant="primary"
                @click="
                  $router.push({ name: 'actor', params: { actorId: actor.id } })
                "
                >View more</b-button
              >
            </b-card>
          </b-card-group>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <h1>Reviews</h1>
        </b-row>
        <b-form inline>
          <b-col>
            <b-form-input
              placeholder="Write your opinion about the movie here... "
              type="text"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-button variant="primary">Publish</b-button>
          </b-col>
        </b-form>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Film",
  data() {
    return {
      film: [],
    };
  },
  created() {
    this.filme();
  },
  computed: {
    ...mapGetters(["getFilm"]),
  },
  methods: {
    filme() {
      this.film = this.getFilm(this.$route.params.filmeId);
      console.log(this.$route.params.filmeId);
      console.log(this.film);
    },
  },
};
</script>

<style>
</style>