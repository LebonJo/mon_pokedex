<?php

$input = file_get_contents("php://input");
$postdata = json_decode($input);

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

mysqli_set_charset($db, 'utf8');

$sql = 'UPDATE pokedex SET caught='.$postdata->caught.', caught_shiney='.$postdata->caught_shiney.' WHERE id='.$postdata->id;
//$sql = 'UPDATE pokedex SET caught=0 WHERE id=1';


$req = mysqli_query($db, $sql);

mysqli_close($db);
?>
