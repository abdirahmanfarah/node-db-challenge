const db = require("../../data/dbConfig.js");

module.exports = {
  getResources,
  getById,
  add,
}

function getResources() {
  return db("resources");

}

function getById(id) {
  return db("resources").where({id}).first();
}

function add(resource) {
  return db("resources")
  .insert(resource)
  .then(([id]) => {
    return getById(id);
  })
}