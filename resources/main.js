import { createRenderer } from 'vue-server-renderer'
import createApp from './entry-server'
import express from 'express'
import filePaths from '../dist/manifest.json'
import fs from 'fs'
// import { createApp } from '../resources/app'

const server = express()

// function dump (obj) {
//   let output = JSON.stringify(obj, null, 2)
//   let pre = document.createElement('pre')
//   pre.innerHTML = output
//   document.body.appendChild(pre)
// }

server.use('*', (request, response) => {
  const context = request.query

  const app = createApp(context)

  const options = {
    title: request.query.title,
    hash: filePaths,
    host: request.query.host
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
