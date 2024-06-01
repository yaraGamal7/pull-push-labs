<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


require "./dbConnect.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$name = $data['name'];
$password = $data['password'];

// regiter user 

$sql = "INSERT INTO user (name,email, password) VALUES ('$email' ,'$name', '$password')";

if ($pdo->query($sql)) {
    echo json_encode(array("status" => "success"));
} else {
    echo json_encode(array("status" => "failed"));
}


?>