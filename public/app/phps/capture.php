<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysqli_connect('localhost', 'root', '', 'mon_pokedex');

//$db = mysqli_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0', 'u547058661_base');

mysqli_set_charset($db, 'utf8');

$sql = "SELECT * FROM capture c JOIN pokedex p ON c.id_pokemon = p.id_pokemon WHERE c.id_user=".$_GET['id_user']." LIMIT 30";

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
    echo '"id": '.$data['id'].', "name":"'.$data['name'].'", "normal":';
    if($data['normal'] == 1) echo 'true';
    else echo 'false';
    echo ', "shiny":';
    if($data['shiny'] == 1) echo 'true}';
    else echo 'false}';
};

echo("]");

mysqli_close($db);
?>
