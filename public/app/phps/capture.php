<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

mysqli_set_charset($db, 'utf8');

$sql = "SELECT * FROM pokedex";

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
    echo '"id": '.$data['id'].', "name":"'.$data['name'].'", "caught":';
    if($data['caught'] == 1) echo 'true';
    else echo 'false';
    echo ', "caught_shiney":';
    if($data['caught_shiney'] == 1) echo 'true}';
    else echo 'false}';
};

echo("]");

mysqli_close($db);
?>
