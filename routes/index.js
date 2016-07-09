var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var post_id;
/* GET home page. */
router.get('/', function(req, res, next) {
  knex('post').select().then(function(post){
    res.render('index', {post: post});
  })
});

router.get('/create', function(req, res, next){
    res.render('create');
});

router.post('/create', function(req, res, next){
  knex('post').insert(req.body).then(function(){
    res.redirect('/')
  })
});

router.get('/:id', function(req, res, next){
  Promise.all([
      knex('post').where({id: req.params.id}).first(),
      knex('comment').where('comment.post_id', req.params.id)
  ])
.then(function(post_comments){
  post_id = post_comments[0].id;
    res.render('detail',
    {
      comment: post_comments[1],
      post:post_comments[0]
    });
  })
});

router.post('/:id/edit', function (req, res, next) {
  knex('post').where({id: req.params.id}).update(req.body).then(function(){
    res.redirect("/" + req.params.id)
  })
});

router.get('/:id/edit', function(req, res, next){
  knex('post').where({id: req.params.id}).first().then(function(post){
    res.render('edit', {post: post});
  })
});


router.get('/:id/delete', function (req, res, next) {
  knex('post').where({id:req.params.id}).del().then(function(){
    res.redirect('/');
  }).catch(function(err){
    console.log(err);
    next(err);
  });
});

router.post('/comment', function(req, res, next){
  console.log(post_id)
  req.body.user_id = 1;
  req.body.post_xid = post_id;
  knex('comment').insert(req.body).then(function(){
    res.redirect(req.get('referer'));
  })
});
module.exports = router;
