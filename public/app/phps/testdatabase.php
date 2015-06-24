<html>
 <head>
  <title>Test PHP</title>
 </head>
 <body>
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = mysql_connect('mysql.hostinger.fr', 'u547058661_admin', 'VtqGHJBxr0');

mysql_select_db('u547058661_base',$db); 

$sql = "SELECT * FROM pokedex";

$req = mysql_query($sql);
echo($req);
$data = mysql_fetch_assoc($req);
while($data = mysql_fetch_assoc($req)) 
    { 
    	echo($data);
    // on affiche les informations de l'enregistrement en cours 
    //echo '<b>'.$data['id'].' '.$data['name'].'</b> ('.$data['caught'].')'; 
    };

mysql_close();
?>
 </body>
</html>