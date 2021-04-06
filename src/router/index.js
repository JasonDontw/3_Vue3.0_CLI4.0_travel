import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/home/Home'
import City from '@/components/pages/city/City'
import Detail from '@/components/pages/detail/Detail'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router