exports.seed = function(knex, Promise) {
  return knex('comment').del()
    .then(function(){
      return Promise.all([
      knex("user").select(),
      knex('post').select()
      ])
    })
    .then(function(data){
      var users = data[0];
      var posts = data[1];
      console.log(users);
      console.log(posts);
    return Promise.all([
      knex('comment').insert({text: 'Cool post', user_id: users[1].id, post_id: posts[1].id}),
      knex('comment').insert({text: 'You suck', user_id: users[2].id, post_id: posts[2].id}),
      knex('comment').insert({text: 'Sup bro', user_id: users[0].id, post_id: posts[0].id})
    ]);
  })
};
