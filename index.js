const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const PORT = 3000

//get routes js
const index = require('./public/js/routes')
const about = require('./public/js/about')

//view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

//use
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }));


//routes
app.use('/projects', index)
app.use('/about', about)
app.get('/', index) 


app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app