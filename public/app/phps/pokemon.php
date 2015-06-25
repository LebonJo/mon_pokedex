<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

$sql = "SELECT * FROM pokemon WHERE id =".$_GET['id'];

$req = mysqli_query($db, $sql);

echo("[");

$i = 1;

while($data = mysqli_fetch_assoc($req)){ 
    if($i == 1){
    	echo('{');
    	$i = 2;
    }else{
    	echo(',{');
    }
    // on affiche les informations de l'enregistrement en cours 
    echo '"id": '.$data['id'].', "description":"'.$data['description'].'", "localisation":"'.$data['localisation'].'"}'; 
};

echo("]");

mysqli_close($db);
?>