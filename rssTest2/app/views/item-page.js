var RssListViewModel = require('../shared/view-models/rss-list-view-model');
var Observable = require('data/observable').Observable;
var utils = require('utils/utils');

var pageData = new Observable({
	title:"",
	text:""
});

exports.loaded = function(args) {

	page = args.object;
	page.bindingContext = pageData;
	
	console.log('loaded the item page');
	console.log(RssListViewModel.viewModel.get('selectedItem').title);
	pageData.title = RssListViewModel.viewModel.get('selectedItem').title;
	pageData.text = RssListViewModel.viewModel.get('selectedItem').description;

}

exports.openURL = function() {
	utils.openUrl(RssListViewModel.viewModel.get('selectedItem').link);	
}