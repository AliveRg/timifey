import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OnlyFilmView from '../views/filmLog/OnlyFilmView.vue'
import GenreView from '../views/filmLog/GenreView.vue'

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
    }
  ]
})

export default router
