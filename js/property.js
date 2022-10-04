let theUrl = window.location.href

let thePropId = theUrl.split('?')[1]

async function getProperty() {
  const response = await fetch(`${HOST}/?fetchProp`)
  const properties = await response.json()

  properties.forEach(property => {
    if (property.id == thePropId) {
      $('#propertyInfo').html(`
        <li class="mb-3 font-bold text-black" style="font-size: 18px">Description</li>
        <p>${property.description}.</p>

        <li class="mb-3 font-bold text-black" style="font-size: 18px">Feautures</li>
        <p class="location"><i class="fa fa-map-marker-alt text-primary"></i> ${property.location}.</p>
        <p class="bed"><i class="fa fa-bed text-primary"></i> ${property.bed_space} bedroom. </p>
        <p class="bed"><i class="fa fa-bath text-primary"></i> ${property.bathroom} bathroom. </p>
        <p class="theSize"><i class="fa fa-map text-primary"></i> ${property.land_size}. </p>
        <p class="theSize"><i class="fa fa-tag text-primary"></i> Asking Price : &#8358;${property.price}  </p>
      `)
    }
  })
}

getProperty()