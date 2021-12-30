<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="" id="navbarBackground">
        <b-navbar-brand href="#">
          <router-link to="/">
            <img alt="Goovie logo" src="@/assets/goovie.png" width="107px" height="55px">
          </router-link>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="navbar">
            <router-link to="/movies" id="link">Movies</router-link>
            <router-link to="/series" id="link">Series</router-link>
            <router-link to="/quizzes" id="link">Quizzes</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <b-icon icon="search" width="30px" height="30px"></b-icon>
            </b-nav-item>
            <b-nav-item href="#">
              <b-icon icon="person-circle" width="35px" height="35px"></b-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#link{
  padding: 30px;
  color: #fef8f8;
}

#navbarBackground{
    background: #070707;
}
</style>
