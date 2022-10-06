let theUrl = window.location.href

let thePropId = theUrl.split('?')[1]

async function getProperty() {
  const response = await fetch(`${HOST}/?fetchProp`)
  const properties = await response.json()

  properties.forEach(property => {
    if (property.id == thePropId) {
      $('#propertyInfo').html(`
        <li class="mb-3 font-bold text-black" style="font-size: 18px">Description</li>
        <p>${property.description}.
        </p>
        <p>${property.about}</p>
        <li class="mb-3 font-bold text-black" style="font-size: 18px">Feautures</li>
        <p class="location"><i class="fa fa-map-marker-alt text-primary"></i> ${property.location}.</p>
        <p class="bed"><i class="fa fa-bed text-primary"></i> ${property.bed_space} bedroom. </p>
        <p class="bed"><i class="fa fa-bath text-primary"></i> ${property.bathroom} bathroom. </p>
        <p class="theSize"><i class="fa fa-map text-primary"></i> ${property.land_size}. </p>
        <p class="theSize"><i class="fa fa-tag text-primary"></i> Asking Price : &#8358;${property.price}  </p>
      `)

      let galleryArr = property.gallery.split('~')
      console.log(galleryArr)
      for (let i = 0; i < galleryArr.length; i++) {
        let img = galleryArr[i]

        $('#gallery').append(`
          <li class="splide__slide">
            <img src="./img/properties/gallery/${img}" alt="">
          </li>
        `)
        $('#thumbnails').append(`
          <li class="thumbnail">
            <img src="./img/properties/gallery/${img}" alt="">
          </li>
        `)
      }
      var splide = new Splide('#main-carousel', {
        pagination: false,
        type: 'loop',
        autoplay: true
      });
      var thumbnails = document.getElementsByClassName('thumbnail');
      var current;

      for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
      }

      // The function to initialize each thumbnail.
      function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener('click', function () {
          // move the carousel
          splide.go(index);
        });
      }

      splide.on('mounted move', function () {
        if (current) {
          current.classList.remove('is-active');
        }

        // Splide#index returns the latest slide index:
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
          thumbnail.classList.add('is-active');
          current = thumbnail;
        }
      });
      splide.mount();
    }
  })


}

getProperty()