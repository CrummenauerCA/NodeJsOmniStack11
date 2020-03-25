const express = require('express')

const app = express()

app.get('/users/:id', (request, response) => {
  const params = request.params
  console.log(params)

  return response.json({
    evento: 'Semana OmniStack',
    aluno: 'Cezar Augusto Crummenauer'
  })
})

app.listen(3333)