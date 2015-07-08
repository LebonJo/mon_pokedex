angular.module('pokedex')

.controller("CaptureController", function (PokeService){

	"use strict";

	var captureCtrl = this;

	function getCapture (){
		PokeService.getCapture().then(function (result){
	    	captureCtrl.pokedex = result.data;
	    });
    };

    getCapture();

    captureCtrl.setCapture = function (pokemon){
    	PokeService.setCapture(pokemon).then(function (result){
    		console.log(result);
    		getCapture();
    	});
    }
});