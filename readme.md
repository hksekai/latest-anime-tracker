##Node-Nyaa project

First commit: Leon

Added basic integration to node-nyaa-api module

See: https://github.com/bakaboykie/node-nyaa-api

##Nyaa Latest

```javascript
nyaa.get_latest(function(err, articles){
	if (err) throw err;

	res.send(articles);
});
```

Returns the latest articles in array list format. 

##Nyaa Search

```javascript
nyaa.search(query, function(err, articles){
	if (err) throw err;

	for(var article in articles){
		console.log(articles[article].title);
	}

	res.send(query);
});
```

Define a query to search through nyaa api. Note that query string from URL must be URI Decoded. Use decodeURIComponent method.