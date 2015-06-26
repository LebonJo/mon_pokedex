angular.module("pokedex")

.config(function ($routeProvider){
				
	$routeProvider
	.when("/", {
		templateUrl: "views/home.html",
		controller: "HomeController",
		controllerAs: "homeCtrl"
	})
	.when("/admin", {
		templateUrl: "views/admin.html",
		controller: "AdminController",
		controllerAs: "adminCtrl"
	})
	.when("/:name", {
		templateUrl: "views/pokemon.html",
		controller: "PokemonController",
		controllerAs: "pokemonCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
})