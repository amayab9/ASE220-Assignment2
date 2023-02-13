document.getElementById('imageGallery').innerHTML += `
<div id="petName" class="container">
<h1>${json.pet.petName}</h1>
<div>Pet info goes here</div>
<hr />
<h2>Image Gallery</h2>
<div id="imageGallery" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

</div>
</div>`


document.getElementById('imageGallery').innerHTML += `

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`

async function loadPage() {
    let params = getAllUrlParams(window.location.href);
    let page;
    if (!params.hasOwnProperty('page')) {
        page = 1;
    } else {
        page = params.page;
    }
    console.log(page);
    const response = await fetch('Pets.json');
    const json = await response.json();
    setCurrentPage(page, json);
}

