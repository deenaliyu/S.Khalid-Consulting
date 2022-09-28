<?php

declare(strict_types=1);
// header('Content-type:application/json;charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include 'gate.php';
    if (isset($_GET['fetchProp'])) {
        fetchProperty();
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include 'gate.php';
    if (isset($_POST['createProperty'])) {
        createPropertyListing($_POST);
    }elseif (isset($_POST['updateProperty'])){
        updatePropertyListing($_POST);
    }
}
