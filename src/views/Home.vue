<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="" id="navbarBackground">
      <b-navbar-brand href="#">
        <img
          alt="Vue logo"
          src="../assets/goovie.png"
          width="107px"
          height="55px"
        />
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="navbar">
          <b-nav-item href="#">Movies</b-nav-item>
          <b-nav-item href="#">Series</b-nav-item>
          <b-nav-item href="#">Quizzes</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <b-icon icon="search" width="30px" height="30px"></b-icon>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link :to="{ name: 'login' }"
              ><b-icon icon="person-circle" width="35px" height="35px"></b-icon
            ></router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#navbarBackground {
  background: #070707;
}
</style>
