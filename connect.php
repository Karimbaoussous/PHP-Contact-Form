<?php


$nom = $_POST[ 'nom' ];
$prenom = $_POST[ 'prenom' ];
$email = $_POST[ 'email' ];
$birthday = $_POST[ 'birthday' ];
$tele = $_POST[ 'tele' ];
$photo = $_POST[ 'photo' ];
//$photo = $_FILES['photo']['tmp_name'];
 // Database connection
 $conn = new mysqli('localhost','root','','test');

if($conn->connect_error){
    die('Connection Failed  : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("INSERT INTO mytable (Nom, Prénom, Email, Naissance, Telephone, Photo) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssb", $nom, $prenom, $email, $birthday, $tele, $photo);
    $stmt->execute();
    
    echo "Les éléments sont enregistrés avec succès...";
    $stmt->close();
    $conn->close();
}




?>