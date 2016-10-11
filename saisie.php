<?php

// récupération des données
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$ville = $_POST['ville'];
$age = $_POST['age'];


// Connection à la base de donnée
$db = new PDO('mysql:host=localhost;dbname=test','root','coda');

// Insertion des données dans la base
$data = $db->prepare("INSERT INTO formulaire(nom, prenom, ville, age) VALUES(:nom,:prenom,:ville,:age)");
$data->execute(array(

    'nom'=>$nom,
    'prenom'=>$prenom,
    'ville'=>$ville,
    'age'=>$age
));
echo "gg";
header('location: index.html');
exit();
?>