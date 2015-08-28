<?php

$input = file_get_contents("php://input");
$postdata = json_decode($input);

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

//$db = mysqli_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0', 'u547058661_base');

mysqli_set_charset($db, 'utf8');

$sql = 'INSERT INTO user (pseudo, mdp, nom, prenom, email) VALUES ("'.$postdata->pseudo.'", "'.$postdata->mdp.'", "'.$postdata->nom.'", "'.$postdata->prenom.'", "'.$postdata->email.'")';
$req = mysqli_query($db, $sql);

//$sql = "SELECT id_user FROM user WHERE pseudo='".$postdata->pseudo."' AND mdp='".$postdata->mdp."' AND nom='".$postdata->nom."' AND prenom='".$postdata->prenom."' AND email='".$postdata->email."'";
$sql = "SELECT id FROM user WHERE pseudo='$postdata->pseudo' AND mdp='$postdata->mdp' AND nom='$postdata->nom' AND prenom='$postdata->prenom' AND email='$postdata->email'";
$req = mysqli_query($db, $sql);
$res = mysqli_fetch_assoc($req);
$id = $res["id"];

for ($i = 1; $i <= 50; $i++) {
    $sql = "INSERT INTO capture (id_user, id_pokemon, normal, shiny) VALUES ('$id', '$i', 0, 0)";
	$req = mysqli_query($db, $sql);
}

mysqli_close($db);
?>