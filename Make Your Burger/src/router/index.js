import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pedidos', // caminho
    name: 'Pedidos', // view
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos.vue') // importando
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
