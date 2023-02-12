const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// localhost:3000/hello?alamat=sidoarjoo&nama=riz
app.get('/hello', (req, res) => {
  console.log(req.query)
  res.send('Got a GET request w params. Name='+req.query.nama)
})

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send('Got a POST request')
})

app.put('/username', (req, res) => {
  console.log({myreq: req.body})
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
