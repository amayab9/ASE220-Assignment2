const paginationLimit = 6;
let currentPage = 1;


document.addEventListener('DOMContentLoaded', () => loadPage(), false);
const setCurrentPage = (pageNum, content) => {
  const pageCount = Math.ceil(content.pet.length / paginationLimit);
  currentPage = pageNum;
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  for(let i =0; i < pageCount; i++){
    document.getElementById('pageNav').innerHTML += `<a href="index.html?page=${i+1}">${i+1}&emsp;</a> `
  }

  content.pet.forEach((item, index) => {
    if (index >= prevRange && index < currRange) {
      document.getElementById('pageListing').innerHTML += `
            <div col>
            <div class="card shadow-sm ">
                <div class="card" 
                 style="width:100%;"><img src="${item.pictures[0]}"class="card-img-top"> 
                </div>
                  <div class="card-body">
                    <p class="card-text">${item.petName}<br />
                                        ${item.breed} &emsp;  &emsp;${item.gender}<br />
                                        ${item.age}<br />
                                        ${item.location}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button><a href="detail.html?index=${item.ID}" type="button" class="btn btn-sm btn-outline-secondary">View</a></button>
                      </div>
                      <small class="text-muted">${item.petType}</small>
                    </div>
                  </div>
                </div>
              </div`

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
