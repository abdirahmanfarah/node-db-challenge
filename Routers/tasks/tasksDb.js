const db = require("../../data/dbConfig.js");

module.exports = {
  getTasks,
  getById,
  add
}

function getTasks() {
  return db('tasks');
}

function getById(id) {
  return db("tasks as t")
  .join("projects as p", "t.project_id", "p.id")
  .where("t.id", id)
  .select("*", "p.projectDescription as projectDescription", "p.projectName as projectName");
}

function add(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return getById(id);
    })
}