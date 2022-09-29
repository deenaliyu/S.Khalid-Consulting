<?php
function fetchAllProperty(){
    include "config/index.php";
    $query_User_re = sprintf("SELECT * FROM property_l");
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
function fetchProperty(){
    include "config/index.php";
    $availability = "sale";
    $query_User_re = sprintf("SELECT * FROM property_l WHERE `availability` = '$availability'");
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

function fetchAgent(){
    include "config/index.php";
    $fullname = "fullname";
    $img = "image";
    $phone = "phone";

    $query_User_re = sprintf("SELECT * FROM agent");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    // $row_User_re = mysqli_fetch_assoc($User_re);
    // $totalRows_User_re = mysqli_num_rows($User_re);
    if ($User_re) {
            $arr = [
                'status' => 1,'Agent_id' => $row_User_re['id'], 'image' => $row_User_re['image'], 'phone' => $row_User_re['phone']
            ];
            exit(json_encode($arr));
    }
}

function createAgent(){
    include "config/index.php";
    $fullname = "fullname";
    $img = "image";
    $phone = "phone";

    $query_User_re = sprintf("INSERT INTO agent (`fullname`, `image`, `phone`)
                            VALUES('$fullname', '$img', '$phone')");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
            $arr = [
                'status' => 1,'message' => "agent added successfully"
            ];
            exit(json_encode($arr));
    }
    else {
        $arr = [
            'status' => 0,'message' => "Failed to add Agent"
        ];
        exit(json_encode($arr));
}
}

function updateAgent(){
    include "config/index.php";
    $fullname = "fullname";
    $img = "image";
    $phone = "phone";

    $query_User_re = sprintf("UPDATE agent SET `fullname`= '$fullname', `image` = '$img', `phone`= '$phone' WHERE id = '$id'");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($User_re) {
            $arr = [
                'status' => 1,'message' => "agent Updated successfully"
            ];
            exit(json_encode($arr));
    }else {
        $arr = [
            'status' => 0,'message' => "Failed to update Property"
        ];
        exit(json_encode($arr));
    }
}
function fetchContact(){
    include "config/index.php";
    $location = "location";
    $phone = "phone";

    $query_User_re = sprintf("SELECT * FROM contact");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
            $arr = [
                'status' => 1,'location' => $row_User_re['location'], 'phone' => $row_User_re['phone']
            ];
            exit(json_encode($arr));
    }
}

function createContact(){
    include "config/index.php";
    $location = "location";
    $phone = "phone";

    $query_User_re = sprintf("INSERT INTO contact (`location`, `phone`)
                            VALUES('$location', '$phone')");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
            $arr = [
                'status' => 1,'message' => "contact added successfully"
            ];
            exit(json_encode($arr));
    }
    else {
        $arr = [
            'status' => 0,'message' => "Failed to add contact"
        ];
        exit(json_encode($arr));
}

}

function updateContact(){
    include "config/index.php";
    $location = "location";
    $phone = "phone";

    $query_User_re = sprintf("UPDATE contact SET `location`= '$location', `phone`= '$phone' WHERE id = '$id'");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($User_re) {
            $arr = [
                'status' => 1,'message' => "Contact Updated successfully"
            ];
            exit(json_encode($arr));
    }else {
        $arr = [
            'status' => 0,'message' => "Failed to update Contact"
        ];
        exit(json_encode($arr));
    }
}
function fetchPropManagers(){
    include "config/index.php";
    $fname = "fullname";
    $image = "image";
    $designation = "designation";
    $twitter = "twitter";
    $facebook = "facebook";
    $linkedin = "linkedin";

    $query_User_re = sprintf("SELECT * FROM property_managers");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
            $arr = [
                'status' => 1,'Manager_id' => $row_User_re['id'], 'fullname' => $row_User_re['fullname'], 'image' => $row_User_re['image'], 'designation' => $row_User_re['designation'], 'twitter' => $row_User_re['twitter'],
                'facebook' => $row_User_re['facebook'], 'linkedin' => $row_User_re['linkedin']
            ];
            exit(json_encode($arr));
    }
}

function createPropManagers(){
    include "config/index.php";
    $fname = "fullname";
    $image = "image";
    $designation = "designation";
    $twitter = "twitter";
    $facebook = "facebook";
    $linkedin = "linkedin";

    $query_User_re = sprintf("INSERT INTO property_managers (`fullname`, `image`, `designation`, `twitter`, `facebook`, `linkedin`)
                            VALUES('$fname', '$image', '$designation', '$twitter','$facebook', '$linkedin')");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($totalRows_User_re > 0) {
            $arr = [
                'status' => 1,'message' => "Property manager added successfully"
            ];
            exit(json_encode($arr));
    }
    else {
        $arr = [
            'status' => 0,'message' => "Failed to add property manager"
        ];
        exit(json_encode($arr));
}

}

function updatePropManagers(){
    include "config/index.php";
    $fname = "fullname";
    $image = "image";
    $designation = "designation";
    $twitter = "twitter";
    $facebook = "facebook";
    $linkedin = "linkedin";

    $query_User_re = sprintf("UPDATE property_managers SET `fullname`= '$fname', `image`= '$image', `designation`= '$designation', `twitter`= '$twitter', `facebook`= '$facebook', `linkedin`= '$linkedin' WHERE id = '$id'");
    $User_re = mysqli_query($sKhalid, $query_User_re) or die(mysqli_error($sKhalid));
    $row_User_re = mysqli_fetch_assoc($User_re);
    $totalRows_User_re = mysqli_num_rows($User_re);
    if ($User_re) {
            $arr = [
                'status' => 1,'message' => "Property agent Updated successfully"
            ];
            exit(json_encode($arr));
    }else {
        $arr = [
            'status' => 0,'message' => "Failed to update property agent"
        ];
        exit(json_encode($arr));
    }
}

?>