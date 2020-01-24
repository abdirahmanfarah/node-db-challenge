
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      
      tbl.increments();

      tbl.string("projectName").notNullable().index();

      tbl.string("projectDescription");

      tbl.boolean("completed").notNullable().defaultTo(false)

    })

    .createTable("resources", tbl => {
      
      tbl.increments();
      
      tbl.string("resourceName").notNullable().index().unique();

      tbl.string("resourceDescription")
    })

    .createTable("tasks", tbl => {
      
      tbl.increments();

      tbl.string("taskDescription").notNullable();

      tbl.string("taskNotes");

      tbl.boolean("completed").defaultTo(false);

      tbl.integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      
    })

    .createTable("project_resources", tbl => {
      
      tbl.increments();

      tbl.integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

       tbl.integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      
    })
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources");
};
