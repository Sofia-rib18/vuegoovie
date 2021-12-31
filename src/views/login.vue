<template>
  <div>
    <h1>Login</h1>
    <h2>
      <router-link :to="{ name: 'register' }">Register</router-link>
    </h2>
    <b-form @submit.prevent="login">
      <!-- Username -->
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="username"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <!-- Password -->
      <b-form-group id="input-group-3" label="Password" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["isUser"]),
  },
  methods: {
    login() {
      if (this.isUser(this.username, this.password)) {
        this.SET_LOGGED_USER(this.username);
        this.$router.push({ name: "Home" });
      } else {
        alert("USER NOT FOUND!");
      }
    },
    ...mapMutations(["SET_LOGGED_USER"]),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

h1{
  font-family: 'Anton', sans-serif;
}

h2{
  font-family: 'Anton', sans-serif;
}

#input-group-1, #input-group-3{
  font-family: 'Quicksand', sans-serif;
}
</style>