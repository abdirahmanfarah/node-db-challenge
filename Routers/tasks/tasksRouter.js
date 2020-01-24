const express = require("express");

const Task = require("./tasksDb.js");

const router = express.Router();

router.get("/", (req, res) => {
  Task.getTasks()
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get Tasks'})
    });
})

router.get("/:id", (req, res) => {
  Task.getById(req.params.id)
    .then(task => {
      if(task) {
        res.json(task)
      } else {
        res.status(404).json({message: "Could not find Task Id"})
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get Task'})
    });
})

router.post('/', (req, res) => {
  Task.add(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to create Task'})
    });
})

module.exports = router;