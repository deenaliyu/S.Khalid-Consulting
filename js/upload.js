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
let upload = document.getElementById("upload") 
upload.addEventListener("click", function (e) {
  e.preventDefault();
  let HOST = "http://localhost/sKhalid/php";

  let listing_type = document.querySelector("#ltype").value;
  let property_type = document.querySelector("#ptype").value;
  let price = document.querySelector("#price").value;
  let description = document.querySelector("#descrpyt").value;
  let locat = document.querySelector("#locat").value;
  let land_size = document.querySelector("#landS").value;
  let bed_space = document.querySelector("#bspace").value;
  let bathroom = document.querySelector("#bathroom").value;
const fileField = document.querySelector("#image");

console.log(fileField.files[0])
var payload = {
  listing_type: listing_type, property_type: property_type, price: price,
  description: description, locat: locat,land_size: land_size, bed_space: bed_space, bathroom: bathroom
};

var data = new FormData();
data.append( "files", payload );
data.append("image", fileField.files[0])
data.append("listing_type", listing_type)
data.append("property_type", property_type)
data.append("price", price)
data.append("description", description)
data.append("locat", locat)
data.append("land_size", land_size)
data.append("bed_space", bed_space)
data.append("bathroom", bathroom)
console.log(data)
const uploading = async () => {
  const rawResponse = await fetch(`${HOST}/index.php`, {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Access-Control-Allow-Origin': this.apiURL,
      'Access-Control-Allow-Methods': ' POST',
      'Access-Control-Allow-Headers': 'origin,X-Requested-With,content-type,accept',
      'Access-Control-Allow-Credentials': 'true',
    },
    body: data
  });
  const content = await rawResponse.json();

  console.log(content);
};
uploading();
});

