<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#000000"
      img-width="1024"
      img-height="350"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Arcane"
        img-height="350"
        img-src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
        ><b-button>View more</b-button>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Don't Look Up"
        img-src="https://rollingstone.uol.com.br/media/uploads/leonardo-dicaprio-jennifer-lawrence-e-elenco-de-dont-look-up-foto-divulgacao-netflix.png"
      >
        <b-button>View more</b-button>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Bad and Crazy"
        img-src="https://www.themoviedb.org/t/p/original/hjzftzWxX4mvmMF1Ov6gjOlT9Dd.jpg"
        ><b-button>View more</b-button></b-carousel-slide
      >
      <b-carousel-slide
        caption="Spider-Man: No Way Home"
        img-src="https://wallpaperaccess.com/full/6790562.jpg"
      >
        <b-button>View more</b-button>
      </b-carousel-slide>
      <b-carousel-slide
        caption="The Witcher"
        img-src="https://popcultura.com.br/wp-content/uploads/2020/07/AAAABXg51hE-1qoRnsNu2KdKAQfL8k29HTDk1-gLyCyZIFNNuL3VwamMY2Xvd5YBIoWr2RfneGv4WHwVoovnVmNmwNVFuFIQ.jpg"
      >
        <b-button>View more</b-button>
      </b-carousel-slide>
    </b-carousel>

    <!-- Divisão para os challenges -->
    <b-container fluid="sm">
      <b-row class="text-center">
        <h1>Challenges</h1>
      </b-row>
      <b-row class="text-center"
        ><p>Extra games that allow you to earn more points</p></b-row
      >
      <b-row>
        <b-card-group deck>
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
            img-src="https://picsum.photos/600/300/?image=25"
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
export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      slide;
    },
    onSlideEnd(slide) {
      this.sliding = false;
      slide;
    },
  },
};
</script>

<style>
</style>
