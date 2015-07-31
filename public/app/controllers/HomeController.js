angular.module('pokedex')

.controller("HomeController", function (PokeService, $location, $localStorage){

	"use strict";

	var homeCtrl = this;

	homeCtrl.currentPage = 1;
	homeCtrl.totalItems = 721;
	homeCtrl.itemsPerPage = 30;
	homeCtrl.maxSize = 5;

	function fetchPokedex (){
		var bottomLimit = (homeCtrl.currentPage-1) * 30;
		var topLimit = homeCtrl.currentPage * 30;
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