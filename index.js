const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const product = require('./public/product')


const PORT = 3000
// const router = express.Router()
const index = require('./public/js/routes')
const about = require('./public/js/about')

// const serverless = require('serverless-http');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false }));
app.use('/projects', index)
app.use('/about', about)
// app.use(express.json({ extended: false }));







// app.use('/projects', index)
// app.use('/about', about)




// app.use('/portfolio-express-site', router)

// app.use("/public/product.js", product);


// app.use('/.netlify/functions/api', router);

// module.exports.handler = serverless(app)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

// const express = require("express");
// const app = express();

// const port = 5000;

// app.get('/',(req,res) => {
//     res.send("This is a sample express app")
// })
// // Listen on port 5000
// app.listen(port, () => {
//   console.log(`Server is booming on port 5000
// Visit http://localhost:5000`);
// });

module.exports = app