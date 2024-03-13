import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OnlyFilmView from '../views/filmLog/OnlyFilmView.vue'
import GenreView from '../views/filmLog/GenreView.vue'
import ByTicker from '../views/ByTicker.vue'
import verifiView from '../views/verifiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },

    {
      path: '/films/:id',
      name: 'GenreView',
      component: GenreView
    },
    {
      path: '/film/:id',
      name: 'OnlyFilm',
      component: OnlyFilmView
    },
    {
      path: '/film/byTick/:id',
      name: 'Bytickets',
      component: ByTicker
    },
    {
      path: '/fk-verify.html',
      name: 'verifiView',
      component: verifiView
    }
  ]
})

export default router
