exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE comment, post, "user" RESTART IDENTITY;');
 //     return knex('comment').del()
 //   .then(function() {
 //     return knex('post').del()
 //   .then(function() {
 //     return knex('user').del();
 //   });
 // });
};
