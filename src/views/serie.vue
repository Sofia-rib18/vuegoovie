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
          src="https://www.youtube.com/embed/FJccmXd9A-A"
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
              src="https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"
              alt="Left image"
            ></b-img>
          </b-col>
          <b-col>
            <h1>Friends</h1>
            <p>Comedy|Romance</p>
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
              1994-2004 | 22m | IMDB: 8.8<b-icon
                icon="star-fill"
                font-scale="1"
              ></b-icon>
            </p>
          </b-col>
          <b-col>
            <h3>Director:</h3>
          </b-col>
          <b-col><p>David Crane</p></b-col>
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
              Follows the personal and professional lives of six twenty to
              thirty-something-year-old friends living in Manhattan.
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
                src="https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY1200_CR103,0,630,1200_AL_.jpg"
              ></b-card-img>
              <b-card-title>Jennifer Anniston</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_.jpg"
              ></b-card-img>
              <b-card-title>Courteney Cox</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_UY264_CR7,0,178,264_AL_.jpg"
              ></b-card-img>
              <b-card-title>Lisa Kudrow</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UY1200_CR54,0,630,1200_AL_.jpg"
              ></b-card-img>
              <b-card-title>Matt LeBlanc</b-card-title>
              <b-button href="#" variant="primary">View more</b-button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12"
              ><b-card-img
                style="max-height: 200px"
                src="https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY1200_CR156,0,630,1200_AL_.jpg"
              ></b-card-img>
              <b-card-title>Matthew Perry</b-card-title>
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