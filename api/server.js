const express = require("express");

//Routers

const ProjectRouter = require("../Routers/project/projectRouter.js");

const TaskRouter = require("../Routers/tasks/tasksRouter.js");

const ResourceRouter = require("../Routers/resources/resourcesRouter.js")

const server = express();

server.use(express.json());


server.get('/', (req, res) => {
  res.send("Server up and running!")
})

//server.use (router)
server.use('/api/projects', ProjectRouter );

server.use('/api/tasks', TaskRouter);

server.use('/api/resources', ResourceRouter);

module.exports = server;