
exports.seed = function(knex, Promise) {
  return knex("user").del().then(function() {
    return Promise.all([
      knex("user").insert({user_name: 'heatherrulez14447'}),
      knex("user").insert({user_name: 'ilovepugz9876'}),
      knex("user").insert({user_name: 'mcskuzeme'})
    ]);
  })
};

 
