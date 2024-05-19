const Express = require('express')
const tasks = require('./controllers/clientController')

const routes = Express.Router()

routes.get('/cadastro', tasks.getAll)

module.exports = routes