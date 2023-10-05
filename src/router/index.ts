import { createRouter as createVueRouter, createWebHistory, Router } from 'vue-router'

import { createAuthGuard } from '@auth0/auth0-vue'
import { App } from 'vue'

const router = (app: App): Router => {
  return createVueRouter({
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
        beforeEnter: createAuthGuard(app)
      }
    ]
  })
}

// export function createRouter(app: App): Router {
//   return createVueRouter({
//     routes: [
//       {
//         path: "/",
//         name: "home",
//         component: Home
//       },
//       {
//         path: "/profile",
//         name: "profile",
//         component: Profile,
//         beforeEnter: createAuthGuard(app)
//       }
//     ],
//     history: createWebHashHistory()
//   })
// }

export default router
