const express = require('express');
const router = express.Router();


//get about page
router.get('/', (req, res) => {
    if (response.status === 404) {
        console.log('this Route is not appart of the website.')
    }
    res.render('about')
})

module.exports = router;