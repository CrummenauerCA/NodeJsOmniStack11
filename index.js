const express = require('express')

const app = express()

app.use(express.json())

app.post('/users', (request, response) => {
  const body = request.body
  console.log(body)

  return response.json({
    evento: 'Semana OmniStack',
    aluno: 'Cezar Augusto Crummenauer'
  })
})

app.listen(3333)