const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World LE QUANG DAT !')
})

app.get('/abc', (req, res) => {
  res.send('check abc')
})

app.get('/lequangdat', (req, res) => {
  res.send('<h1>check abcfdsf</h1>')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
