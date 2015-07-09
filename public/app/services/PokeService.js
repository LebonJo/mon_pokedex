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

		getPokemon: function (name){
			var PokeService = this;
			return $http.get("app/phps/pokemon.php?name=\"" + name + "\"")
			.then(function (result){
				return result;
			})
		},

		getCapture: function (){
			var PokeService = this;
			return $http.get("app/phps/capture.php")
			.then(function (result){
				return result;
			});
		},

		setCapture: function (pokemon){
			var PokeService = this;
			var caught_shiney = pokemon.caught_shiney && pokemon.caught;
			var request = $http({
			    method: "post",
			    url: 'app/phps/postCaught.php',
			    data: {
					id : pokemon.id,
					caught : pokemon.caught == true ? 1 : 0,
					caught_shiney : caught_shiney == true ? 1 : 0
			    },
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
			return request.then(function (result){
				return result;
			});
		},

		setCaptureShiney: function (pokemon){
			var PokeService = this;
			var caught = pokemon.caught || pokemon.caught_shiney;
			var request = $http({
			    method: "post",
			    url: 'app/phps/postCaught.php',
			    data: {
					id : pokemon.id,
					caught : caught == true ? 1 : 0,
					caught_shiney : pokemon.caught_shiney == true ? 1 : 0
			    },
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
			return request.then(function (result){
				return result;
			});
		}
	}
}]);