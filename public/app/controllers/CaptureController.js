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
});