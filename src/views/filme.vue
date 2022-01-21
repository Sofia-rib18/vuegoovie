<template>
  <div id="app1">
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
      <b-container id="container1">
        <b-row>
          <b-col>
            <b-img
              left
              style="max-height: 200px"
              :src="film.poster"
              alt="Left image"
            ></b-img>
          </b-col>
          <b-col>
            <h1>{{ film.title }}</h1>
            <p style="color: #fff8f7">{{ film.genre.join(" | ") }}</p>
          </b-col>
          <b-col>
            <b-icon icon="star" font-scale="2" style="color: #baa5a3"></b-icon>
            <b-icon icon="heart" font-scale="2" style="color: #baa5a3"></b-icon>
            <b-icon
              icon="check-circle"
              font-scale="2"
              style="color: #baa5a3"
            ></b-icon>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p style="color: #fff8f7">
              {{ film.year }} | {{ film.time }} | IMDB: {{ film.imdbScore
              }}<b-icon
                icon="star-fill"
                font-scale="1"
                style="color: #fcd40d"
              ></b-icon>
            </p>
          </b-col>
          <b-col>
            <h3 id="directorh3">Director:</h3>
          </b-col>
          <b-col
            ><p v-for="(director, index) in film.director" :key="index">
              <b-link
                style="color: #fff8f7"
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
      <b-container id="container2">
        <b-row>
          <b-col>
            <h1 style="margin-left: -220px">Sipnose</h1>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col
            ><p id="sipnose">
              {{ film.sipnose }}
            </p></b-col
          >
          <b-col>
            <b-table
              striped
              hover
              :items="items"
              :fields="fields"
              style="width: 200px; color: #fff8f7; margin-left: 300px"
            ></b-table>
          </b-col>
        </b-row>
      </b-container>
      <b-container id="container3">
        <b-row>
          <b-col>
            <h1 style="margin-left: -300px">Cast</h1>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-card-group
            deck
            style="margin-top: 5px"
            v-for="(actor, index) in film.actors"
            :key="index"
          >
            <b-card
              tag="article"
              style="max-width: 14rem; background-color: transparent"
              class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                :src="actor.photo"
              ></b-card-img>
              <b-card-title style="color: #fff8f7">{{
                actor.name
              }}</b-card-title>
              <b-button
                href="#"
                id="button1"
                @click="
                  $router.push({ name: 'actor', params: { actorId: actor.id } })
                "
                >View more</b-button
              >
            </b-card>
          </b-card-group>
        </b-row>
      </b-container>
      <b-container id="container3">
        <b-row>
          <h1>Reviews</h1>
        </b-row>
        <b-form inline style="margin-top: 5px">
          <b-form-textarea
            id="input-5"
            type="text"
            required
            placeholder="Write your opinion about the movie here..."
          ></b-form-textarea>
          <b-button type="submit" id="buttonGame" style="margin-left: 200px"
            >Publish</b-button
          >
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
      fields: ["Where_to_watch"],
      items: [],
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
      this.items = this.film.whereWatch;
      console.log(this.$route.params.filmeId);
      console.log(this.film);
    },
  },
};
</script>

<style>
</style>