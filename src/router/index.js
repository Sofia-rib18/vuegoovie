import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import register from '../views/registo.vue'
import classifications from '../views/classifications.vue'
import filmes from '../views/filmes.vue'
import quizzes from '../views/quizzes.vue'
import series from '../views/series.vue'
import filme from '../views/filme.vue'
import serie from '../views/serie.vue'
import mundial from '../views/mundial.vue'
import nacional from '../views/nacional.vue'
import profile from '../views/profile.vue'
import quizz from '../views/quizz.vue'
import actor from '../views/actor.vue'
import director from '../views/director.vue'

import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/classifications',
    name: 'classifications',
    component: classifications,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/classifications/:mundial',
    name: 'mundial',
    component: mundial
  },
  {
    path: '/classifications/:nacional',
    name: 'nacional',
    component: nacional
  },
  {
    path: '/filmes',
    name: 'filmes',
    component: filmes
  },
  {
    path: '/filmes/:filmeId',
    name: 'filme',
    component: filme
  },
  {
    path: '/quizzes',
    name: 'quizzes',
    component: quizzes
  },
  {
    path: '/series/:quizzId',
    name: 'quizz',
    component: quizz
  },
  {
    path: '/series',
    name: 'series',
    component: series
  },
  {
    path: '/series/:serieId',
    name: 'serie',
    component: serie
  },
  {
    path: '/:profileId',
    name: 'profile',
    component: profile
  },
  {
    path: '/:actorId',
    name: 'actor',
    component: actor
  },
  {
    path: '/:directorId',
    name: 'director',
    component: director
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getLoggedUser) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
