angular.module('pokedex')

.controller("UserController", function (PokeService, $location, $localStorage){

	"use strict";

	var userCtrl = this;

    userCtrl.showNewUserForm = false;
    userCtrl.showErrorConnection = false;

    userCtrl.alerts = [];

    userCtrl.connect = function (pseudo, mdp){
    	PokeService.connect(pseudo, mdp).then(function (result){
            if(result.data[0].success){
                $localStorage.id_user = result.data[0].id_user;
                $localStorage.username = result.data[0].user;
                $location.path("/home");
            }
            else userCtrl.alerts.push({type : 'danger', msg: 'Aucun utilisateur correspondant trouvé'});
    	});
    };

    userCtrl.newUser = function (){
        userCtrl.alerts = [];
        userCtrl.showNewUserForm = true;
    };

    userCtrl.createUser = function (pseudo, mdp, nom, prenom, email){
        userCtrl.alerts = [];
        if(isNotNull(pseudo) && isNotNull(mdp) && isNotNull(nom) && isNotNull(prenom) && isNotNull(email)){
            findUserOrEmail("pseudo", pseudo).then(function (result){
                if(result.data[0].success){
                    userCtrl.alerts.push({type : 'danger', msg: 'Pseudo déjà utilisé'});
                } else {
                    if(isEmail(email)){
                        findUserOrEmail("email", email).then(function (result){
                            if(result.data[0].success){
                                userCtrl.alerts.push({type : 'danger', msg: 'Email déjà utilisé'});
                            } else {
                                PokeService.createUser(pseudo, mdp, nom, prenom, email).then(function (result){});
                                userCtrl.showNewUserForm = false;
                                userCtrl.alerts.push({type : 'success', msg: 'Compte créé. Vous pouvez vous connecter !'});
                            }                            
                        });
                    } else {
                        userCtrl.alerts.push({type : 'danger', msg: 'Entrez une adresse mail valide'});
                    }
                }
            });
        } else {
            userCtrl.alerts.push({type : 'danger', msg: 'Tous les champs sont obligatoires'});
        }        
    };

    function redirectIfUser(){
        if($localStorage.id_user != undefined) $location.path("/home");
    };

    function isEmail(email){
        // La 1ère étape consiste à définir l'expression régulière d'une adresse email
        var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
        return regEmail.test(email);
    }

    function isNotNull(string){
        if(string!=null && string!=undefined && string!="") return true;
        else return false;
    }

    function findUserOrEmail(type, userOrEmail){
        return PokeService.findUserOrEmail(type, userOrEmail);
    }

    redirectIfUser();

});