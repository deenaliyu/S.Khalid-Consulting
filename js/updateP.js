// let HOST = "http://localhost:8080/S.Khalid-Consulting/php"
let HOST = "http://localhost/sKhalid/php"
const fetchProperties = async () => {
  const response = await fetch(`${HOST}/?fetchProp`)
  const properties = await response.json()
  properties.map(property => {
    $('#showContent').append(`
    <div class="col-lg-4 col-md-6 propCard wow fadeInUp" data-wow-delay="0.3s" data-id="${property.id}" style="cursor: pointer">
      <div class="property-item rounded overflow-hidden">
        <div class="position-relative overflow-hidden">
          <a href=""><img class="img-fluid" src="img/${property.image}" alt=""></a>
          <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${property.listing_type}
          <img class="img-fluid" src="img/${property.image}" alt="">
          <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent
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
            Bed</small>
          <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.bathroom} Bath</small>
        </div>
      </div>
    </div>
  `)
  })
  let propCards = document.querySelectorAll('.propCard')
  propCards.forEach(propCard => {
    propCard.addEventListener('click', () => {
      window.location.href = `property.html?${propCard.dataset.id}`
    })
  })

}
fetchProperties()