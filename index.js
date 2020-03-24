const express = require('express')

const app = express()

app.get('/', (request, response) => {
  // return response.send('Hello World')
  return response.json({
    evento: 'Semana OmniStack',
    aluno: 'Cezar Augusto Crummenauer'
  })
})

app.listen(3333)