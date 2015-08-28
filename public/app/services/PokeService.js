angular.module('pokedex')

.factory("PokeService", ["$http", function ($http, $localStorage){

	"use strict";

	var pokeApiUrl = "http://pokeapi.co/api/v1/";

	return {

		getPokedex: function (id_user, bottomLimit, topLimit){
			var PokeService = this;
			return $http.get("app/phps/pokedex.php?id_user=" + id_user + "&bottomLimit=" + bottomLimit + "&topLimit=" + topLimit)
			.then(function (result){
				return result;
			});
		},

		getTaillePokedex: function (){
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

		getCapture: function (id_user){
			var PokeService = this;
			return $http.get("app/phps/capture.php?id_user=\"" + id_user + "\"")
			.then(function (result){
				return result;
			});
		},

		setCapture: function (pokemon, id_user){
			var PokeService = this;
			var shiny = pokemon.shiny && pokemon.normal;
			var request = $http({
			    method: "post",
			    url: 'app/phps/postCaught.php',
			    data: {
					id : pokemon.id,
					id_user : id_user,
					normal : pokemon.normal == true ? 1 : 0,
					shiny : shiny == true ? 1 : 0
			    },
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
			return request.then(function (result){
				return result;
			});
		},

		setCaptureShiney: function (pokemon, id_user){
			var PokeService = this;
			var normal = pokemon.normal || pokemon.shiny;
			var request = $http({
			    method: "post",
			    url: 'app/phps/postCaught.php',
			    data: {
					id : pokemon.id,
					id_user : id_user,
					normal : normal == true ? 1 : 0,
					shiny : pokemon.shiny == true ? 1 : 0
			    },
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
			return request.then(function (result){
				return result;
			});
		},

		connect: function (pseudo, mdp){
			var PokeService = this;
			return $http.get("app/phps/connect.php?pseudo=\"" + pseudo + "\"&mdp=\"" + mdp + "\"")
			.then(function (result){
				return result;
			})
		},

		createUser: function (pseudo, mdp, nom, prenom, email){
			var PokeService = this;
			var request = $http({
			    method: "post",
			    url: 'app/phps/createUser.php',
			    data: {
					pseudo : pseudo,
					mdp : mdp,
					nom : nom,
					prenom : prenom,
					email : email
			    },
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
			});
			return request.then(function (result){
				return result;
			});
		},

		findUserOrEmail: function (type, userOrEmail){
			var PokeService = this;
			return $http.get("app/phps/findUserOrEmail.php?type=\"" + type + "\"&userOrEmail=\"" + userOrEmail + "\"")
			.then(function (result){
				return result;
			});
		}
	}
}]);