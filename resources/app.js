import Vue from 'vue'
import App from './App.vue'

export function createApp (context) {
  return new Vue({
    render: h => h(App, {
      props: context
    })
  })
}
