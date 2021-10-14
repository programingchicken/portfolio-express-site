const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const index = require('./public/js/index')
const about = require('./public/js/about')

app.set('view engine', 'pug')



app.use('/static', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }));

app.use('/projects', index)
app.use('/about', about)


app.use('/', router)
// app.listen(3000,'https://programingchicken.github.io/portfolio-express-site/');