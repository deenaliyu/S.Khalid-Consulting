<?php

function fetchProperty(){
    include "config/index.php";
    $availability = 'sale';
    $query_User_re = sprintf("SELECT * FROM property_l WHERE `availability` = '$availability'");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
            $arr = [
                'status' => 1,'Property_id' => $row_User_re['id'], 'image' => $row_User_re['image'], 'listing_type' => $row_User_re['listing_type'], 'property_type' => $row_User_re['property_type'], 'price' => $row_User_re['price'],
                'description' => $row_User_re['description'], 'location' => $row_User_re['location'], 'land_size' => $row_User_re['land_size'], 'bed space' => $row_User_re['bed_space'], 'bathroom' => $row_User_re['bathroom']
            ];
            exit(json_encode($arr));
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