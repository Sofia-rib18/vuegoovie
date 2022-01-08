<template>
  <div>
    <b-row>
      <b-col>
        <h1>Quizzes</h1>
      </b-col>
      <b-col>
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
      </b-col>
    </b-row>

    <b-container fluid="sm">
      <b-row>
        <b-card-group deck>
          <b-card
            title="Quizz Action"
            img-src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-6"
          >
            <b-button href="#" variant="primary">Play</b-button>
          </b-card>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=96"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-6"
          >
            <b-button href="#" variant="primary">Play</b-button>
          </b-card>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=451"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-6"
          >
            <b-button href="#" variant="primary">Play</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>