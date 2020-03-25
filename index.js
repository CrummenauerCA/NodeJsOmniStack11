const express = require('express')

const app = express()

app.get('/users', (request, response) => {
  const params = request.query
  console.log(params)
  
  return response.json({
    evento: 'Semana OmniStack',
    aluno: 'Cezar Augusto Crummenauer'
  })
})

app.listen(3333)