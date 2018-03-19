import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

export function createApp (context) {
  const router = createRouter(context.route)
  const app = new Vue({
    router,
    render: h => h(App, {
      props: {
        params: context.params
      }
    })
  })
  return { app, router }
}
