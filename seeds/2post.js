exports.seed = function(knex, Promise) {
  return knex('post').del()
    .then(function(){
      return knex("user").select()
    }).then(function(users) {
    console.log(users);
    return Promise.all([
      knex('post').insert({title: 'UTAH!', image: 'http://ichef.bbci.co.uk/news/660/media/images/79677000/jpg/_79677388_450177693.jpg', content:'Utah is super dope! Lots of red rocks!', user_id: users[0].id}),
      knex('post').insert({title: 'Iceland', image: 'http://www.icelandprocruises.com/media/img/gallery/home/0002-gallery-iceland-waterfall-1.jpg', content:'Iceland is a magical place filled with fairies and trolls.', user_id: users[1].id}),
      knex('post').insert({title: 'Rome', image: 'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200', content:'Old as hell, and super cool!', user_id: users[2].id})
    ]);
  })
};


//knex.raw("truncate genus restart identity cascade;")
// have to delete all the tables
// knex('parasite').select(['parasite.name as Parasite', 'genus.name as Genus']).join('genus', function(){
//   this.on('parasite.genus)id','=', 'genus.id')
// })
// .then(function (joinedTable){
// })
//
// function findUserId(users, name){
//   for (var i = 0; i<users.length; i ++){
//     var user = users[i]
//     if (name===user.name){
//       return user.id;
//     }
//   }
// }
