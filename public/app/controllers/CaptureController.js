angular.module('pokedex')

.controller("CaptureController", function (PokeService, $localStorage){

	"use strict";

	var captureCtrl = this;

	function getCapture (){
		PokeService.getCapture($localStorage.id_user).then(function (result){
	    	captureCtrl.pokedex = result.data;
	    });
    };

    getCapture();

    captureCtrl.setCapture = function (pokemon){
    	PokeService.setCapture(pokemon, $localStorage.id_user).then(function (result){
    		getCapture();
    	});
    };

    captureCtrl.setCaptureShiney = function (pokemon){
        PokeService.setCaptureShiney(pokemon, $localStorage.id_user).then(function (result){
            getCapture();
        });
    };
});