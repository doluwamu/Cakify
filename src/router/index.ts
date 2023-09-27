import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import CakesView from '../views/CakesView.vue'

// import { useAuth0 } from '@auth0/auth0-vue'
// import { useA } from 'auth0-js'

//  new Management().getUser('userId', callback)
// // console.log(crypto.getRandomValues([]))

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
      component: () => import('../views/CakesView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//   } else {
//     next()
//   }
// })

export default router
