<?php
// Include the database connection script
include './dbConnect.php';

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

function deleteData($conn,  $id) {
    $sql = "DELETE FROM projects WHERE id = $id";
    if ($conn->query($sql)) {
        return 1;
    } else {
        return 0;
    }
}


if(deleteData($pdo, $_GET['id'])){
    echo json_encode(array("status" => "success"));
}else{
    echo json_encode(array("status" => "failed"));
}

?>

