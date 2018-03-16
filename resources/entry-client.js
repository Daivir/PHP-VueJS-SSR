import { createApp } from './app'

function renderApp (context) {
  return createApp(context).$mount('#app')
}
