angular.module('pokedex')

.controller("NavController", function ($location, $localStorage){

	"use strict";

	var navCtrl = this;

	navCtrl.id_user = 0;
	navCtrl.username = "";

    navCtrl.load = function(){
        if($localStorage.id_user != undefined){
        	navCtrl.id_user = $localStorage.id_user;
			navCtrl.username = $localStorage.username;
        }
    };

    navCtrl.load();

    navCtrl.disconnect = function(){
    	delete $localStorage.id_user;
    	delete $localStorage.username;
    	$location.path("/login");
    }
});