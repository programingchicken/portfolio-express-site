const express = require('express');
const router = express.Router();


//get about page
router.get('/', (req, res) => {
    if (res.status === 404) {
        console.log('this Route is not appart of the website.')
    } else {
    res.render('about')
    }
})

module.exports = router;