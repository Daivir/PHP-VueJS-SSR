import { createRenderer } from 'vue-server-renderer'
import createApp from './entry-server'
import express from 'express'
import filePaths from '../dist/paths.json'
import fs from 'fs'

const server = express()

server.use('*', (request, response) => {
  function view (component) {
    return () => import(`./components/${component}.vue`)
  }
  const context = {
    url: request.baseUrl,
    route: {
      path: request.baseUrl,
      component: view(request.query.view)
    },
    params: request.query.params
  }
  const options = {
    title: request.query.title,
    hash: filePaths,
    host: request.query.host
  }
  let renderer = createRenderer({
    template: fs.readFileSync('index.template.html', 'utf-8')
  })
  createApp(context).then(app => {
    renderer.renderToString(app, options, (error, html) => {
      if (error) {
        if (error.code === 404) {
          response.status(404).end('Page not found')
        } else {
          response.status(500).end('Internal server error')
        }
        return
      }
      response.end(html)
    })
  })
})

const port = 3000
server.listen(port, '0.0.0.0', () => {
  console.log('Running at localhost:' + port)
})
