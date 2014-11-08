// responsive listener
(function(utilities, undefined) {
	
	var ResponsiveController = function() {

	};

	ResponsiveController.prototype.printScreenWidth = function() {
		console.log($(window).width());
	};

	utilities.responsive = new ResponsiveController();

})(gallery.utilities);

