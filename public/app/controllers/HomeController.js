angular.module('pokedex')

.controller("HomeController", function (PokeService, $location){

	"use strict";

	var homeCtrl = this;

	function fetchPokedex (){
		PokeService.getPokedex().then(function (result){
	    	homeCtrl.pokedex = result.data;
	    });
    }

    fetchPokedex();

    homeCtrl.showDetail = function (){
    	$location.path("/pokemon");
    }
});