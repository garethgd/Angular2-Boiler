
(function(){

var app = angular.module(('features'), [] ) ;

app.controller('FeatureController', function() {
	this.product = software;
});

var software = {
	name: 'Eposible',
	price: 25,
	description: "This Eposible software enables its users to have a retail infastructure that runs smoothly and efficiently increasing over all PPP (Productivity per hour worked)",
	softwareVersion: "34324353fdsfsdfsdf",
	canPurchase: false,
	soldOut: false,
};

})();