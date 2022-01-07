<template>
  <div>
    <h1>Series</h1>
    <!-- Filtro -->
    <b-dropdown
      id="dropdown-right"
      right
      text="Filter"
      variant="primary"
      class="m-2"
    >
      <b-dropdown-item href="#">Recents</b-dropdown-item>
      <b-dropdown-item href="#">Best Qualified</b-dropdown-item>
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Drama</b-dropdown-item>
      <b-dropdown-item href="#">Animation</b-dropdown-item>
      <b-dropdown-item href="#">More</b-dropdown-item>
    </b-dropdown>
    <!-- Filmes -->
    <b-container fluid="sm">
      <b-row>
        <b-card-group deck v-for="(serie, index) in getSeries" :key="index">
          <b-card tag="article" style="max-width: 20rem" class="mb-6">
            <b-card-img :src="serie.poster"></b-card-img>
            <b-card-title>{{ serie.title }}</b-card-title>
            <b-button
              @click="
                $router.push({ name: 'serie', params: { serieId: serie.id } })
              "
              variant="primary"
              >View more</b-button
            >
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getSeries"]),
  },
};
</script>

<style>
</style>