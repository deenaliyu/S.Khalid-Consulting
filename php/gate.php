<?php

function fetchProperty(){
    include "config/index.php";
    $availability = "sale";
    $query_User_re = sprintf("SELECT * FROM property_l WHERE `availability` = $availability");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
            $cc = [];
            do {
                $cc[] = $row_User_re;
            } while ($row_User_re = mysqli_fetch_assoc($User_re));
            exit(json_encode($cc));
    }
}

function createPropertyListing(){
    include "config/index.php";
    $listing_type = $_POST['listing_type'];
    $image = $_POST['image'];
    $property_type = $_POST['property_type'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $location = $_POST['location'];
    $land_size = $_POST['land_size'];
    $bed_space = $_POST['bed_space'];
    $bathroom = $_POST['bathroom'];
    $availability = $_POST['availability'];

    $query_User_re = sprintf("INSERT INTO property_l (`listing_type`, `image`, `property_type`, `price`, `description`, `location`, `land_size`, `bed_space`, `bathroom`, `availability`)
                            VALUES('$listing_type', '$image', '$property_type', '$price', '$description', '$location', '$land_size', '$bed_space', '$bathroom', '$availability')");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    // $row_User_re = mysqli_fetch_assoc($User_re);
    // $totalRows_User_re = mysqli_num_rows($User_re);
    if ($User_re ) {
            $arr = [
                'status' => 1,'message' => "property added successfully"
            ];
            exit(json_encode($arr));
    }
}

function updatePropertyListing(){
    include "config/index.php";
    $id = $_POST['id'];
    $listing_type = $_POST['listing_type'];
    $image = $_POST['image'];
    $property_type = $_POST['property_type'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $location = $_POST['location'];
    $land_size = $_POST['land_size'];
    $bed_space = $_POST['bed_space'];
    $bathroom = $_POST['bathroom'];
    $availability = $_POST['availability'];

    $query_User_re = sprintf("UPDATE property_l SET `listing_type`= '$listing_type', `image` = '$image', `property_type`= '$property_type', `price` = '$price', `description` = '$description', `location` = '$location', `land_size` = '$land_size', `bed_space` = '$bed_space', `bathroom` = '$bathroom', `availability` = '$availability' WHERE id = '$id'");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($User_re) {
            $arr = [
                'status' => 1,'message' => "property Upadated successfully"
            ];
            exit(json_encode($arr));
    }else {
        $arr = [
            'status' => 0,'message' => "Failed to add Property"
        ];
        exit(json_encode($arr));
    }
}

?>