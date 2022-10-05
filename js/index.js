$('#footer').html(`
<div class="container py-5">
<div class="row g-5">
  <div class="col-lg-3 col-md-6">
    <h5 class="text-white mb-4">Get In Touch</h5>
    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
    <div class="d-flex pt-2">
      <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
      <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
      <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
      <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
    </div>
  </div>
  <div class="col-lg-3 col-md-6">
    <h5 class="text-white mb-4">Quick Links</h5>
    <a class="btn btn-link text-white-50" href="">About Us</a>
    <a class="btn btn-link text-white-50" href="">Contact Us</a>
    <a class="btn btn-link text-white-50" href="">Our Services</a>
    <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
    <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
  </div>
  <div class="col-lg-6 col-md-6">
    <h5 class="text-white mb-4">Photo Gallery</h5>
    <div class="row g-2 pt-2">
      <div class="col-4">
        <img class="img-fluid rounded bg-light p-1" src="img/IMG-20220926-WA0017.jpg" alt="">
      </div>
      <div class="col-4">
        <img class="img-fluid rounded bg-light p-1" src="img/IMG-20220926-WA0082.jpg" alt="">
      </div>
      <div class="col-4">
        <img class="img-fluid rounded bg-light p-1" src="img/IMG-20220926-WA0075.jpg" alt="">
      </div>
      <div class="col-4">
        <img class="img-fluid rounded bg-light p-1" src="img/IMG-20220926-WA0058.jpg" alt="">
      </div>
      <div class="col-4">
        <img class="img-fluid rounded bg-light p-1" src="img/IMG-20220926-WA0021.jpg" alt="">
      </div>
      <div class="col-4">
        <img class="img-fluid rounded bg-light p-1" src="img/IMG-20220926-WA0036.jpg" alt="">
      </div>
    </div>
  </div>
</div>
</div>
<div class="container">
<div class="copyright">
  <div class="row">
    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
      &copy; <a class="border-bottom" href="#">S.Khalid</a>, All Right Reserved.

      <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
      Designed By <a class="border-bottom" href="#">HTML Codex</a>
    </div>
    <div class="col-md-6 text-center text-md-end">
      <div class="footer-menu">
        <a href="">Home</a>
        <a href="">Cookies</a>
        <a href="">Help</a>
        <a href="">FQAs</a>
      </div>
    </div>
  </div>
</div>
</div>
`)

$('#navBar').html(`
<nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
<a href="index.html" class="navbar-brand d-flex align-items-center text-center">
  <div class="icon p-2 me-2">
    <img class="img-fluid" src="img/logo.jpg" alt="Icon" style="width: 50px; height: 50px;">
  </div>
  <h1 class="m-0 text-primary">S.Khalid Consulting</h1>
</a>
<button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
  <div class="navbar-nav ms-auto">
    <a href="index.html" class="nav-item nav-link active">Home</a>
    <a href="services.html" class="nav-item nav-link">Services</a>
    <div class="nav-item dropdown">
      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
      <div class="dropdown-menu rounded-0 m-0">
        <a href="property-list.html" class="dropdown-item">Rent</a>
        <a href="property-list.html" class="dropdown-item">Sale</a>
        <a href="property-type.html" class="dropdown-item">Property Type</a>
        <a href="property-agent.html" class="dropdown-item">Property Agent</a>
      </div>
    </div>
    <!-- <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
        <div class="dropdown-menu rounded-0 m-0">
            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
            <a href="404.html" class="dropdown-item">404 Error</a>
        </div>
    </div> -->
    <a href="about.html" class="nav-item nav-link">About</a>
    <a href="contact.html" class="nav-item nav-link">Contact</a>
  </div>

</div>
</nav>
`)

$('#theHeader').html(`
<div class="row g-0 align-items-center flex-column-reverse flex-md-row">
  <div class="col-md-6 p-5 mt-lg-5">
    <h1 class="display-5 animated fadeIn mb-4">Find A <span class="text-primary">Perfect Home</span> To Live In
    </h1>
    <p class="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
      sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
    <a href="property-list.html" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
  </div>
  <div class="col-md-6 animated fadeIn">
    <div class="owl-carousel header-carousel">
      <div class="owl-carousel-item">
        <img class="img-fluid" src="img/IMG-20220926-WA0056.jpg" alt="">
      </div>
      <div class="owl-carousel-item">
        <img class="img-fluid" src="img/IMG-20220926-WA0053.jpg" alt="">
      </div>
    </div>
  </div>
</div>
`)
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