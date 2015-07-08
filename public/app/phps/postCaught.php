<?php

echo $_POST['caught'];

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

mysqli_set_charset($db, 'utf8');

$sql = 'UPDATE pokedex SET caught='.$_POST['caught'].' WHERE id='.$_POST['id'];
$sql = 'UPDATE pokedex SET caught=0 WHERE id=1';


$req = mysqli_query($db, $sql);

mysqli_close($db);
?>
