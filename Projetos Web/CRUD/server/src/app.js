const Express = require('express')
const routes = require('./rotas')

const app = Express()
app.use(routes)

module.exports = app