const image_input = document.querySelector("#image");
let imgURL = ""
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
    imgURL = uploaded_image
  });
  reader.readAsDataURL(this.files[0]);
});
// $("#upload").on("click", function (e) {
//   e.preventDefault();
//   let HOST = "http://localhost/sKhalid/php";

//   let listing_type = document.querySelector("#ltype").value;
//   let image = document.querySelector("#image").value;
//   let property_type = document.querySelector("#ptype").value;
//   let price = document.querySelector("#price").value;
//   let description = document.querySelector("#descrpyt").value;
//   let locat = document.querySelector("#locat").value;
//   let land_size = document.querySelector("#landS").value;
//   let bed_space = document.querySelector("#bspace").value;
//   let bathroom = document.querySelector("#bathroom").value;
//   console.log(listing_type, property_type, price, description, locat, land_size, bed_space, bathroom, image)
//   $.ajax({
//     type: "POST",
//     url: `${HOST}/index.php`,
//     data: {
//       createProperty: "",
//       listing_type: listing_type,
//       image: image,
//       property_type: property_type,
//       price: price,
//       description: description,
//       location: locat,
//       land_size: land_size,
//       bed_space: bed_space,
//       bathroom: bathroom,
//     },
//     dataType: "json",
//     success: function (data) {
//       // let dd = data.status
//       // if(dd === 1){
//       //   alert(data.message)
//       // }
//       // alert("musa")
//       console.log("load");
//     },
//   });
// });
