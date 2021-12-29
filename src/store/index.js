import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.users ? JSON.parse(localStorage.users) : [
      {
        username: 'Admin',
        password: 'Esmad_2122',
        type: 'admin'
      },
      {
        username: 'User',
        password: 'Esmad_2122',
        type: 'regular',
        location: 'Portugal'
      }
    ],
    loggedUser: null
  },
  getters: {
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password),
    isUsernameAvailable: (state) => (username) => state.users.every((user) => user.username !== username),
    // isPasswordRight: (state) => (password, passwordConfirm) => state.users.every((user) =>user.password !== password),
    getLoggedUser: (state) => state.loggedUser
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.username === payload)
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload)
    },
    SET_LOGOUT(state) {
      state.loggedUser = null
    }
  },
  actions: {
  },
  modules: {
  }
})
