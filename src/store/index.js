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
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
