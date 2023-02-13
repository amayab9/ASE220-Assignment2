const paginationLimit = 6;
let currentPage = 1;


document.addEventListener('DOMContentLoaded', () => loadPage(), false);
const setCurrentPage = (pageNum, content) => {
    const pageCount = Math.ceil(content.pet.length / paginationLimit);
    currentPage = pageNum;
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    content.pet.forEach((item, index) => {
        if (index >= prevRange && index < currRange) {
            document.getElementById('pageListing').innerHTML += `
            <div class="col">
              <div class="card shadow-sm">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    <div class="card-body">
                      <p class="card-text">${item.petName}<br />
                                          ${item.breed} &emsp;  &emsp;${item.gender}<br />
                                          ${item.age}<br />
                                          ${item.location}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button href="detail.html?index=${item.ID}" type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                        <small class="text-muted">${item.petType}</small>
                      </div>
                    </div>
                  </div>
                </div>`
        }
    }
    )
}

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


