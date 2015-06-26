angular.module('pokedex')

.controller("PokemonController", function (PokeService, $routeParams){

	"use strict";

	var pokemonCtrl = this;

	function getPokemon(){
		PokeService.getPokemon($routeParams['name']).then(function (result){
	    	pokemonCtrl.pokemon = result.data[0];
	    });
    }

    getPokemon();
});