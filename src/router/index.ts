import { createRouter, createWebHistory,RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw>  = [
  {
    path: '/',
    component: ()=>import('@/views/HomePage.vue')
  }
]
const history =   createWebHistory()

export default createRouter({history,routes})