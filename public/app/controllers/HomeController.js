angular.module('pokedex')

.controller("HomeController", function (PokeService, $location, $localStorage){

	"use strict";

	var homeCtrl = this;

	homeCtrl.currentPage = 1;
	homeCtrl.itemsPerPage = 30;
	homeCtrl.maxSize = 5;

	function fetchPokedex (){
		var bottomLimit = (homeCtrl.currentPage-1) * 30;
		var topLimit = homeCtrl.currentPage * 30;

		PokeService.getTaillePokedex().then(function (result){
			homeCtrl.totalItems = result.data[0].size;
		});


		PokeService.getPokedex($localStorage.id_user, bottomLimit, topLimit).then(function (result){
	    	homeCtrl.pokedex = result.data;
	    });
    }

    fetchPokedex();

    homeCtrl.showDetail = function (name){
    	$location.path("/pokemon/"+name);
    }

    homeCtrl.pageChanges = function (){
    	fetchPokedex();
    }
});