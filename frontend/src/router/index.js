import { createRouter, createWebHistory } from 'vue-router'
import beForeEach from './beForeEach'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ]
})

router.beforeEach(beForeEach)

export default router
