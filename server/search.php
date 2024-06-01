<?php
// Include the database connection script
include './dbConnect.php';

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Function to get project names
function getProjectNames($pdo , $name='') {
    $stmt = $pdo->query('SELECT * FROM projects where name like "%' . $name . '%"');
    $projects = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $projects;
}

if(isset($_GET['name'])){
    $name = $_GET['name'];
}else{
    $name = ''; 
}

$searchResults = getProjectNames($pdo , $name);


echo json_encode($searchResults);
?>
