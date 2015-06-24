angular.module('pokedex')

.factory("PokeService", ["$http", function ($http){

	"use strict";

	var pokeApiUrl = "http://pokeapi.co/api/v1/";

	return {

		getPokedex: function (){
			var  PokeService = this;
			return $http.get(pokeApiUrl + "pokedex/1")
			.then(function (result){
				return result.data;
			});
		},

		getTestDatabase: function (){
			var PokeService = this;
			return $http.get("app/phps/testdatabase.php");
			
			// return $http.get("http://www.w3schools.com/angular/customers_mysql.php")
   //  .success(function (response) {return response;});

		}

		// getPokedex: function (){
		// 	var  PokeService = this;
		// 	return $http.get(myApiUrl)
		// 	.then(function (result){
		// 		return result.data;
		// 	});
		// },
	}
}]);