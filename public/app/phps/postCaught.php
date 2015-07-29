<?php

$input = file_get_contents("php://input");
$postdata = json_decode($input);

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

//$db = mysqli_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0', 'u547058661_base');

mysqli_set_charset($db, 'utf8');

$sql = 'UPDATE capture SET normal='.$postdata->normal.', shiny='.$postdata->shiny.' WHERE id_user='.$postdata->id_user.' AND id_pokemon='.$postdata->id;


$req = mysqli_query($db, $sql);

mysqli_close($db);
?>
