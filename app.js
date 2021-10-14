const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const router = express.Router()
const index = require('./public/js/routes')
const about = require('./public/js/about')
// const serverless = require('serverless-http');





app.set('view engine', 'pug')


app.use('/static', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }));

// router.get('/projects', index)
// router.get('/about', about)
app.use('/projects', index)
app.use('/about', about)


// app.use('/portfolio-express-site', router)


// app.use('/.netlify/functions/api', router);

// module.exports.handler = serverless(app)