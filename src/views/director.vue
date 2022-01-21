<template>
  <div>
    <div>
      <b-container>
        <b-row>
          <b-col>
            <b-img
              left
              style="max-height: 200px; margin-top: 50px; margin-left: 100px"
              :src="director.photo"
              alt="Left image"
            ></b-img>
          </b-col>
          <b-col>
            <h1>{{ director.name }}</h1>
            <p>Director</p>
          </b-col>
          <b-col>
            <b-icon icon="heart" font-scale="2"></b-icon>
          </b-col>
        </b-row>
      </b-container>
      <h1>Known for</h1>
      <b-container>
        <b-row>
          <b-card-group
            deck
            v-for="(film, index) in director.films"
            :key="index"
          >
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                :src="film.poster"
              ></b-card-img>
              <b-card-title>{{ film.title }}</b-card-title>
              <div v-if="film.id <= 6">
                <b-button
                  href="#"
                  variant="primary"
                  @click="
                    $router.push({
                      name: 'filme',
                      params: { filmeId: film.id },
                    })
                  "
                  >View more</b-button
                >
              </div>
              <div v-else>
                <b-button
                  href="#"
                  variant="primary"
                  @click="
                    $router.push({
                      name: 'serie',
                      params: { serieId: film.id },
                    })
                  "
                  >View more</b-button
                >
              </div>
            </b-card>
          </b-card-group>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Director",
  data() {
    return {
      director: [],
    };
  },
  created() {
    this.directors();
  },
  computed: {
    ...mapGetters(["getDirector"]),
  },
  methods: {
    directors() {
      this.director = this.getDirector(this.$route.params.directorId);
      console.log(this.$route.params.directorId);
      console.log(this.director);
    },
  },
};
</script>

<style>
</style>