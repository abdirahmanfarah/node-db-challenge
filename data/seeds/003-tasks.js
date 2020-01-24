
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([

        {
          id: 1, 
          taskDescription: "Fill out the paperwork needed to test drive a car.",
          taskNotes: "Do some research on test driving first.",
          completed: true,
          project_id: 2,
        },
        {
          id: 2, 
          taskDescription: "Pass this Sprint Challenge",
          taskNotes: "You've studied well so hopefully everything works out!",
          completed: true,
          project_id: 3,
        },
        {
          id: 3, 
          taskDescription: "Make a todo list of everything that needs to be cleaned.",
          taskNotes: "This could be hard.",
          completed: false,
          project_id: 1,
        },
        
      ]);
    });
};
