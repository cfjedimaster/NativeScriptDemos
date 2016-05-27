var frameModule = require('ui/frame');
var connectivity = require('connectivity');
var dialogs = require("ui/dialogs");

var viewModule = require('ui/core/view');
var page;

exports.loaded = function(args) {
	page = args.object;
	//page.bindingContext = pageData;
};

exports.checkConnectivity = function(args) {
	console.log('tap');	
	var connectionType = connectivity.getConnectionType();
	if(connectivity.getConnectionType() === connectivity.connectionType.none) {
		dialogs.alert({
			message:'Sorry, but you are still offline.',
			title:'Offline',
			okButtonText:'Close'
		});
	}
}