angular.module("pokedex")

.config(function ($routeProvider){
				
	$routeProvider
	.when("/", {
		templateUrl: "views/user.html",
		controller: "UserController",
		controllerAs: "userCtrl"
	})
	.when("/home", {
		templateUrl: "views/home.html",
		controller: "HomeController",
		controllerAs: "homeCtrl"
	})
	.when("/capture", {
		templateUrl: "views/capture.html",
		controller: "CaptureController",
		controllerAs: "captureCtrl"
	})
	.when("/pokemon/:name", {
		templateUrl: "views/pokemon.html",
		controller: "PokemonController",
		controllerAs: "pokemonCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
})