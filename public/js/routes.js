const express = require('express');
const router = express.Router();
const data = require('../data/data.json').data
const { projects } = data 


console.log(projects.length)


router.get('/:id' , (req, res, next) => {
    const { id } = req.params
    const {title, image, liveLink, description, technologies, githubLink} = projects[id - 1]
     res.render('project' , { title , image, liveLink, description, technologies, githubLink })
})

router.get('/' , (req, res, next) => {
    const projectsArray = []
    console.log(projectsArray)
    // const { id } = req.params
    projects.forEach(project => {
        projectsArray.push(project)

    })
    console.log(projectsArray)
    res.render('index', {projectsArray} )

})

module.exports = router;