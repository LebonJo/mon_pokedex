angular.module('pokedex')

.controller("PokemonController", function (PokeService, $location){

	"use strict";

	var homeCtrl = this;

	function getPokemon($location){
		console.log($location);
		PokeService.getPokemon().then(function (result){
	    	homeCtrl.pokedex = result.data;
	    });
    }

    getPokemon();
});