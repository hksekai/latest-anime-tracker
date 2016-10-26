var express = require('express');
var router = express.Router();
var nyaa = require('node-nyaa-api');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testNyaa', function(req, res, next){

	nyaa.get_latest(function(err, articles){
		if (err) throw err;

		res.send(articles);
	});
});

router.get('/nyaaSearch/:id', function(req, res, next){

	var query = decodeURIComponent(req.params.id);
	nyaa.search(query, function(err, articles){
		if (err) throw err;

		for(var article in articles){
			console.log(articles[article].title);
		}

		res.send(query);
	});
})



module.exports = router;
