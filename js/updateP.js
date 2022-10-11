// let HOST = "http://localhost:8080/S.Khalid-Consulting/php"
let HOST = "http://localhost/sKhalid/php"
const fetchProperties = async () => {
  const response = await fetch(`${HOST}/?fetchProp`)
  const properties = await response.json()
  properties.map(property => {
    $('#showContent').append(`
    <div class="col-lg-4 col-md-6 propCard wow fadeInUp" data-bs-toggle="modal" data-bs-target="#exampleModal" data-wow-delay="0.3s" data-id="${property.id}" style="cursor: pointer">
      <div class="property-item rounded overflow-hidden">
        <div class="position-relative overflow-hidden">
          <img class="img-fluid" src="./img/properties/${property.image}" alt="">
          <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For ${property.listing_type}
          </div>
          <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
            ${property.property_type}</div>
        </div>
        <div class="p-4 pb-0">
          <h5 class="text-primary mb-3">&#8358; ${property.price}</h5>
          <a class="d-block h5 mb-2" href="">${property.description}</a>
          <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.location}</p>
        </div>
        <div class="d-flex border-top">
          <small class="flex-fill text-center border-end py-2"><i
              class="fa fa-ruler-combined text-primary me-2"></i>${property.land_size}</small>
          <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.bed_space}
            Bedroom</small>
          <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bathroom} Bathroom</small>
        </div>
      </div>
    </div>
  `)
  })
  let propCards = document.querySelectorAll('.propCard')
  propCards.forEach(propCard => {
    propCard.addEventListener('click', () => {
      $("#modalForm").html(`
      <form id="form" method="POST"  enctype="multipart/form-data">
          <div class="mb-3">
            <input type="hidden" class="form-control propId" id="${propCard.dataset.id}" aria-describedby="">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Listing_Type</label>
            <input type="text" class="form-control" id="ltype" aria-describedby="">
          </div>
          <div class="mb-3">
            <input type="file" id="image" name="image" class="form-control">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Property-type</label>
            <input type="text" class="form-control" id="ptype">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Price</label>
            <input type="text" class="form-control" id="price">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Description</label>
            <input type="text" class="form-control" id="descrpyt">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Location</label>
            <input type="text" class="form-control" id="locat">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Land Size</label>
            <input type="text" class="form-control" id="landS">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Bed Space</label>
            <input type="text" class="form-control" id="bspace">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Bathroom</label>
            <input type="text" class="form-control" id="bathroom">
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Availability</label>
            <input type="text" class="form-control" id="available">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" id="upload">Submit</button>
          </div>
        </form>
     `)
    })
  })
}
fetchProperties()



// const imag_input = document.querySelector("#image");
// let imgURL = ""
// imag_input.addEventListener("change", function () {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const uploaded_imag = reader.result;
//     document.querySelector(
//       "#display-image"
//     ).style.backgroundImage = `url(${uploaded_imag})`;
//     imgURL = uploaded_imag
//   });
//   reader.readAsDataURL(this.files[0]);
// });

let uploader = document.getElementById("upload") 
uploader.addEventListener("click", function (e) {
  e.preventDefault();
  let HOST = "http://localhost/sKhalid/php";


  let id = document.querySelector(".propId").value;
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
data.append( "updater", payload );
data.append("image", fileField.files[0])
data.append("listing_type", listing_type)
data.append("property_type", property_type)
data.append("price", price)
data.append("description", description)
data.append("locat", locat)
data.append("land_size", land_size)
data.append("bed_space", bed_space)
data.append("bathroom", bathroom)
data.append("id", id)
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

