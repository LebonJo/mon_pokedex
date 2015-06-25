angular.module('pokedex')

.factory("PokeService", ["$http", function ($http){

	"use strict";

	var pokeApiUrl = "http://pokeapi.co/api/v1/";

	return {

		getPokedex: function (){
			var PokeService = this;
			return $http.get("app/phps/pokedex.php")
			.then(function (result){
				return result;
			});
		},

		getPokemon: function (id){
			var PokeService = this;
			return $http.get("app/phps/pokemon.php?id=" + id)
			.then(function (result){
				console.log (result);
			})
		}
	}
}]);