var observable = require('data/observable');
var ObservableArray = require('data/observable-array').ObservableArray;
var fetchModule = require('fetch');

function handleErrors(response) {
	if (!response.ok) {
		console.log(JSON.stringify(response));
		throw Error(response.statusText);
	}
	return response;
}

exports.empty = function() {
	while (feedItems.length) {
		feedItems.pop();
	}
};

exports.load = function name(params) {
	console.log('CALLING LOAD');
	//handle caching
	if(feedItems.length > 0) {
		console.log('leaving early');
		return;
	}
	return fetch('https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.feedburner.com%2Fraymondcamdensblog%3Fformat%3Dxml%22&format=json&diagnostics=true', {
	})
	.then(handleErrors)
	.then(function(response) {
		return response.json();
	}).then(function(data) {
		console.log('number of rss entries: '+data.query.results.item.length);
		data.query.results.item.forEach(function(feedItem) {
			feedItems.push({
						title: feedItem.title,
						link: feedItem.link,
						description: feedItem.description
					}
			);
		
		});
	});

}

var feedItems = new ObservableArray();
exports.feedItems = feedItems;

var viewModel = new observable.Observable();
exports.viewModel = viewModel;