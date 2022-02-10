const express = require('express');
const router = express.Router();
const data = require('../data/data.json').data
const { projects } = data


console.log(projects.length)

//get one of the project pages
router.get('/project/:id', (req, res, next) => {
    const { id } = req.params
    const { title, description, liveLink, githubLink, image, technologies } = projects[id - 1]
    res.render('project', { title, description, liveLink, githubLink, image, technologies })
})

//get about page
router.get('/about', (req, res) => {
    res.render('about')
})

//get projects page 
router.get('/', (req, res, next) => {

    const projectsArray = []
    console.log(projectsArray)
    // const { id } = req.params
    projects.forEach(project => {
        projectsArray.push(project)

    })
    console.log(projectsArray)
    res.render('index', { projectsArray })
})

module.exports = router;