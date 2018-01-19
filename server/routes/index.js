const todosController = require('../controllers').todos

//split up routes and place in different folders
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'welcome to the api',
  }))

  app.post('/api/todos', todosController.create)
  app.get('/api/todos', todosController.list)
}
