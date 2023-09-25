import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import CakesView from '../views/CakesView.vue'

import { useAuth0 } from '@auth0/auth0-vue'

// const { isAuthenticated } = useAuth0()
// console.log()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/cakes',
      name: 'cakes',
      component: () => import('../views/CakesView.vue')
    }
  ]
})

export default router
