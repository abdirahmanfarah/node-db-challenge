const db = require("../../data/dbConfig.js");

module.exports = {
  getProjects,
  getById,
  findProjectTasks,
  add,
}

function getProjects() {
  return db('projects');
}

function getById(id) {
  return db("projects").where({id}).first();
}

function findProjectTasks(id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "=", "p.id")
    .where("p.id", id)
    .select("t.id", "p.projectName as projectName", "p.projectDescription as projectDescription", "t.taskDescription as Description", "t.taskNotes as Notes", "t.completed")
}

function add(project) {
  return db('projects')
  .insert(project)
  .then(([id]) => {
    return getById(id);
  });
}