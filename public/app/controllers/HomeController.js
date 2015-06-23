angular.module('pokedex')

.controller("HomeController", function (PokeService){

	"use strict";

	var homeCtrl = this;

	homeCtrl.pokedex = [];

	function fetchPokedex (){
		PokeService.getPokedex().then(function (pokedex){
			for(var i=0; i<pokedex.pokemon.length; i++){
				var num = parseInt(pokedex.pokemon[i].resource_uri.split("/")[3]);
				if(num < 1000){
					var pokemon = {
						id : num,
						name : pokedex.pokemon[i].name
					}
					homeCtrl.pokedex.push(pokemon);
				}
			}
		});
    }

    fetchPokedex();

    // homeCtrl.showPokedex = function(game){
    //     return (game.user1.pseudo != GameService.pseudo) && !game.user2;
    // }

});