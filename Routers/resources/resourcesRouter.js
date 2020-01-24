const express = require("express");

const Resource = require("./resourcesDb.js");

const router = express.Router();


router.get('/', (req, res) => {
  Resource.getResources()
    .then(resource => {
      res.json(resource)
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get Resources'})
    });
})

router.get("/:id", (req, res) => {
  Resource.getById(req.params.id)
    .then(resource => {
      if(resource) {
        res.json(resource)
      } else {
        res.status(404).json({message: "Could not find Resource Id"})
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to get Resource'})
    });
})

router.post("/", (req, res) => {
  Resource.add(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to create Resource'})
    });
})

module.exports = router;