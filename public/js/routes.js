const express = require('express');
const router = express.Router();
const data = require('../data/data.json').data
const { projects } = data 


// console.log(projects.length)


router.get('/:id' , (req, res, next) => {
    const { id } = req.params
    const projectBuild = projects[id - 1]
     res.render('project.pug' , {projectBuild})
})

router.get('/' , (req, res, next) => {
    console.log(projects)
    res.render('./index.pug', projects )

})

module.exports = router;