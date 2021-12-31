<template>
  <div>
    <h2><router-link :to="{ name: 'login' }">Login</router-link></h2>
    <h1>Register</h1>
    <b-form @submit.prevent="register">
      <!-- Username -->
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <!-- Nacionalidade -->
      <b-form-group id="input-group-2" label="Nationality" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form.nationality"
          :options="nationalities"
          required
        ></b-form-select>
      </b-form-group>
      <!-- Password -->
      <b-form-group id="input-group-3" label="Password" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          :state="validation"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Yourpassword must have more than 6 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>
      <!-- Confirm Password -->
      <b-form-group
        id="input-group-4"
        label="Confirm Password"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.passwordConfirm"
          type="password"
          :state="confirm"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="confirm">
          Password is not equal.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="confirm">
          Password is the same
        </b-form-valid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        nationality: "",
        password: "",
        passwordConfirm: "",
        type: "regular",
      },
      nationalities: [
        { text: "---Select your Nationality---", value: null },
        "Portugal",
        "Spain",
      ],
    };
  },
  computed: {
    ...mapGetters(["isUsernameAvailable"]),
    validation() {
      return this.form.password.length > 5;
    },
    confirm() {
      return this.form.password === this.form.passwordConfirm;
    },
  },
  methods: {
    register() {
      if (
        !this.isUsernameAvailable(this.form.username) &&
        this.form.password !== this.form.passwordConfirm
      ) {
        alert("USER AND PASSWORD ARE WRONG!");
      } else if (!this.isUsernameAvailable(this.form.username)) {
        alert("USER ALREADY EXISTS!");
      } else if (this.form.password !== this.form.passwordConfirm) {
        alert("PASSWORD WRONG!");
      } else {
        this.SET_NEW_USER(this.form), this.$router.push({ name: "login" });
      }
    },

    ...mapMutations(["SET_NEW_USER"]),
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

#input-group-1, #input-group-2, #input-group-3, #input-group-4{
  font-family: 'Quicksand', sans-serif;
}
</style>