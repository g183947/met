import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }, 
      {
        path: '/table',
        name: 'table',
        component: () => import(/* webpackChunkName: "about" */ '../views/TableView.vue')

      }
    ]
  }

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
