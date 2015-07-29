<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

//$db = mysqli_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0', 'u547058661_base');

mysqli_set_charset($db, 'utf8');

$type = json_decode($_GET['type']);
$userOrEmail = $_GET['userOrEmail'];

$select_user = "SELECT id FROM user WHERE ".$type." = ".$userOrEmail;

$result = mysqli_query($db, $select_user);

$user = mysqli_fetch_assoc($result);

if($user){
	echo '[{"success":true}]';
} else {
	echo '[{"success":false}]';
}

mysqli_close($db);
?>