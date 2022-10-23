import { engine } from 'express-handlebars';
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
// HTTP logger
app.use(morgan('combined'))
// tempelate engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/trang-chu', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})