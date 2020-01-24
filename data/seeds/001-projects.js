
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([

        {
          id: 1, 
          projectName: "Clean up Room",
          projectDescription: "Need to clean my room because it is messy at the moment.",
          completed: true,
        },

        {
          id: 2, 
          projectName: "Test Ride",
          projectDescription: "Go for a joy ride!",
          completed: true,
        },

        {
          id: 3, 
          projectName: "Finish School",
          projectDescription: "Finish all your homework and get a job!",
          completed: false,
        },


        
      ]);
    });
};
