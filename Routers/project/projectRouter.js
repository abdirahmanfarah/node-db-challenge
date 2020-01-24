const express = require('express');

const Project = require("./projectDb.js");

const router = express.Router();

router.get('/', (req, res) => {
  Project.getProjects()
    .then(project => {
      res.json(project)
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get Projects'})
    });
});

router.get("/:id", (req, res) => {
  Project.getById(req.params.id)
    .then(project => {
      if(project) {
        res.json(project)
      } else {
        res.status(404).json({message: "Could not find Project Id"})
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get Project'})
    });
})

router.get("/:id/tasks", (req, res) => {
  Project.findProjectTasks(req.params.id)
    .then(tasks => {
      if(tasks) {
        res.json(tasks)
      } else {
        res.status(404).json({message: "Could not find Project Tasks"})
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get Project'})
    });
})

router.post('/', (req, res) => {
  Project.add(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to create Project'})
    });
})


module.exports = router;