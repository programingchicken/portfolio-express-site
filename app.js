const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const PORT = 3000

//get routes js
const routes = require('./public/js/routes')


//view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

//use
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }));


//routes
app.use('/', routes)

// send 404 if no other route matched
app.use((req, res) => {
    res.status(404).json({
      message: 'Route Not Found',
    });
    console.log('Could not find route sorry.')
  });
  
  // setup a global error handler
  app.use((err, req, res, next) => {  
    res.status(500).json({
      message: err.message,
      error: {},
    });
    console.log('Could not find route sorry.')
  });

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app