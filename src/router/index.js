import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PremieraView from '../views/filmLog/PremieraView.vue'
import RecomendView from '../views/filmLog/RecomendView.vue'
import TrillerView from '../views/filmLog/TrillerView.vue'
import CamedyView from '../views/filmLog/CamedyView.vue'
import FantasyView from '../views/filmLog/FantasyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/premiera',
      name: 'Premiera',
      component: PremieraView
    },
    {
      path: '/recomend',
      name: 'Recomend',
      component: RecomendView
    },
    {
      path: '/triller',
      name: 'Triller',
      component: TrillerView
    },
    {
      path: '/camedy',
      name: 'Camedy',
      component: CamedyView
    },
    {
      path: '/fantasy',
      name: 'Fantasy',
      component: FantasyView
    },
    {
      path: '/multfilm',
      name: 'Multfilm',
      component: FantasyView
    }
  ]
})

export default router
