
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([

        {
          id: 1, 
          resourceName: "Computer",
          resourceDescription: "Weird looking machine."
        },
        {
          id: 2, 
          resourceName: "Book",
          resourceDescription: "Flat uninteresting object."
        },
        {
          id: 3, 
          resourceName: "Car",
          resourceDescription: "Fun and fast machine."
        },
       
      ]);
    });
};
