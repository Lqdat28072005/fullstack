const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path')
const hostname=process.env.HOST_NAME;
require('dotenv').config()



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/lequangdat', (req, res) => {
  res.render('sample.ejs');
});

app.get('/', (req, res) => {
  res.send('Hello, Đạt xin chào!');
});

app.listen(PORT,hostname, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
