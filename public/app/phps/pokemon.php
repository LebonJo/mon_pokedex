<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

$select_pokemon = "SELECT * FROM pokedex WHERE name =".$_GET['name']; // FAIRE UN JOIN !!!!!!

$result = mysqli_query($db, $select_pokemon);

echo("[");

$pokemon = mysqli_fetch_assoc($result);
// on affiche les informations de l'enregistrement en cours
echo '{"id":'.$pokemon['id'].',"name":"'.$pokemon['name'].'","caught":'.$pokemon['caught'];

$select_infos = "SELECT * from pokemon WHERE id=".$pokemon['id_pokemon'];
$response = mysqli_query($db, $select_infos);
$infos = mysqli_fetch_assoc($response);

echo ',"description":"'.$infos['description'].'", "localisation":"'.$infos['localisation'].'"}'; 

echo("]");

mysqli_close($db);
?>