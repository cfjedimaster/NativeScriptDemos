var frameModule = require('ui/frame');
var connectivity = require('connectivity');
var dialogs = require("ui/dialogs");

var viewModule = require('ui/core/view');
var page;

exports.loaded = function(args) {
	page = args.object;
};

exports.checkConnectivity = function(args) {
	var connectionType = connectivity.getConnectionType();
	if(connectivity.getConnectionType() === connectivity.connectionType.none) {
		dialogs.alert({
			message:'Sorry, but you are still offline.',
			title:'Offline',
			okButtonText:'Close'
		});
	} else {
		frameModule.topmost().navigate('views/main-page');
	}
}