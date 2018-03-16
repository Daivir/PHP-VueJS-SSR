import { createRenderer } from 'vue-server-renderer'
import createApp from './entry-server'
import express from 'express'
import fs from 'fs'
// import { createApp } from '../resources/app'

const server = express()

server.use('*', (request, response) => {
  const context = request.query

  const app = createApp(context)

  const options = {
    title: request.query.title
  }

  let renderer = createRenderer({
    template: fs.readFileSync('index.template.html', 'utf-8')
  })

  renderer.renderToString(app, options, (error, html) => {
    if (error) {
      response.status(500).end('Internal server error')
      return
    }
    response.end(html)
  })
})

server.listen(8081)

// import Vue from 'vue'
// import express from 'express'
// import { createRenderer } from 'vue-server-renderer'
//
// const App = Vue.component('App', {
//   template: '<div id="app">App</div>'
// })
//
// const server = express()
//
// server.get('*', (request, response) => {
//   createRenderer().renderToString(
//     new Vue({
//       el: '#app',
//       components: { App },
//       template: '<App/>'
//     }),
//     (error, html) => {
//       if (error) {
//         response.status(500).end('Internal server error')
//         return
//     }
//     response.end(html)
//   })
// })
//
// server.listen(8081)
