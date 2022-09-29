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
    } elseif (isset($_GET['fetchAllProp'])) {
        fetchAllProperty();
    } elseif (isset($_GET['fetchAgent'])) {
        fetchAgent();
    } elseif (isset($_GET['fetchContact'])) {
        fetchContact();
    } elseif (isset($_GET['fetchPropManagers'])) {
        fetchPropManagers();
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include 'gate.php';
    if (isset($_POST['createProperty'])) {
        createPropertyListing($_POST);
    } elseif (isset($_POST['updateProperty'])) {
        updatePropertyListing($_POST);
    } elseif (isset($_POST['createAgent'])) {
        createAgent($_POST);
    } elseif (isset($_POST['updateAgent'])) {
        updateAgent($_POST);
    } elseif (isset($_POST['createContact'])) {
        createContact($_POST);
    } elseif (isset($_POST['updateContact'])) {
        updateContact($_POST);
    } elseif (isset($_POST['createPropManagers'])) {
        createPropManagers($_POST);
    } elseif (isset($_POST['updatePropManagers'])) {
        updatePropManagers($_POST);
    }
}

?>