<template>
  <div>
    <div>
      <div>
        <!-- <b-carousel
        background="#000000"
        img-width="1024"
        img-height="350"
        style="max-height: 400px"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-embed
          type="iframe"
          aspect="16by9"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/vw2FOYjCz38"
          allowfullscreen
          style="max-height: 400px"
        ></b-embed>
      </b-carousel> -->
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vw2FOYjCz38"
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
              src="https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg"
              alt="Left image"
            ></b-img>
          </b-col>
          <b-col>
            <h1>007: No Time to Die</h1>
            <p>Action|Adventure|Thriller</p>
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
              2021 | 2h 43min | IMDB: 7.4<b-icon
                icon="star-fill"
                font-scale="1"
              ></b-icon>
            </p>
          </b-col>
          <b-col>
            <h3>Director:</h3>
          </b-col>
          <b-col><p>Cary Joji Fukunaga</p></b-col>
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
              James Bond has left active service. His peace is short-lived when
              Felix Leiter, an old friend from the CIA, turns up asking for
              help, leading Bond onto the trail of a mysterious villain armed
              with dangerous new technology.
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
          <b-card-group deck>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UY1200_CR88,0,630,1200_AL_.jpg"
              ></b-card-img>
              <b-card-title>Daniel Craig</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_UY1200_CR88,0,630,1200_AL_.jpg"
              ></b-card-img>
              <b-card-title>Rami Malek</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BMjM3MTczNzY1MF5BMl5BanBnXkFtZTgwNjgwODgzNDE@._V1_.jpg"
              ></b-card-img>
              <b-card-title>Léa Seydoux</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BMjI0ZGE0ZTYtYmY1MS00MGU0LWEwMDQtMzYxMDFmMmFjZjUyXkEyXkFqcGdeQXVyMzczOTY5ODk@._V1_.jpg"
              ></b-card-img>
              <b-card-title>Lashana Lynch</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BMWM3MDMzNjMtODM5Ny00YmY0LWJhNzQtNTE1ZDNlNjllNDQ0XkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UY1200_CR585,0,630,1200_AL_.jpg"
              ></b-card-img>
              <b-card-title>Ana de Armas</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
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
</script>

<style>
</style>