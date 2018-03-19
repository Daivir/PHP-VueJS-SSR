import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export function createRouter (route) {
  let routes = []
  routes.push(route)
  return new VueRouter({
    mode: 'history',
    routes
  })
}
