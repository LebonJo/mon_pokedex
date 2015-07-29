<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

//$db = mysqli_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0', 'u547058661_base');

mysqli_set_charset($db, 'utf8');

$select_pokemon = "SELECT * FROM pokedex WHERE name =".$_GET['name']; // FAIRE UN JOIN !!!!!!

$result = mysqli_query($db, $select_pokemon);

echo("[");

$pokemon = mysqli_fetch_assoc($result);
// on affiche les informations de l'enregistrement en cours
echo '{"id":'.$pokemon['id'].',"name":"'.$pokemon['name'].'"';

$select_infos = "SELECT * from pokemon WHERE id=".$pokemon['id_pokemon'];
$response = mysqli_query($db, $select_infos);
$infos = mysqli_fetch_assoc($response);

echo ',"description":"'.$infos['description'].'", "localisation":"'.$infos['localisation'].'", "en_name":"'.$infos['en_name'].'"}'; 

echo("]");

mysqli_close($db);
?>