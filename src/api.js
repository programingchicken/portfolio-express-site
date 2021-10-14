const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const index = require('./public/js/routs')
const about = require('../public/js/about')
const serverless = require('serverless-http');

const router = express.Router()


app.set('view engine', 'pug')

router.get(index)

app.use('/static', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }));

app.use('/projects', index)
app.use('/about', about)


// app.use('/portfolio-express-site', router)
app.listen(80)

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app)