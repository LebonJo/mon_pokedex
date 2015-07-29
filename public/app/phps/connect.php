<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

//$db = mysqli_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0', 'u547058661_base');

mysqli_set_charset($db, 'utf8');

$select_user = "SELECT id, pseudo FROM user WHERE pseudo =".$_GET['pseudo']." AND mdp =".$_GET['mdp'];

$result = mysqli_query($db, $select_user);

$user = mysqli_fetch_assoc($result);

if($user){
	echo '[{"success":true, "user":"'.$user['pseudo'].'", "id_user":'.$user['id'].'}]';
} else {
	echo '[{"success":false}]';
}

mysqli_close($db);
?>